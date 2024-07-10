import { Static } from '@sinclair/typebox';
export declare const FlowVersionTemplate: import("@sinclair/typebox").TObject<{
    valid: import("@sinclair/typebox").TBoolean;
    displayName: import("@sinclair/typebox").TString<string>;
    trigger: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<import("../triggers/trigger").TriggerType.PIECE>;
        settings: import("@sinclair/typebox").TObject<{
            pieceName: import("@sinclair/typebox").TString<string>;
            pieceVersion: import("@sinclair/typebox").TString<string>;
            pieceType: import("@sinclair/typebox").TEnum<typeof import("../../pieces").PieceType>;
            packageType: import("@sinclair/typebox").TEnum<typeof import("../../pieces").PackageType>;
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
        type: import("@sinclair/typebox").TLiteral<import("../triggers/trigger").TriggerType.EMPTY>;
        settings: import("@sinclair/typebox").TAny;
        name: import("@sinclair/typebox").TString<string>;
        valid: import("@sinclair/typebox").TBoolean;
        displayName: import("@sinclair/typebox").TString<string>;
        nextAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>]>;
}>;
export type FlowVersionTemplate = Static<typeof FlowVersionTemplate>;
export declare enum TemplateType {
    PLATFORM = "PLATFORM",
    PROJECT = "PROJECT"
}
export declare const FlowTemplate: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TString<string>;
    type: import("@sinclair/typebox").TEnum<typeof TemplateType>;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    pieces: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    blogUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    template: import("@sinclair/typebox").TObject<{
        valid: import("@sinclair/typebox").TBoolean;
        displayName: import("@sinclair/typebox").TString<string>;
        trigger: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<import("../triggers/trigger").TriggerType.PIECE>;
            settings: import("@sinclair/typebox").TObject<{
                pieceName: import("@sinclair/typebox").TString<string>;
                pieceVersion: import("@sinclair/typebox").TString<string>;
                pieceType: import("@sinclair/typebox").TEnum<typeof import("../../pieces").PieceType>;
                packageType: import("@sinclair/typebox").TEnum<typeof import("../../pieces").PackageType>;
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
            type: import("@sinclair/typebox").TLiteral<import("../triggers/trigger").TriggerType.EMPTY>;
            settings: import("@sinclair/typebox").TAny;
            name: import("@sinclair/typebox").TString<string>;
            valid: import("@sinclair/typebox").TBoolean;
            displayName: import("@sinclair/typebox").TString<string>;
            nextAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        }>]>;
    }>;
    projectId: import("@sinclair/typebox").TString<string>;
    platformId: import("@sinclair/typebox").TString<string>;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
}>;
export type FlowTemplate = Static<typeof FlowTemplate>;
export declare const FlowTemplateWithoutProjectInformation: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TString<string>;
    pieces: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    blogUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    template: import("@sinclair/typebox").TObject<{
        valid: import("@sinclair/typebox").TBoolean;
        displayName: import("@sinclair/typebox").TString<string>;
        trigger: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<import("../triggers/trigger").TriggerType.PIECE>;
            settings: import("@sinclair/typebox").TObject<{
                pieceName: import("@sinclair/typebox").TString<string>;
                pieceVersion: import("@sinclair/typebox").TString<string>;
                pieceType: import("@sinclair/typebox").TEnum<typeof import("../../pieces").PieceType>;
                packageType: import("@sinclair/typebox").TEnum<typeof import("../../pieces").PackageType>;
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
            type: import("@sinclair/typebox").TLiteral<import("../triggers/trigger").TriggerType.EMPTY>;
            settings: import("@sinclair/typebox").TAny;
            name: import("@sinclair/typebox").TString<string>;
            valid: import("@sinclair/typebox").TBoolean;
            displayName: import("@sinclair/typebox").TString<string>;
            nextAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        }>]>;
    }>;
}>;
export type FlowTemplateWithoutProjectInformation = Static<typeof FlowTemplateWithoutProjectInformation>;
export declare const ListFlowTemplatesRequest: import("@sinclair/typebox").TObject<{
    pieces: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    search: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type ListFlowTemplatesRequest = Static<typeof ListFlowTemplatesRequest>;
