import { Static } from '@sinclair/typebox';
import { PackageType, PieceType } from '../../pieces';
import { PieceTriggerSettings } from '../triggers/trigger';
export declare enum ActionType {
    CODE = "CODE",
    PIECE = "PIECE",
    LOOP_ON_ITEMS = "LOOP_ON_ITEMS",
    BRANCH = "BRANCH"
}
export declare const ActionErrorHandlingOptions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
    continueOnFailure: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        value: import("@sinclair/typebox").TBoolean;
    }>>;
    retryOnFailure: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        value: import("@sinclair/typebox").TBoolean;
    }>>;
}>>;
export type ActionErrorHandlingOptions = Static<typeof ActionErrorHandlingOptions>;
export declare const SourceCode: import("@sinclair/typebox").TObject<{
    packageJson: import("@sinclair/typebox").TString<string>;
    code: import("@sinclair/typebox").TString<string>;
}>;
export type SourceCode = Static<typeof SourceCode>;
export declare const CodeActionSettings: import("@sinclair/typebox").TObject<{
    sourceCode: import("@sinclair/typebox").TObject<{
        packageJson: import("@sinclair/typebox").TString<string>;
        code: import("@sinclair/typebox").TString<string>;
    }>;
    input: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TAny>;
    inputUiInfo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        currentSelectedData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
        customizedInputs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
        lastTestDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>>;
    errorHandlingOptions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        continueOnFailure: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            value: import("@sinclair/typebox").TBoolean;
        }>>;
        retryOnFailure: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            value: import("@sinclair/typebox").TBoolean;
        }>>;
    }>>;
}>;
export type CodeActionSettings = Static<typeof CodeActionSettings>;
export declare const CodeActionSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<ActionType.CODE>;
    settings: import("@sinclair/typebox").TObject<{
        sourceCode: import("@sinclair/typebox").TObject<{
            packageJson: import("@sinclair/typebox").TString<string>;
            code: import("@sinclair/typebox").TString<string>;
        }>;
        input: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TAny>;
        inputUiInfo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            currentSelectedData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
            customizedInputs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
            lastTestDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>>;
        errorHandlingOptions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            continueOnFailure: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                value: import("@sinclair/typebox").TBoolean;
            }>>;
            retryOnFailure: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                value: import("@sinclair/typebox").TBoolean;
            }>>;
        }>>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    valid: import("@sinclair/typebox").TBoolean;
    displayName: import("@sinclair/typebox").TString<string>;
}>;
export declare const PieceActionSettings: import("@sinclair/typebox").TObject<{
    packageType: import("@sinclair/typebox").TEnum<typeof PackageType>;
    pieceType: import("@sinclair/typebox").TEnum<typeof PieceType>;
    pieceName: import("@sinclair/typebox").TString<string>;
    pieceVersion: import("@sinclair/typebox").TString<string>;
    actionName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    input: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TAny>;
    inputUiInfo: import("@sinclair/typebox").TObject<{
        currentSelectedData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
        customizedInputs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
        lastTestDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>;
    errorHandlingOptions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        continueOnFailure: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            value: import("@sinclair/typebox").TBoolean;
        }>>;
        retryOnFailure: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            value: import("@sinclair/typebox").TBoolean;
        }>>;
    }>>;
}>;
export type PieceActionSettings = Static<typeof PieceActionSettings>;
export declare const PieceActionSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<ActionType.PIECE>;
    settings: import("@sinclair/typebox").TObject<{
        packageType: import("@sinclair/typebox").TEnum<typeof PackageType>;
        pieceType: import("@sinclair/typebox").TEnum<typeof PieceType>;
        pieceName: import("@sinclair/typebox").TString<string>;
        pieceVersion: import("@sinclair/typebox").TString<string>;
        actionName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        input: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TAny>;
        inputUiInfo: import("@sinclair/typebox").TObject<{
            currentSelectedData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
            customizedInputs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
            lastTestDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>;
        errorHandlingOptions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            continueOnFailure: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                value: import("@sinclair/typebox").TBoolean;
            }>>;
            retryOnFailure: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                value: import("@sinclair/typebox").TBoolean;
            }>>;
        }>>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    valid: import("@sinclair/typebox").TBoolean;
    displayName: import("@sinclair/typebox").TString<string>;
}>;
export declare const LoopOnItemsActionSettingsWithValidation: import("@sinclair/typebox").TObject<{
    items: import("@sinclair/typebox").TString<string>;
    inputUiInfo: import("@sinclair/typebox").TObject<{
        currentSelectedData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
        customizedInputs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
        lastTestDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>;
}>;
export type LoopOnItemsActionSettingsWithValidation = Static<typeof LoopOnItemsActionSettings>;
export declare const LoopOnItemsActionSettings: import("@sinclair/typebox").TObject<{
    items: import("@sinclair/typebox").TString<string>;
    inputUiInfo: import("@sinclair/typebox").TObject<{
        currentSelectedData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
        customizedInputs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
        lastTestDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>;
}>;
export type LoopOnItemsActionSettings = Static<typeof LoopOnItemsActionSettings>;
export declare const LoopOnItemsActionSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<ActionType.LOOP_ON_ITEMS>;
    settings: import("@sinclair/typebox").TObject<{
        items: import("@sinclair/typebox").TString<string>;
        inputUiInfo: import("@sinclair/typebox").TObject<{
            currentSelectedData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
            customizedInputs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
            lastTestDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    valid: import("@sinclair/typebox").TBoolean;
    displayName: import("@sinclair/typebox").TString<string>;
}>;
export declare enum BranchOperator {
    TEXT_CONTAINS = "TEXT_CONTAINS",
    TEXT_DOES_NOT_CONTAIN = "TEXT_DOES_NOT_CONTAIN",
    TEXT_EXACTLY_MATCHES = "TEXT_EXACTLY_MATCHES",
    TEXT_DOES_NOT_EXACTLY_MATCH = "TEXT_DOES_NOT_EXACTLY_MATCH",
    TEXT_STARTS_WITH = "TEXT_START_WITH",
    TEXT_DOES_NOT_START_WITH = "TEXT_DOES_NOT_START_WITH",
    TEXT_ENDS_WITH = "TEXT_ENDS_WITH",
    TEXT_DOES_NOT_END_WITH = "TEXT_DOES_NOT_END_WITH",
    NUMBER_IS_GREATER_THAN = "NUMBER_IS_GREATER_THAN",
    NUMBER_IS_LESS_THAN = "NUMBER_IS_LESS_THAN",
    NUMBER_IS_EQUAL_TO = "NUMBER_IS_EQUAL_TO",
    BOOLEAN_IS_TRUE = "BOOLEAN_IS_TRUE",
    BOOLEAN_IS_FALSE = "BOOLEAN_IS_FALSE",
    EXISTS = "EXISTS",
    DOES_NOT_EXIST = "DOES_NOT_EXIST"
}
export declare const singleValueConditions: BranchOperator[];
export declare const textConditions: BranchOperator[];
export declare const BranchActionSettingsWithValidation: import("@sinclair/typebox").TObject<{
    conditions: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        firstValue: import("@sinclair/typebox").TString<string>;
        secondValue: import("@sinclair/typebox").TString<string>;
        caseSensitive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_CONTAINS>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_CONTAIN>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_EXACTLY_MATCHES>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_STARTS_WITH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_START_WITH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_ENDS_WITH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_END_WITH>]>>;
    }>, import("@sinclair/typebox").TObject<{
        firstValue: import("@sinclair/typebox").TString<string>;
        secondValue: import("@sinclair/typebox").TString<string>;
        operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<BranchOperator.NUMBER_IS_GREATER_THAN>, import("@sinclair/typebox").TLiteral<BranchOperator.NUMBER_IS_LESS_THAN>, import("@sinclair/typebox").TLiteral<BranchOperator.NUMBER_IS_EQUAL_TO>]>>;
    }>, import("@sinclair/typebox").TObject<{
        firstValue: import("@sinclair/typebox").TString<string>;
        operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<BranchOperator.EXISTS>, import("@sinclair/typebox").TLiteral<BranchOperator.DOES_NOT_EXIST>, import("@sinclair/typebox").TLiteral<BranchOperator.BOOLEAN_IS_TRUE>, import("@sinclair/typebox").TLiteral<BranchOperator.BOOLEAN_IS_FALSE>]>>;
    }>]>>>;
    inputUiInfo: import("@sinclair/typebox").TObject<{
        currentSelectedData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
        customizedInputs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
        lastTestDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>;
}>;
export declare const BranchCondition: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    firstValue: import("@sinclair/typebox").TString<string>;
    secondValue: import("@sinclair/typebox").TString<string>;
    caseSensitive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_CONTAINS>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_CONTAIN>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_EXACTLY_MATCHES>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_STARTS_WITH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_START_WITH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_ENDS_WITH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_END_WITH>]>>;
}>, import("@sinclair/typebox").TObject<{
    firstValue: import("@sinclair/typebox").TString<string>;
    secondValue: import("@sinclair/typebox").TString<string>;
    operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<BranchOperator.NUMBER_IS_GREATER_THAN>, import("@sinclair/typebox").TLiteral<BranchOperator.NUMBER_IS_LESS_THAN>, import("@sinclair/typebox").TLiteral<BranchOperator.NUMBER_IS_EQUAL_TO>]>>;
}>, import("@sinclair/typebox").TObject<{
    firstValue: import("@sinclair/typebox").TString<string>;
    operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<BranchOperator.EXISTS>, import("@sinclair/typebox").TLiteral<BranchOperator.DOES_NOT_EXIST>, import("@sinclair/typebox").TLiteral<BranchOperator.BOOLEAN_IS_TRUE>, import("@sinclair/typebox").TLiteral<BranchOperator.BOOLEAN_IS_FALSE>]>>;
}>]>;
export type BranchCondition = Static<typeof BranchCondition>;
export declare const BranchActionSettings: import("@sinclair/typebox").TObject<{
    conditions: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        firstValue: import("@sinclair/typebox").TString<string>;
        secondValue: import("@sinclair/typebox").TString<string>;
        caseSensitive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_CONTAINS>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_CONTAIN>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_EXACTLY_MATCHES>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_STARTS_WITH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_START_WITH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_ENDS_WITH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_END_WITH>]>>;
    }>, import("@sinclair/typebox").TObject<{
        firstValue: import("@sinclair/typebox").TString<string>;
        secondValue: import("@sinclair/typebox").TString<string>;
        operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<BranchOperator.NUMBER_IS_GREATER_THAN>, import("@sinclair/typebox").TLiteral<BranchOperator.NUMBER_IS_LESS_THAN>, import("@sinclair/typebox").TLiteral<BranchOperator.NUMBER_IS_EQUAL_TO>]>>;
    }>, import("@sinclair/typebox").TObject<{
        firstValue: import("@sinclair/typebox").TString<string>;
        operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<BranchOperator.EXISTS>, import("@sinclair/typebox").TLiteral<BranchOperator.DOES_NOT_EXIST>, import("@sinclair/typebox").TLiteral<BranchOperator.BOOLEAN_IS_TRUE>, import("@sinclair/typebox").TLiteral<BranchOperator.BOOLEAN_IS_FALSE>]>>;
    }>]>>>;
    inputUiInfo: import("@sinclair/typebox").TObject<{
        currentSelectedData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
        customizedInputs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
        lastTestDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>;
}>;
export type BranchActionSettings = Static<typeof BranchActionSettings>;
export declare const BranchActionSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<ActionType.BRANCH>;
    settings: import("@sinclair/typebox").TObject<{
        conditions: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            firstValue: import("@sinclair/typebox").TString<string>;
            secondValue: import("@sinclair/typebox").TString<string>;
            caseSensitive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_CONTAINS>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_CONTAIN>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_EXACTLY_MATCHES>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_STARTS_WITH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_START_WITH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_ENDS_WITH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_END_WITH>]>>;
        }>, import("@sinclair/typebox").TObject<{
            firstValue: import("@sinclair/typebox").TString<string>;
            secondValue: import("@sinclair/typebox").TString<string>;
            operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<BranchOperator.NUMBER_IS_GREATER_THAN>, import("@sinclair/typebox").TLiteral<BranchOperator.NUMBER_IS_LESS_THAN>, import("@sinclair/typebox").TLiteral<BranchOperator.NUMBER_IS_EQUAL_TO>]>>;
        }>, import("@sinclair/typebox").TObject<{
            firstValue: import("@sinclair/typebox").TString<string>;
            operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<BranchOperator.EXISTS>, import("@sinclair/typebox").TLiteral<BranchOperator.DOES_NOT_EXIST>, import("@sinclair/typebox").TLiteral<BranchOperator.BOOLEAN_IS_TRUE>, import("@sinclair/typebox").TLiteral<BranchOperator.BOOLEAN_IS_FALSE>]>>;
        }>]>>>;
        inputUiInfo: import("@sinclair/typebox").TObject<{
            currentSelectedData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
            customizedInputs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
            lastTestDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    valid: import("@sinclair/typebox").TBoolean;
    displayName: import("@sinclair/typebox").TString<string>;
}>;
export declare const Action: import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<ActionType.CODE>;
    settings: import("@sinclair/typebox").TObject<{
        sourceCode: import("@sinclair/typebox").TObject<{
            packageJson: import("@sinclair/typebox").TString<string>;
            code: import("@sinclair/typebox").TString<string>;
        }>;
        input: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TAny>;
        inputUiInfo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            currentSelectedData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
            customizedInputs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
            lastTestDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>>;
        errorHandlingOptions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            continueOnFailure: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                value: import("@sinclair/typebox").TBoolean;
            }>>;
            retryOnFailure: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                value: import("@sinclair/typebox").TBoolean;
            }>>;
        }>>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    valid: import("@sinclair/typebox").TBoolean;
    displayName: import("@sinclair/typebox").TString<string>;
}>, import("@sinclair/typebox").TObject<{
    nextAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TSelf>;
}>]>, import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<ActionType.PIECE>;
    settings: import("@sinclair/typebox").TObject<{
        packageType: import("@sinclair/typebox").TEnum<typeof PackageType>;
        pieceType: import("@sinclair/typebox").TEnum<typeof PieceType>;
        pieceName: import("@sinclair/typebox").TString<string>;
        pieceVersion: import("@sinclair/typebox").TString<string>;
        actionName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        input: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TAny>;
        inputUiInfo: import("@sinclair/typebox").TObject<{
            currentSelectedData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
            customizedInputs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
            lastTestDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>;
        errorHandlingOptions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            continueOnFailure: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                value: import("@sinclair/typebox").TBoolean;
            }>>;
            retryOnFailure: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                value: import("@sinclair/typebox").TBoolean;
            }>>;
        }>>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    valid: import("@sinclair/typebox").TBoolean;
    displayName: import("@sinclair/typebox").TString<string>;
}>, import("@sinclair/typebox").TObject<{
    nextAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TSelf>;
}>]>, import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<ActionType.LOOP_ON_ITEMS>;
    settings: import("@sinclair/typebox").TObject<{
        items: import("@sinclair/typebox").TString<string>;
        inputUiInfo: import("@sinclair/typebox").TObject<{
            currentSelectedData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
            customizedInputs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
            lastTestDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    valid: import("@sinclair/typebox").TBoolean;
    displayName: import("@sinclair/typebox").TString<string>;
}>, import("@sinclair/typebox").TObject<{
    nextAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TSelf>;
    firstLoopAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TSelf>;
}>]>, import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<ActionType.BRANCH>;
    settings: import("@sinclair/typebox").TObject<{
        conditions: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            firstValue: import("@sinclair/typebox").TString<string>;
            secondValue: import("@sinclair/typebox").TString<string>;
            caseSensitive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_CONTAINS>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_CONTAIN>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_EXACTLY_MATCHES>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_STARTS_WITH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_START_WITH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_ENDS_WITH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_END_WITH>]>>;
        }>, import("@sinclair/typebox").TObject<{
            firstValue: import("@sinclair/typebox").TString<string>;
            secondValue: import("@sinclair/typebox").TString<string>;
            operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<BranchOperator.NUMBER_IS_GREATER_THAN>, import("@sinclair/typebox").TLiteral<BranchOperator.NUMBER_IS_LESS_THAN>, import("@sinclair/typebox").TLiteral<BranchOperator.NUMBER_IS_EQUAL_TO>]>>;
        }>, import("@sinclair/typebox").TObject<{
            firstValue: import("@sinclair/typebox").TString<string>;
            operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<BranchOperator.EXISTS>, import("@sinclair/typebox").TLiteral<BranchOperator.DOES_NOT_EXIST>, import("@sinclair/typebox").TLiteral<BranchOperator.BOOLEAN_IS_TRUE>, import("@sinclair/typebox").TLiteral<BranchOperator.BOOLEAN_IS_FALSE>]>>;
        }>]>>>;
        inputUiInfo: import("@sinclair/typebox").TObject<{
            currentSelectedData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
            customizedInputs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
            lastTestDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    valid: import("@sinclair/typebox").TBoolean;
    displayName: import("@sinclair/typebox").TString<string>;
}>, import("@sinclair/typebox").TObject<{
    nextAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TSelf>;
    onSuccessAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TSelf>;
    onFailureAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TSelf>;
}>]>]>>;
export declare const SingleActionSchema: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<ActionType.CODE>;
    settings: import("@sinclair/typebox").TObject<{
        sourceCode: import("@sinclair/typebox").TObject<{
            packageJson: import("@sinclair/typebox").TString<string>;
            code: import("@sinclair/typebox").TString<string>;
        }>;
        input: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TAny>;
        inputUiInfo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            currentSelectedData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
            customizedInputs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
            lastTestDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>>;
        errorHandlingOptions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            continueOnFailure: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                value: import("@sinclair/typebox").TBoolean;
            }>>;
            retryOnFailure: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                value: import("@sinclair/typebox").TBoolean;
            }>>;
        }>>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    valid: import("@sinclair/typebox").TBoolean;
    displayName: import("@sinclair/typebox").TString<string>;
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<ActionType.PIECE>;
    settings: import("@sinclair/typebox").TObject<{
        packageType: import("@sinclair/typebox").TEnum<typeof PackageType>;
        pieceType: import("@sinclair/typebox").TEnum<typeof PieceType>;
        pieceName: import("@sinclair/typebox").TString<string>;
        pieceVersion: import("@sinclair/typebox").TString<string>;
        actionName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        input: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TAny>;
        inputUiInfo: import("@sinclair/typebox").TObject<{
            currentSelectedData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
            customizedInputs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
            lastTestDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>;
        errorHandlingOptions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            continueOnFailure: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                value: import("@sinclair/typebox").TBoolean;
            }>>;
            retryOnFailure: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                value: import("@sinclair/typebox").TBoolean;
            }>>;
        }>>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    valid: import("@sinclair/typebox").TBoolean;
    displayName: import("@sinclair/typebox").TString<string>;
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<ActionType.LOOP_ON_ITEMS>;
    settings: import("@sinclair/typebox").TObject<{
        items: import("@sinclair/typebox").TString<string>;
        inputUiInfo: import("@sinclair/typebox").TObject<{
            currentSelectedData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
            customizedInputs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
            lastTestDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    valid: import("@sinclair/typebox").TBoolean;
    displayName: import("@sinclair/typebox").TString<string>;
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<ActionType.BRANCH>;
    settings: import("@sinclair/typebox").TObject<{
        conditions: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            firstValue: import("@sinclair/typebox").TString<string>;
            secondValue: import("@sinclair/typebox").TString<string>;
            caseSensitive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_CONTAINS>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_CONTAIN>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_EXACTLY_MATCHES>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_STARTS_WITH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_START_WITH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_ENDS_WITH>, import("@sinclair/typebox").TLiteral<BranchOperator.TEXT_DOES_NOT_END_WITH>]>>;
        }>, import("@sinclair/typebox").TObject<{
            firstValue: import("@sinclair/typebox").TString<string>;
            secondValue: import("@sinclair/typebox").TString<string>;
            operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<BranchOperator.NUMBER_IS_GREATER_THAN>, import("@sinclair/typebox").TLiteral<BranchOperator.NUMBER_IS_LESS_THAN>, import("@sinclair/typebox").TLiteral<BranchOperator.NUMBER_IS_EQUAL_TO>]>>;
        }>, import("@sinclair/typebox").TObject<{
            firstValue: import("@sinclair/typebox").TString<string>;
            operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<BranchOperator.EXISTS>, import("@sinclair/typebox").TLiteral<BranchOperator.DOES_NOT_EXIST>, import("@sinclair/typebox").TLiteral<BranchOperator.BOOLEAN_IS_TRUE>, import("@sinclair/typebox").TLiteral<BranchOperator.BOOLEAN_IS_FALSE>]>>;
        }>]>>>;
        inputUiInfo: import("@sinclair/typebox").TObject<{
            currentSelectedData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
            customizedInputs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
            lastTestDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    valid: import("@sinclair/typebox").TBoolean;
    displayName: import("@sinclair/typebox").TString<string>;
}>]>;
export type Action = Static<typeof Action>;
export type BranchAction = Static<typeof BranchActionSchema> & {
    nextAction?: Action;
    onFailureAction?: Action;
    onSuccessAction?: Action;
};
export type LoopOnItemsAction = Static<typeof LoopOnItemsActionSchema> & {
    nextAction?: Action;
    firstLoopAction?: Action;
};
export type PieceAction = Static<typeof PieceActionSchema> & {
    nextAction?: Action;
};
export type CodeAction = Static<typeof CodeActionSchema> & {
    nextAction?: Action;
};
export type StepSettings = CodeActionSettings | PieceActionSettings | PieceTriggerSettings | BranchActionSettings | LoopOnItemsActionSettings;
