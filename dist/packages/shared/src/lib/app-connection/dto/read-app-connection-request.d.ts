import { Static } from '@sinclair/typebox';
export declare const ListAppConnectionsRequestQuery: import("@sinclair/typebox").TObject<{
    cursor: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    projectId: import("@sinclair/typebox").TString<string>;
    pieceName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export type ListAppConnectionsRequestQuery = Static<typeof ListAppConnectionsRequestQuery>;
