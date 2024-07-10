import { Static } from '@sinclair/typebox';
import { ApId } from '../common/id-generator';
export type FlowVersionId = ApId;
export declare enum FlowVersionState {
    LOCKED = "LOCKED",
    DRAFT = "DRAFT"
}
export declare const FlowVersion: import("@sinclair/typebox").TObject<{
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
    state: import("@sinclair/typebox").TEnum<typeof FlowVersionState>;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
}>;
export type FlowVersion = Static<typeof FlowVersion>;
export declare const FlowVersionMetadata: import("@sinclair/typebox").TObject<{
    flowId: import("@sinclair/typebox").TString<string>;
    displayName: import("@sinclair/typebox").TString<string>;
    valid: import("@sinclair/typebox").TBoolean;
    state: import("@sinclair/typebox").TEnum<typeof FlowVersionState>;
    updatedBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<string | null>>;
    updatedByUser: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<{
        externalId?: string | undefined;
        email: string;
        platformId: string | null;
        id: string;
        created: string;
        updated: string;
        password: string;
        status: import("@sinclair/typebox").TEnumStatic<typeof import("../user").UserStatus>;
        firstName: string;
        lastName: string;
        trackEvents: boolean;
        newsLetter: boolean;
        verified: boolean;
        platformRole: import("@sinclair/typebox").TEnumStatic<typeof import("../user").PlatformRole>;
    } | null>>;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
}>;
export type FlowVersionMetadata = Static<typeof FlowVersionMetadata>;
