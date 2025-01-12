import { Static } from '@sinclair/typebox';
import { ApId } from '../common/id-generator';
import { ExecutionState } from './execution/execution-output';
import { FlowRunStatus } from './execution/flow-execution';
export type FlowRunId = ApId;
export declare enum RunEnvironment {
    PRODUCTION = "PRODUCTION",
    TESTING = "TESTING"
}
export declare enum FlowRetryStrategy {
    ON_LATEST_VERSION = "ON_LATEST_VERSION",
    FROM_FAILED_STEP = "FROM_FAILED_STEP"
}
export type FlowRetryPayload = {
    strategy: FlowRetryStrategy;
};
export declare const FlowRun: import("@sinclair/typebox").TObject<{
    projectId: import("@sinclair/typebox").TString<string>;
    flowId: import("@sinclair/typebox").TString<string>;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    flowVersionId: import("@sinclair/typebox").TString<string>;
    flowDisplayName: import("@sinclair/typebox").TString<string>;
    terminationReason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    logsFileId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<string | null>>;
    tasks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    status: import("@sinclair/typebox").TEnum<typeof FlowRunStatus>;
    duration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    startTime: import("@sinclair/typebox").TString<string>;
    finishTime: import("@sinclair/typebox").TString<string>;
    environment: import("@sinclair/typebox").TEnum<typeof RunEnvironment>;
    pauseMetadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<import("./execution/flow-execution").PauseType.DELAY>;
        resumeDateTime: import("@sinclair/typebox").TString<string>;
        handlerId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        progressUpdateType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("../engine").ProgressUpdateType>>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<import("./execution/flow-execution").PauseType.WEBHOOK>;
        requestId: import("@sinclair/typebox").TString<string>;
        response: import("@sinclair/typebox").TUnknown;
        handlerId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        progressUpdateType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("../engine").ProgressUpdateType>>;
    }>]>>;
    steps: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
}>;
export type FlowRun = Static<typeof FlowRun> & ExecutionState;
