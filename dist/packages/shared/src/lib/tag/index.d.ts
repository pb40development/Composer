import { Static } from '@sinclair/typebox';
export declare const Tag: import("@sinclair/typebox").TObject<{
    platformId: import("@sinclair/typebox").TString<string>;
    name: import("@sinclair/typebox").TString<string>;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
}>;
export type Tag = Static<typeof Tag>;
export declare const PieceTag: import("@sinclair/typebox").TObject<{
    pieceName: import("@sinclair/typebox").TString<string>;
    tagId: import("@sinclair/typebox").TString<string>;
    platformId: import("@sinclair/typebox").TString<string>;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
}>;
export type PieceTag = Static<typeof PieceTag>;
export declare const ListTagsRequest: import("@sinclair/typebox").TObject<{
    platformId: import("@sinclair/typebox").TString<string>;
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    cursor: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type ListTagsRequest = Static<typeof ListTagsRequest>;
export declare const SetPieceTagsRequest: import("@sinclair/typebox").TObject<{
    piecesName: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
}>;
export type SetPieceTagsRequest = Static<typeof SetPieceTagsRequest>;
export declare const UpsertTagRequest: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString<string>;
}>;
export type UpsertTagRequest = Static<typeof UpsertTagRequest>;
