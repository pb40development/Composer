import { ApplicationEventName } from '@activepieces/ee-shared'
import { JobType, LATEST_JOB_DATA_SCHEMA_VERSION,     logger,
    RepeatableJobType } from '@activepieces/server-shared'
import {
    ActivepiecesError,
    ErrorCode,
    ExecutionType,
    FlowRun,
    isFailedState,
    isNil,
    PauseType,
    ProgressUpdateType,
    RunEnvironment,
} from '@activepieces/shared'
import dayjs from 'dayjs'
import { alertsService } from '../../ee/alerts/alerts-service'
import { issuesService } from '../../ee/issues/issues-service'
import { eventsHooks } from '../../helper/application-events'
import { flowQueue } from '../../workers/queue'
import { flowRunHooks } from './flow-run-hooks'

type StartParams = {
    flowRun: FlowRun
    executionType: ExecutionType
    payload: unknown
    synchronousHandlerId: string | undefined
    progressUpdateType: ProgressUpdateType
    httpRequestId: string | undefined
}

type PauseParams = {
    flowRun: FlowRun
}

const calculateDelayForPausedRun = (
    resumeDateTimeIsoString: string,
): number => {
    const now = dayjs()
    const resumeDateTime = dayjs(resumeDateTimeIsoString)
    const delayInMilliSeconds = resumeDateTime.diff(now)
    const resumeDateTimeAlreadyPassed = delayInMilliSeconds < 0

    if (resumeDateTimeAlreadyPassed) {
        return 0
    }

    return delayInMilliSeconds
}

export const flowRunSideEffects = {
    async finish({ flowRun }: { flowRun: FlowRun }): Promise<void> {
        await flowRunHooks
            .getHooks()
            .onFinish({ projectId: flowRun.projectId, tasks: flowRun.tasks! })
        if (flowRun.environment === RunEnvironment.PRODUCTION) {
            if (isFailedState(flowRun.status)) {
                const issue = await issuesService.add({
                    flowId: flowRun.flowId,
                    projectId: flowRun.projectId,
                    flowRunCreatedAt: flowRun.created,
                })

                await alertsService.sendAlertOnRunFinish({ issue, flowRunId: flowRun.id })
            }
        }
        eventsHooks.get().sendWorkerEvent(flowRun.projectId, {
            action: ApplicationEventName.FLOW_RUN_FINISHED,
            data: {
                flowRun,
            },
        })
    },
    async start({
        flowRun,
        executionType,
        payload,
        synchronousHandlerId,
        httpRequestId,
        progressUpdateType,
    }: StartParams): Promise<void> {
        logger.info(
            `[FlowRunSideEffects#start] flowRunId=${flowRun.id} executionType=${executionType}`,
        )

        await flowQueue.add(null, {
            id: flowRun.id,
            type: JobType.ONE_TIME,
            priority: isNil(synchronousHandlerId) ? 'medium' : 'high',
            data: {
                synchronousHandlerId: synchronousHandlerId ?? null,
                projectId: flowRun.projectId,
                environment: flowRun.environment,
                runId: flowRun.id,
                flowVersionId: flowRun.flowVersionId,
                payload,
                httpRequestId,
                executionType,
                progressUpdateType,
            },
        })
        eventsHooks.get().sendWorkerEvent(flowRun.projectId, {
            action: ApplicationEventName.FLOW_RUN_STARTED,
            data: {
                flowRun,
            },
        })
    },

    async pause({ flowRun }: PauseParams): Promise<void> {
        logger.info(
            `[FlowRunSideEffects#pause] flowRunId=${flowRun.id} pauseType=${flowRun.pauseMetadata?.type}`,
        )

        const { pauseMetadata } = flowRun

        if (isNil(pauseMetadata)) {
            throw new ActivepiecesError({
                code: ErrorCode.VALIDATION,
                params: {
                    message: `pauseMetadata is undefined flowRunId=${flowRun.id}`,
                },
            })
        }

        switch (pauseMetadata.type) {
            case PauseType.DELAY:
                await flowQueue.add(null, {
                    id: flowRun.id,
                    type: JobType.DELAYED,
                    data: {
                        schemaVersion: LATEST_JOB_DATA_SCHEMA_VERSION,
                        runId: flowRun.id,
                        synchronousHandlerId: flowRun.pauseMetadata?.handlerId ?? null,
                        progressUpdateType: flowRun.pauseMetadata?.progressUpdateType ?? ProgressUpdateType.NONE,
                        projectId: flowRun.projectId,
                        environment: flowRun.environment,
                        jobType: RepeatableJobType.DELAYED_FLOW,
                        flowVersionId: flowRun.flowVersionId,
                    },
                    delay: calculateDelayForPausedRun(pauseMetadata.resumeDateTime),
                })
                break
            case PauseType.WEBHOOK:
                break
        }
    },
}
