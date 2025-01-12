import { Static } from '@sinclair/typebox';
import { ApId } from '../common/id-generator';
export type FlowId = ApId;
export declare enum ScheduleType {
    CRON_EXPRESSION = "CRON_EXPRESSION"
}
export declare enum FlowStatus {
    ENABLED = "ENABLED",
    DISABLED = "DISABLED"
}
export declare const FlowScheduleOptions: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<ScheduleType>;
    cronExpression: import("@sinclair/typebox").TString<string>;
    timezone: import("@sinclair/typebox").TString<string>;
}>;
export type FlowScheduleOptions = Static<typeof FlowScheduleOptions>;
export declare const Flow: import("@sinclair/typebox").TObject<{
    projectId: import("@sinclair/typebox").TString<string>;
    folderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<string | null>>;
    status: import("@sinclair/typebox").TEnum<typeof FlowStatus>;
    schedule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<{
        type: ScheduleType;
        cronExpression: string;
        timezone: string;
    } | null>>;
    publishedVersionId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<string | null>>;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
}>;
export type Flow = Static<typeof Flow>;
export declare const PopulatedFlow: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    projectId: import("@sinclair/typebox").TString<string>;
    folderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<string | null>>;
    status: import("@sinclair/typebox").TEnum<typeof FlowStatus>;
    schedule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<{
        type: ScheduleType;
        cronExpression: string;
        timezone: string;
    } | null>>;
    publishedVersionId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<string | null>>;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
}>, import("@sinclair/typebox").TObject<{
    version: import("@sinclair/typebox").TObject<{
        flowId: import("@sinclair/typebox").TString<string>;
        displayName: import("@sinclair/typebox").TString<string>;
        trigger: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<import("./triggers/trigger").TriggerType.PIECE>;
            settings: import("@sinclair/typebox").TObject<{
                pieceName: import("@sinclair/typebox").TString<string>;
                pieceVersion: import("@sinclair/typebox").TString<string>;
                pieceType: import("@sinclair/typebox").TEnum<typeof import("../pieces").PieceType>;
                packageType: import("@sinclair/typebox").TEnum<typeof import("../pieces").PackageType>;
                triggerName: import("@sinclair/typebox").TString<string>;
                input: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TAny>;
                inputUiInfo: import("@sinclair/typebox").TObject<{
                    currentSelectedData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
                    customizedInputs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
                    lastTestDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>;
            }>;
            name: import("@sinclair/typebox").TString<string>;
            valid: import("@sinclair/typebox").TBoolean;
            displayName: import("@sinclair/typebox").TString<string>;
            nextAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<import("./triggers/trigger").TriggerType.EMPTY>;
            settings: import("@sinclair/typebox").TAny;
            name: import("@sinclair/typebox").TString<string>;
            valid: import("@sinclair/typebox").TBoolean;
            displayName: import("@sinclair/typebox").TString<string>;
            nextAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        }>]>;
        updatedBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<string | null>>;
        valid: import("@sinclair/typebox").TBoolean;
        state: import("@sinclair/typebox").TEnum<typeof import("./flow-version").FlowVersionState>;
        id: import("@sinclair/typebox").TString<string>;
        created: import("@sinclair/typebox").TString<string>;
        updated: import("@sinclair/typebox").TString<string>;
    }>;
}>]>;
export type PopulatedFlow = Static<typeof PopulatedFlow>;
