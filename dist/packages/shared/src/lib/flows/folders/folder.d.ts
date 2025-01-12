import { Static } from '@sinclair/typebox';
export type FolderId = string;
export declare const Folder: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TString<string>;
    displayName: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
}>;
export declare const UncategorizedFolderId = "UNCATEGORIZED";
export type Folder = Static<typeof Folder>;
export type FolderDto = Folder & {
    numberOfFlows: number;
};
