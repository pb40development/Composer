import { Static } from '@sinclair/typebox';
import { Cursor } from '../../common/seek-page';
import { FlowStatus } from '../flow';
export declare const ListFlowsRequest: import("@sinclair/typebox").TObject<{
    folderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    cursor: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof FlowStatus>>;
    projectId: import("@sinclair/typebox").TString<string>;
}>;
export type ListFlowsRequest = Omit<Static<typeof ListFlowsRequest>, 'cursor'> & {
    cursor: Cursor | undefined;
};
export declare const GetFlowQueryParamsRequest: import("@sinclair/typebox").TObject<{
    versionId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type GetFlowQueryParamsRequest = Static<typeof GetFlowQueryParamsRequest>;
export declare const ListFlowVersionRequest: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    cursor: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type ListFlowVersionRequest = Omit<Static<typeof ListFlowVersionRequest>, 'cursor'> & {
    cursor: Cursor | undefined;
};
