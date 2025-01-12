import { Static } from '@sinclair/typebox';
import { Cursor } from '../../common/seek-page';
import { FlowId } from '../flow';
export declare const ListTriggerEventsRequest: import("@sinclair/typebox").TObject<{
    flowId: import("@sinclair/typebox").TString<string>;
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    cursor: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type ListTriggerEventsRequest = Omit<Static<typeof ListTriggerEventsRequest>, 'flowId' | 'cursor'> & {
    flowId: FlowId;
    cursor: Cursor | undefined;
};
export declare const TestPollingTriggerRequest: import("@sinclair/typebox").TObject<{
    flowId: import("@sinclair/typebox").TString<string>;
}>;
export type TestPollingTriggerRequest = Static<typeof TestPollingTriggerRequest>;
