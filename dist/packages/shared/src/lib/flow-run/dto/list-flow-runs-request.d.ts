import { Static } from '@sinclair/typebox';
import { Cursor } from '../../common/seek-page';
import { FlowRunStatus } from '../execution/flow-execution';
export declare const ListFlowRunsRequestQuery: import("@sinclair/typebox").TObject<{
    flowId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof FlowRunStatus>>>;
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    cursor: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    createdAfter: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    createdBefore: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    projectId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type ListFlowRunsRequestQuery = Static<typeof ListFlowRunsRequestQuery> & {
    cursor: Cursor;
};
