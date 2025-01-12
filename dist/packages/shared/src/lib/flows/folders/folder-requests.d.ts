import { Static } from '@sinclair/typebox';
import { Cursor } from '../../common/seek-page';
export declare const CreateOrRenameFolderRequest: import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
}>;
export type CreateOrRenameFolderRequest = Static<typeof CreateOrRenameFolderRequest>;
export declare const DeleteFolderRequest: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
}>;
export type DeleteFlowRequest = Static<typeof DeleteFolderRequest>;
export declare const ListFolderRequest: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    cursor: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type ListFolderRequest = Omit<Static<typeof ListFolderRequest>, 'cursor'> & {
    cursor: Cursor | undefined;
};
