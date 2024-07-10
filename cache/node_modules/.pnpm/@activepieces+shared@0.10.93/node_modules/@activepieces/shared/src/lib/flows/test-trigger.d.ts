import { Static } from '@sinclair/typebox';
export declare enum TriggerTestStrategy {
    SIMULATION = "SIMULATION",
    TEST_FUNCTION = "TEST_FUNCTION"
}
export declare const TestTriggerRequestBody: import("@sinclair/typebox").TObject<{
    flowId: import("@sinclair/typebox").TString<string>;
    flowVersionId: import("@sinclair/typebox").TString<string>;
    testStrategy: import("@sinclair/typebox").TEnum<typeof TriggerTestStrategy>;
}>;
export type TestTriggerRequestBody = Static<typeof TestTriggerRequestBody>;
