import { Static } from '@sinclair/typebox';
import { FlowRetryStrategy } from './flow-run';
export declare const TestFlowRunRequestBody: import("@sinclair/typebox").TObject<{
    flowVersionId: import("@sinclair/typebox").TString<string>;
}>;
export type TestFlowRunRequestBody = Static<typeof TestFlowRunRequestBody>;
export declare const RetryFlowRequestBody: import("@sinclair/typebox").TObject<{
    strategy: import("@sinclair/typebox").TEnum<typeof FlowRetryStrategy>;
}>;
export type RetryFlowRequestBody = Static<typeof RetryFlowRequestBody>;
