import { TriggerPayload } from '../../engine';
import { StepOutput } from './step-output';
export declare const MAX_LOG_SIZE: number;
export declare enum ExecutionType {
    BEGIN = "BEGIN",
    RESUME = "RESUME"
}
export type ExecutionState = {
    steps: Record<string, StepOutput>;
};
export declare const ExecutionState: import("@sinclair/typebox").TObject<{
    steps: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>;
}>;
export type ExecutioOutputFile = {
    executionState: ExecutionState;
};
export type ResumePayload = TriggerPayload;
