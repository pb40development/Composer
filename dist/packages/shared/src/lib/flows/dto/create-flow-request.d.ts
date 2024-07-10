import { Static } from '@sinclair/typebox';
export declare const CreateFlowRequest: import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    folderName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    projectId: import("@sinclair/typebox").TString<string>;
}>;
export type CreateFlowRequest = Static<typeof CreateFlowRequest>;
