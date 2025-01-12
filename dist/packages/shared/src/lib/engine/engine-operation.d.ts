import { Static } from '@sinclair/typebox';
import { AppConnectionValue } from '../app-connection/app-connection';
import { ExecutionState, ExecutionType, ResumePayload } from '../flow-run/execution/execution-output';
import { FlowRunId, RunEnvironment } from '../flow-run/flow-run';
import { FlowVersion } from '../flows/flow-version';
import { PiecePackage } from '../pieces';
import { ProjectId } from '../project/project';
export declare enum EngineOperationType {
    EXTRACT_PIECE_METADATA = "EXTRACT_PIECE_METADATA",
    EXECUTE_STEP = "EXECUTE_STEP",
    EXECUTE_FLOW = "EXECUTE_FLOW",
    EXECUTE_PROPERTY = "EXECUTE_PROPERTY",
    EXECUTE_TRIGGER_HOOK = "EXECUTE_TRIGGER_HOOK",
    EXECUTE_VALIDATE_AUTH = "EXECUTE_VALIDATE_AUTH"
}
export declare enum TriggerHookType {
    ON_ENABLE = "ON_ENABLE",
    ON_DISABLE = "ON_DISABLE",
    HANDSHAKE = "HANDSHAKE",
    RENEW = "RENEW",
    RUN = "RUN",
    TEST = "TEST"
}
export type EngineOperation = ExecuteStepOperation | ExecuteFlowOperation | ExecutePropsOptions | ExecuteTriggerOperation<TriggerHookType> | ExecuteExtractPieceMetadata | ExecuteValidateAuthOperation;
export type BaseEngineOperation = {
    projectId: ProjectId;
    engineToken: string;
    internalApiUrl: string;
    publicUrl: string;
};
export type ExecuteValidateAuthOperation = BaseEngineOperation & {
    piece: PiecePackage;
    auth: AppConnectionValue;
};
export type ExecuteExtractPieceMetadata = PiecePackage;
export type ExecuteStepOperation = BaseEngineOperation & {
    stepName: string;
    flowVersion: FlowVersion;
};
export type ExecutePropsOptions = BaseEngineOperation & {
    piece: PiecePackage;
    propertyName: string;
    stepName: string;
    flowVersion: FlowVersion;
    input: Record<string, unknown>;
    searchValue?: string;
};
type BaseExecuteFlowOperation<T extends ExecutionType> = BaseEngineOperation & {
    flowVersion: FlowVersion;
    flowRunId: FlowRunId;
    executionType: T;
    runEnvironment: RunEnvironment;
    serverHandlerId: string | null;
    httpRequestId: string | null;
    progressUpdateType: ProgressUpdateType;
};
export declare enum ProgressUpdateType {
    WEBHOOK_RESPONSE = "WEBHOOK_RESPONSE",
    TEST_FLOW = "TEST_FLOW",
    NONE = "NONE"
}
export type BeginExecuteFlowOperation = BaseExecuteFlowOperation<ExecutionType.BEGIN> & {
    triggerPayload: unknown;
};
export type ResumeExecuteFlowOperation = BaseExecuteFlowOperation<ExecutionType.RESUME> & {
    tasks: number;
    resumePayload: ResumePayload;
} & ExecutionState;
export type ExecuteFlowOperation = BeginExecuteFlowOperation | ResumeExecuteFlowOperation;
export type ExecuteTriggerOperation<HT extends TriggerHookType> = BaseEngineOperation & {
    hookType: HT;
    flowVersion: FlowVersion;
    webhookUrl: string;
    triggerPayload?: TriggerPayload;
    appWebhookUrl?: string;
    webhookSecret?: string;
};
export type TriggerPayload<T = unknown> = {
    body: T;
    headers: Record<string, string>;
    queryParams: Record<string, string>;
};
export type EventPayload<B = unknown> = {
    body: B;
    rawBody?: unknown;
    method: string;
    headers: Record<string, string>;
    queryParams: Record<string, string>;
};
export type ParseEventResponse = {
    event?: string;
    identifierValue?: string;
    reply?: {
        headers: Record<string, string>;
        body: unknown;
    };
};
export type AppEventListener = {
    events: string[];
    identifierValue: string;
};
type ExecuteTestOrRunTriggerResponse = {
    success: boolean;
    message?: string;
    output: unknown[];
};
type ExecuteHandshakeTriggerResponse = {
    success: boolean;
    message?: string;
    response?: {
        status: number;
        body?: unknown;
        headers?: Record<string, string>;
    };
};
type ExecuteOnEnableTriggerResponse = {
    listeners: AppEventListener[];
    scheduleOptions?: ScheduleOptions;
};
export declare const EngineHttpResponse: import("@sinclair/typebox").TObject<{
    status: import("@sinclair/typebox").TNumber;
    body: import("@sinclair/typebox").TUnknown;
    headers: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TString<string>>;
}>;
export type EngineHttpResponse = Static<typeof EngineHttpResponse>;
export type ExecuteTriggerResponse<H extends TriggerHookType> = H extends TriggerHookType.RUN ? ExecuteTestOrRunTriggerResponse : H extends TriggerHookType.HANDSHAKE ? ExecuteHandshakeTriggerResponse : H extends TriggerHookType.TEST ? ExecuteTestOrRunTriggerResponse : H extends TriggerHookType.RENEW ? Record<string, never> : H extends TriggerHookType.ON_DISABLE ? Record<string, never> : ExecuteOnEnableTriggerResponse;
export type ExecuteActionResponse = {
    success: boolean;
    output: unknown;
    message?: string;
};
type BaseExecuteValidateAuthResponseOutput<Valid extends boolean> = {
    valid: Valid;
};
type ValidExecuteValidateAuthResponseOutput = BaseExecuteValidateAuthResponseOutput<true>;
type InvalidExecuteValidateAuthResponseOutput = BaseExecuteValidateAuthResponseOutput<false> & {
    error: string;
};
export type ExecuteValidateAuthResponse = ValidExecuteValidateAuthResponseOutput | InvalidExecuteValidateAuthResponseOutput;
export type ScheduleOptions = {
    cronExpression: string;
    timezone: string;
};
export type EngineResponse<T> = {
    status: EngineResponseStatus;
    response: T;
};
export declare enum EngineResponseStatus {
    OK = "OK",
    ERROR = "ERROR",
    TIMEOUT = "TIMEOUT"
}
export {};
