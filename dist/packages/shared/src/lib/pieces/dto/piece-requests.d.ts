import { Static } from '@sinclair/typebox';
import { ApEdition } from '../../flag/flag';
import { PackageType, PieceCategory, PieceType } from '../piece';
export declare const EXACT_VERSION_PATTERN: RegExp;
export declare const VERSION_PATTERN: RegExp;
export declare const ExactVersionType: import("@sinclair/typebox").TString<string>;
export declare const VersionType: import("@sinclair/typebox").TString<string>;
export declare enum SuggestionType {
    ACTION = "ACTION",
    TRIGGER = "TRIGGER",
    ACTION_AND_TRIGGER = "ACTION_AND_TRIGGER"
}
export declare enum PieceSortBy {
    NAME = "NAME",
    UPDATED = "UPDATED",
    CREATED = "CREATED",
    POPULARITY = "POPULARITY"
}
export declare enum PieceOrderBy {
    ASC = "ASC",
    DESC = "DESC"
}
export declare const GetPieceRequestWithScopeParams: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString<string>;
    scope: import("@sinclair/typebox").TString<string>;
}>;
export type GetPieceRequestWithScopeParams = Static<typeof GetPieceRequestWithScopeParams>;
export declare const GetPieceRequestParams: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString<string>;
}>;
export type GetPieceRequestParams = Static<typeof GetPieceRequestParams>;
export declare const ListPiecesRequestQuery: import("@sinclair/typebox").TObject<{
    release: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    includeTags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    includeHidden: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    edition: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof ApEdition>>;
    searchQuery: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    sortBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof PieceSortBy>>;
    orderBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof PieceOrderBy>>;
    categories: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof PieceCategory>>>;
    suggestionType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof SuggestionType>>;
}>;
export type ListPiecesRequestQuery = Static<typeof ListPiecesRequestQuery>;
export declare const ListVersionRequestQuery: import("@sinclair/typebox").TObject<{
    release: import("@sinclair/typebox").TString<string>;
    name: import("@sinclair/typebox").TString<string>;
    edition: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof ApEdition>>;
}>;
export type ListVersionRequestQuery = Static<typeof ListVersionRequestQuery>;
export declare const GetPieceRequestQuery: import("@sinclair/typebox").TObject<{
    version: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export declare const ListVersionsResponse: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>>;
export type ListVersionsResponse = Static<typeof ListVersionsResponse>;
export type GetPieceRequestQuery = Static<typeof GetPieceRequestQuery>;
export declare const PieceOptionRequest: import("@sinclair/typebox").TObject<{
    packageType: import("@sinclair/typebox").TEnum<typeof PackageType>;
    pieceType: import("@sinclair/typebox").TEnum<typeof PieceType>;
    pieceName: import("@sinclair/typebox").TString<string>;
    pieceVersion: import("@sinclair/typebox").TString<string>;
    stepName: import("@sinclair/typebox").TString<string>;
    propertyName: import("@sinclair/typebox").TString<string>;
    flowId: import("@sinclair/typebox").TString<string>;
    flowVersionId: import("@sinclair/typebox").TString<string>;
    input: import("@sinclair/typebox").TAny;
    searchValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type PieceOptionRequest = Static<typeof PieceOptionRequest>;
export declare enum PieceScope {
    PROJECT = "PROJECT",
    PLATFORM = "PLATFORM"
}
export declare const AddPieceRequestBody: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    packageType: import("@sinclair/typebox").TLiteral<PackageType.ARCHIVE>;
    scope: import("@sinclair/typebox").TEnum<typeof PieceScope>;
    pieceName: import("@sinclair/typebox").TString<string>;
    pieceVersion: import("@sinclair/typebox").TString<string>;
    pieceArchive: import("@sinclair/typebox").TUnknown;
}>, import("@sinclair/typebox").TObject<{
    packageType: import("@sinclair/typebox").TLiteral<PackageType.REGISTRY>;
    scope: import("@sinclair/typebox").TEnum<typeof PieceScope>;
    pieceName: import("@sinclair/typebox").TString<string>;
    pieceVersion: import("@sinclair/typebox").TString<string>;
}>]>;
export type AddPieceRequestBody = Static<typeof AddPieceRequestBody>;
