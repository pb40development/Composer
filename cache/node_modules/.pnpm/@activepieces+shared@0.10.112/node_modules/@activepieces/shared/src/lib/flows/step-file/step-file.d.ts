import { Static } from '@sinclair/typebox';
export declare const StepFile: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString<string>;
    flowId: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TString<string>;
    stepName: import("@sinclair/typebox").TString<string>;
    size: import("@sinclair/typebox").TNumber;
    data: import("@sinclair/typebox").TUnknown;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
}>;
export type StepFile = Static<typeof StepFile>;
export declare const StepFileUpsert: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString<string>;
    flowId: import("@sinclair/typebox").TString<string>;
    stepName: import("@sinclair/typebox").TString<string>;
    file: import("@sinclair/typebox").TUnknown;
}>;
export type StepFileUpsert = Static<typeof StepFileUpsert>;
export declare const StepFileGet: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TString<string>;
}>;
export type StepFileGet = Static<typeof StepFileGet>;
export declare const StepFileWithUrl: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString<string>;
    flowId: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TString<string>;
    stepName: import("@sinclair/typebox").TString<string>;
    size: import("@sinclair/typebox").TNumber;
    data: import("@sinclair/typebox").TUnknown;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
}>, import("@sinclair/typebox").TObject<{
    url: import("@sinclair/typebox").TString<string>;
}>]>;
export type StepFileWithUrl = Static<typeof StepFileWithUrl>;
