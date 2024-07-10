import { Static } from '@sinclair/typebox';
import { PackageType, PieceType } from '../../pieces';
export declare const AUTHENTICATION_PROPERTY_NAME = "auth";
export declare enum TriggerType {
    EMPTY = "EMPTY",
    PIECE = "PIECE_TRIGGER"
}
export declare const EmptyTrigger: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<TriggerType.EMPTY>;
    settings: import("@sinclair/typebox").TAny;
    name: import("@sinclair/typebox").TString<string>;
    valid: import("@sinclair/typebox").TBoolean;
    displayName: import("@sinclair/typebox").TString<string>;
    nextAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>;
export type EmptyTrigger = Static<typeof EmptyTrigger>;
export declare const PieceTriggerSettings: import("@sinclair/typebox").TObject<{
    pieceName: import("@sinclair/typebox").TString<string>;
    pieceVersion: import("@sinclair/typebox").TString<string>;
    pieceType: import("@sinclair/typebox").TEnum<typeof PieceType>;
    packageType: import("@sinclair/typebox").TEnum<typeof PackageType>;
    triggerName: import("@sinclair/typebox").TString<string>;
    input: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TAny>;
    inputUiInfo: import("@sinclair/typebox").TObject<{
        currentSelectedData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
        customizedInputs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
        lastTestDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>;
}>;
export type PieceTriggerSettings = Static<typeof PieceTriggerSettings>;
export declare const PieceTrigger: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<TriggerType.PIECE>;
    settings: import("@sinclair/typebox").TObject<{
        pieceName: import("@sinclair/typebox").TString<string>;
        pieceVersion: import("@sinclair/typebox").TString<string>;
        pieceType: import("@sinclair/typebox").TEnum<typeof PieceType>;
        packageType: import("@sinclair/typebox").TEnum<typeof PackageType>;
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
}>;
export type PieceTrigger = Static<typeof PieceTrigger>;
export declare const Trigger: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<TriggerType.PIECE>;
    settings: import("@sinclair/typebox").TObject<{
        pieceName: import("@sinclair/typebox").TString<string>;
        pieceVersion: import("@sinclair/typebox").TString<string>;
        pieceType: import("@sinclair/typebox").TEnum<typeof PieceType>;
        packageType: import("@sinclair/typebox").TEnum<typeof PackageType>;
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
    type: import("@sinclair/typebox").TLiteral<TriggerType.EMPTY>;
    settings: import("@sinclair/typebox").TAny;
    name: import("@sinclair/typebox").TString<string>;
    valid: import("@sinclair/typebox").TBoolean;
    displayName: import("@sinclair/typebox").TString<string>;
    nextAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>]>;
export type Trigger = Static<typeof Trigger>;
