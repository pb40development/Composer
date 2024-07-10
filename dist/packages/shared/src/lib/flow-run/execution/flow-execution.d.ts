import { Static } from '@sinclair/typebox';
import { ProgressUpdateType } from '../../engine';
export declare enum FlowRunStatus {
    FAILED = "FAILED",
    QUOTA_EXCEEDED = "QUOTA_EXCEEDED",
    INTERNAL_ERROR = "INTERNAL_ERROR",
    PAUSED = "PAUSED",
    RUNNING = "RUNNING",
    STOPPED = "STOPPED",
    SUCCEEDED = "SUCCEEDED",
    TIMEOUT = "TIMEOUT"
}
export declare enum PauseType {
    DELAY = "DELAY",
    WEBHOOK = "WEBHOOK"
}
export declare const DelayPauseMetadata: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<PauseType.DELAY>;
    resumeDateTime: import("@sinclair/typebox").TString<string>;
    handlerId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    progressUpdateType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof ProgressUpdateType>>;
}>;
export type DelayPauseMetadata = Static<typeof DelayPauseMetadata>;
export declare const WebhookPauseMetadata: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<PauseType.WEBHOOK>;
    requestId: import("@sinclair/typebox").TString<string>;
    response: import("@sinclair/typebox").TUnknown;
    handlerId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    progressUpdateType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof ProgressUpdateType>>;
}>;
export type WebhookPauseMetadata = Static<typeof WebhookPauseMetadata>;
export declare const PauseMetadata: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<PauseType.DELAY>;
    resumeDateTime: import("@sinclair/typebox").TString<string>;
    handlerId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    progressUpdateType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof ProgressUpdateType>>;
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<PauseType.WEBHOOK>;
    requestId: import("@sinclair/typebox").TString<string>;
    response: import("@sinclair/typebox").TUnknown;
    handlerId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    progressUpdateType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof ProgressUpdateType>>;
}>]>;
export type PauseMetadata = Static<typeof PauseMetadata>;
export declare const StopResponse: import("@sinclair/typebox").TObject<{
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    body: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
    headers: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TString<string>>>;
}>;
export type StopResponse = Static<typeof StopResponse>;
export declare const FlowError: import("@sinclair/typebox").TObject<{
    stepName: import("@sinclair/typebox").TString<string>;
    message: import("@sinclair/typebox").TString<string>;
}>;
export type FlowError = Static<typeof FlowError>;
export declare const FlowRunResponse: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    status: import("@sinclair/typebox").TLiteral<FlowRunStatus.PAUSED>;
    pauseMetadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<PauseType.DELAY>;
        resumeDateTime: import("@sinclair/typebox").TString<string>;
        handlerId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        progressUpdateType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof ProgressUpdateType>>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<PauseType.WEBHOOK>;
        requestId: import("@sinclair/typebox").TString<string>;
        response: import("@sinclair/typebox").TUnknown;
        handlerId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        progressUpdateType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof ProgressUpdateType>>;
    }>]>>;
    steps: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>;
    duration: import("@sinclair/typebox").TNumber;
    tasks: import("@sinclair/typebox").TNumber;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    error: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        stepName: import("@sinclair/typebox").TString<string>;
        message: import("@sinclair/typebox").TString<string>;
    }>>;
    stopResponse: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        body: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
        headers: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TString<string>>>;
    }>>;
}>, import("@sinclair/typebox").TObject<{
    status: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<FlowRunStatus.FAILED>, import("@sinclair/typebox").TLiteral<FlowRunStatus.SUCCEEDED>, import("@sinclair/typebox").TLiteral<FlowRunStatus.RUNNING>, import("@sinclair/typebox").TLiteral<FlowRunStatus.QUOTA_EXCEEDED>, import("@sinclair/typebox").TLiteral<FlowRunStatus.TIMEOUT>, import("@sinclair/typebox").TLiteral<FlowRunStatus.INTERNAL_ERROR>, import("@sinclair/typebox").TLiteral<FlowRunStatus.STOPPED>]>;
    steps: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>;
    duration: import("@sinclair/typebox").TNumber;
    tasks: import("@sinclair/typebox").TNumber;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    error: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        stepName: import("@sinclair/typebox").TString<string>;
        message: import("@sinclair/typebox").TString<string>;
    }>>;
    stopResponse: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        body: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
        headers: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TString<string>>>;
    }>>;
}>]>;
export type FlowRunResponse = Static<typeof FlowRunResponse>;
export declare const isFlowStateTerminal: (status: FlowRunStatus) => boolean;
export declare const isFailedState: (status: FlowRunStatus) => boolean;
