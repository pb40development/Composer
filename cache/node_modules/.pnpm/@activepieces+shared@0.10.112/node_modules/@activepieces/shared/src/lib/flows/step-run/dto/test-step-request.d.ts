import { Static } from '@sinclair/typebox';
export declare const CreateStepRunRequestBody: import("@sinclair/typebox").TObject<{
    flowVersionId: import("@sinclair/typebox").TString<string>;
    stepName: import("@sinclair/typebox").TString<string>;
    id: import("@sinclair/typebox").TString<string>;
}>;
export type CreateStepRunRequestBody = Static<typeof CreateStepRunRequestBody>;
export declare const StepRunResponse: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    success: import("@sinclair/typebox").TBoolean;
    output: import("@sinclair/typebox").TUnknown;
    standardError: import("@sinclair/typebox").TString<string>;
    standardOutput: import("@sinclair/typebox").TString<string>;
}>;
export type StepRunResponse = Static<typeof StepRunResponse>;
export declare const StepExecutionPath: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TTuple<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TNumber]>>;
export type StepExecutionPath = Static<typeof StepExecutionPath>;
