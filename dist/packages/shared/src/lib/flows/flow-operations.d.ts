import { Static } from '@sinclair/typebox';
import { FlowStatus } from './flow';
export declare enum FlowOperationType {
    LOCK_AND_PUBLISH = "LOCK_AND_PUBLISH",
    CHANGE_STATUS = "CHANGE_STATUS",
    LOCK_FLOW = "LOCK_FLOW",
    CHANGE_FOLDER = "CHANGE_FOLDER",
    CHANGE_NAME = "CHANGE_NAME",
    MOVE_ACTION = "MOVE_ACTION",
    IMPORT_FLOW = "IMPORT_FLOW",
    UPDATE_TRIGGER = "UPDATE_TRIGGER",
    ADD_ACTION = "ADD_ACTION",
    UPDATE_ACTION = "UPDATE_ACTION",
    DELETE_ACTION = "DELETE_ACTION",
    DUPLICATE_ACTION = "DUPLICATE_ACTION",
    USE_AS_DRAFT = "USE_AS_DRAFT"
}
export declare enum StepLocationRelativeToParent {
    INSIDE_TRUE_BRANCH = "INSIDE_TRUE_BRANCH",
    INSIDE_FALSE_BRANCH = "INSIDE_FALSE_BRANCH",
    AFTER = "AFTER",
    INSIDE_LOOP = "INSIDE_LOOP"
}
export declare const UseAsDraftRequest: import("@sinclair/typebox").TObject<{
    versionId: import("@sinclair/typebox").TString<string>;
}>;
export type UseAsDraftRequest = Static<typeof UseAsDraftRequest>;
export declare const LockFlowRequest: import("@sinclair/typebox").TObject<{}>;
export type LockFlowRequest = Static<typeof LockFlowRequest>;
export declare const ImportFlowRequest: import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    trigger: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
        nextAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.CODE>;
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
            type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.PIECE>;
            settings: import("@sinclair/typebox").TObject<{
                packageType: import("@sinclair/typebox").TEnum<typeof import("../pieces").PackageType>;
                pieceType: import("@sinclair/typebox").TEnum<typeof import("../pieces").PieceType>;
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
            type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.LOOP_ON_ITEMS>;
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
            type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.BRANCH>;
            settings: import("@sinclair/typebox").TObject<{
                conditions: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                    firstValue: import("@sinclair/typebox").TString<string>;
                    secondValue: import("@sinclair/typebox").TString<string>;
                    caseSensitive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_CONTAINS>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_CONTAIN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_EXACTLY_MATCHES>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_STARTS_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_START_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_ENDS_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_END_WITH>]>>;
                }>, import("@sinclair/typebox").TObject<{
                    firstValue: import("@sinclair/typebox").TString<string>;
                    secondValue: import("@sinclair/typebox").TString<string>;
                    operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_GREATER_THAN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_LESS_THAN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_EQUAL_TO>]>>;
                }>, import("@sinclair/typebox").TObject<{
                    firstValue: import("@sinclair/typebox").TString<string>;
                    operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.EXISTS>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.DOES_NOT_EXIST>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.BOOLEAN_IS_TRUE>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.BOOLEAN_IS_FALSE>]>>;
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
        }>]>]>>>;
    }>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<import("./triggers/trigger").TriggerType.EMPTY>;
        settings: import("@sinclair/typebox").TAny;
        name: import("@sinclair/typebox").TString<string>;
        valid: import("@sinclair/typebox").TBoolean;
        displayName: import("@sinclair/typebox").TString<string>;
        nextAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>, import("@sinclair/typebox").TObject<{
        nextAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.CODE>;
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
            type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.PIECE>;
            settings: import("@sinclair/typebox").TObject<{
                packageType: import("@sinclair/typebox").TEnum<typeof import("../pieces").PackageType>;
                pieceType: import("@sinclair/typebox").TEnum<typeof import("../pieces").PieceType>;
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
            type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.LOOP_ON_ITEMS>;
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
            type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.BRANCH>;
            settings: import("@sinclair/typebox").TObject<{
                conditions: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                    firstValue: import("@sinclair/typebox").TString<string>;
                    secondValue: import("@sinclair/typebox").TString<string>;
                    caseSensitive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_CONTAINS>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_CONTAIN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_EXACTLY_MATCHES>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_STARTS_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_START_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_ENDS_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_END_WITH>]>>;
                }>, import("@sinclair/typebox").TObject<{
                    firstValue: import("@sinclair/typebox").TString<string>;
                    secondValue: import("@sinclair/typebox").TString<string>;
                    operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_GREATER_THAN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_LESS_THAN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_EQUAL_TO>]>>;
                }>, import("@sinclair/typebox").TObject<{
                    firstValue: import("@sinclair/typebox").TString<string>;
                    operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.EXISTS>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.DOES_NOT_EXIST>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.BOOLEAN_IS_TRUE>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.BOOLEAN_IS_FALSE>]>>;
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
        }>]>]>>>;
    }>]>]>;
}>;
export type ImportFlowRequest = Static<typeof ImportFlowRequest>;
export declare const ChangeFolderRequest: import("@sinclair/typebox").TObject<{
    folderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<string | null>>;
}>;
export type ChangeFolderRequest = Static<typeof ChangeFolderRequest>;
export declare const ChangeNameRequest: import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
}>;
export type ChangeNameRequest = Static<typeof ChangeNameRequest>;
export declare const DeleteActionRequest: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString<string>;
}>;
export type DeleteActionRequest = Static<typeof DeleteActionRequest>;
export declare const UpdateActionRequest: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.CODE>;
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
    type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.LOOP_ON_ITEMS>;
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
    type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.PIECE>;
    settings: import("@sinclair/typebox").TObject<{
        packageType: import("@sinclair/typebox").TEnum<typeof import("../pieces").PackageType>;
        pieceType: import("@sinclair/typebox").TEnum<typeof import("../pieces").PieceType>;
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
    type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.BRANCH>;
    settings: import("@sinclair/typebox").TObject<{
        conditions: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            firstValue: import("@sinclair/typebox").TString<string>;
            secondValue: import("@sinclair/typebox").TString<string>;
            caseSensitive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_CONTAINS>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_CONTAIN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_EXACTLY_MATCHES>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_STARTS_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_START_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_ENDS_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_END_WITH>]>>;
        }>, import("@sinclair/typebox").TObject<{
            firstValue: import("@sinclair/typebox").TString<string>;
            secondValue: import("@sinclair/typebox").TString<string>;
            operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_GREATER_THAN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_LESS_THAN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_EQUAL_TO>]>>;
        }>, import("@sinclair/typebox").TObject<{
            firstValue: import("@sinclair/typebox").TString<string>;
            operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.EXISTS>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.DOES_NOT_EXIST>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.BOOLEAN_IS_TRUE>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.BOOLEAN_IS_FALSE>]>>;
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
export type UpdateActionRequest = Static<typeof UpdateActionRequest>;
export declare const DuplicateStepRequest: import("@sinclair/typebox").TObject<{
    stepName: import("@sinclair/typebox").TString<string>;
}>;
export type DuplicateStepRequest = Static<typeof DuplicateStepRequest>;
export declare const MoveActionRequest: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString<string>;
    newParentStep: import("@sinclair/typebox").TString<string>;
    stepLocationRelativeToNewParent: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof StepLocationRelativeToParent>>;
}>;
export type MoveActionRequest = Static<typeof MoveActionRequest>;
export declare const AddActionRequest: import("@sinclair/typebox").TObject<{
    parentStep: import("@sinclair/typebox").TString<string>;
    stepLocationRelativeToParent: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof StepLocationRelativeToParent>>;
    action: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.CODE>;
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
        type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.LOOP_ON_ITEMS>;
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
        type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.PIECE>;
        settings: import("@sinclair/typebox").TObject<{
            packageType: import("@sinclair/typebox").TEnum<typeof import("../pieces").PackageType>;
            pieceType: import("@sinclair/typebox").TEnum<typeof import("../pieces").PieceType>;
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
        type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.BRANCH>;
        settings: import("@sinclair/typebox").TObject<{
            conditions: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                firstValue: import("@sinclair/typebox").TString<string>;
                secondValue: import("@sinclair/typebox").TString<string>;
                caseSensitive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_CONTAINS>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_CONTAIN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_EXACTLY_MATCHES>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_STARTS_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_START_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_ENDS_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_END_WITH>]>>;
            }>, import("@sinclair/typebox").TObject<{
                firstValue: import("@sinclair/typebox").TString<string>;
                secondValue: import("@sinclair/typebox").TString<string>;
                operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_GREATER_THAN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_LESS_THAN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_EQUAL_TO>]>>;
            }>, import("@sinclair/typebox").TObject<{
                firstValue: import("@sinclair/typebox").TString<string>;
                operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.EXISTS>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.DOES_NOT_EXIST>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.BOOLEAN_IS_TRUE>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.BOOLEAN_IS_FALSE>]>>;
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
}>;
export type AddActionRequest = Static<typeof AddActionRequest>;
export declare const UpdateTriggerRequest: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<import("./triggers/trigger").TriggerType.EMPTY>;
    settings: import("@sinclair/typebox").TAny;
    name: import("@sinclair/typebox").TString<string>;
    valid: import("@sinclair/typebox").TBoolean;
    displayName: import("@sinclair/typebox").TString<string>;
    nextAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>, import("@sinclair/typebox").TObject<{
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
}>]>;
export type UpdateTriggerRequest = Static<typeof UpdateTriggerRequest>;
export declare const UpdateFlowStatusRequest: import("@sinclair/typebox").TObject<{
    status: import("@sinclair/typebox").TEnum<typeof FlowStatus>;
}>;
export type UpdateFlowStatusRequest = Static<typeof UpdateFlowStatusRequest>;
export declare const ChangePublishedVersionIdRequest: import("@sinclair/typebox").TObject<{}>;
export type ChangePublishedVersionIdRequest = Static<typeof ChangePublishedVersionIdRequest>;
export declare const FlowOperationRequest: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<FlowOperationType.MOVE_ACTION>;
    request: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        newParentStep: import("@sinclair/typebox").TString<string>;
        stepLocationRelativeToNewParent: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof StepLocationRelativeToParent>>;
    }>;
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<FlowOperationType.CHANGE_STATUS>;
    request: import("@sinclair/typebox").TObject<{
        status: import("@sinclair/typebox").TEnum<typeof FlowStatus>;
    }>;
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<FlowOperationType.LOCK_AND_PUBLISH>;
    request: import("@sinclair/typebox").TObject<{}>;
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<FlowOperationType.USE_AS_DRAFT>;
    request: import("@sinclair/typebox").TObject<{
        versionId: import("@sinclair/typebox").TString<string>;
    }>;
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<FlowOperationType.LOCK_FLOW>;
    request: import("@sinclair/typebox").TObject<{}>;
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<FlowOperationType.IMPORT_FLOW>;
    request: import("@sinclair/typebox").TObject<{
        displayName: import("@sinclair/typebox").TString<string>;
        trigger: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
            nextAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.CODE>;
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
                type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.PIECE>;
                settings: import("@sinclair/typebox").TObject<{
                    packageType: import("@sinclair/typebox").TEnum<typeof import("../pieces").PackageType>;
                    pieceType: import("@sinclair/typebox").TEnum<typeof import("../pieces").PieceType>;
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
                type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.LOOP_ON_ITEMS>;
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
                type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.BRANCH>;
                settings: import("@sinclair/typebox").TObject<{
                    conditions: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        firstValue: import("@sinclair/typebox").TString<string>;
                        secondValue: import("@sinclair/typebox").TString<string>;
                        caseSensitive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_CONTAINS>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_CONTAIN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_EXACTLY_MATCHES>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_STARTS_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_START_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_ENDS_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_END_WITH>]>>;
                    }>, import("@sinclair/typebox").TObject<{
                        firstValue: import("@sinclair/typebox").TString<string>;
                        secondValue: import("@sinclair/typebox").TString<string>;
                        operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_GREATER_THAN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_LESS_THAN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_EQUAL_TO>]>>;
                    }>, import("@sinclair/typebox").TObject<{
                        firstValue: import("@sinclair/typebox").TString<string>;
                        operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.EXISTS>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.DOES_NOT_EXIST>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.BOOLEAN_IS_TRUE>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.BOOLEAN_IS_FALSE>]>>;
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
            }>]>]>>>;
        }>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<import("./triggers/trigger").TriggerType.EMPTY>;
            settings: import("@sinclair/typebox").TAny;
            name: import("@sinclair/typebox").TString<string>;
            valid: import("@sinclair/typebox").TBoolean;
            displayName: import("@sinclair/typebox").TString<string>;
            nextAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        }>, import("@sinclair/typebox").TObject<{
            nextAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecursive<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.CODE>;
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
                type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.PIECE>;
                settings: import("@sinclair/typebox").TObject<{
                    packageType: import("@sinclair/typebox").TEnum<typeof import("../pieces").PackageType>;
                    pieceType: import("@sinclair/typebox").TEnum<typeof import("../pieces").PieceType>;
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
                type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.LOOP_ON_ITEMS>;
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
                type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.BRANCH>;
                settings: import("@sinclair/typebox").TObject<{
                    conditions: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        firstValue: import("@sinclair/typebox").TString<string>;
                        secondValue: import("@sinclair/typebox").TString<string>;
                        caseSensitive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_CONTAINS>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_CONTAIN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_EXACTLY_MATCHES>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_STARTS_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_START_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_ENDS_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_END_WITH>]>>;
                    }>, import("@sinclair/typebox").TObject<{
                        firstValue: import("@sinclair/typebox").TString<string>;
                        secondValue: import("@sinclair/typebox").TString<string>;
                        operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_GREATER_THAN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_LESS_THAN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_EQUAL_TO>]>>;
                    }>, import("@sinclair/typebox").TObject<{
                        firstValue: import("@sinclair/typebox").TString<string>;
                        operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.EXISTS>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.DOES_NOT_EXIST>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.BOOLEAN_IS_TRUE>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.BOOLEAN_IS_FALSE>]>>;
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
            }>]>]>>>;
        }>]>]>;
    }>;
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<FlowOperationType.CHANGE_NAME>;
    request: import("@sinclair/typebox").TObject<{
        displayName: import("@sinclair/typebox").TString<string>;
    }>;
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<FlowOperationType.DELETE_ACTION>;
    request: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
    }>;
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<FlowOperationType.UPDATE_ACTION>;
    request: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.CODE>;
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
        type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.LOOP_ON_ITEMS>;
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
        type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.PIECE>;
        settings: import("@sinclair/typebox").TObject<{
            packageType: import("@sinclair/typebox").TEnum<typeof import("../pieces").PackageType>;
            pieceType: import("@sinclair/typebox").TEnum<typeof import("../pieces").PieceType>;
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
        type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.BRANCH>;
        settings: import("@sinclair/typebox").TObject<{
            conditions: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                firstValue: import("@sinclair/typebox").TString<string>;
                secondValue: import("@sinclair/typebox").TString<string>;
                caseSensitive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_CONTAINS>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_CONTAIN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_EXACTLY_MATCHES>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_STARTS_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_START_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_ENDS_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_END_WITH>]>>;
            }>, import("@sinclair/typebox").TObject<{
                firstValue: import("@sinclair/typebox").TString<string>;
                secondValue: import("@sinclair/typebox").TString<string>;
                operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_GREATER_THAN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_LESS_THAN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_EQUAL_TO>]>>;
            }>, import("@sinclair/typebox").TObject<{
                firstValue: import("@sinclair/typebox").TString<string>;
                operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.EXISTS>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.DOES_NOT_EXIST>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.BOOLEAN_IS_TRUE>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.BOOLEAN_IS_FALSE>]>>;
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
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<FlowOperationType.ADD_ACTION>;
    request: import("@sinclair/typebox").TObject<{
        parentStep: import("@sinclair/typebox").TString<string>;
        stepLocationRelativeToParent: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof StepLocationRelativeToParent>>;
        action: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.CODE>;
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
            type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.LOOP_ON_ITEMS>;
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
            type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.PIECE>;
            settings: import("@sinclair/typebox").TObject<{
                packageType: import("@sinclair/typebox").TEnum<typeof import("../pieces").PackageType>;
                pieceType: import("@sinclair/typebox").TEnum<typeof import("../pieces").PieceType>;
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
            type: import("@sinclair/typebox").TLiteral<import("./actions/action").ActionType.BRANCH>;
            settings: import("@sinclair/typebox").TObject<{
                conditions: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                    firstValue: import("@sinclair/typebox").TString<string>;
                    secondValue: import("@sinclair/typebox").TString<string>;
                    caseSensitive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_CONTAINS>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_CONTAIN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_EXACTLY_MATCHES>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_STARTS_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_START_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_ENDS_WITH>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.TEXT_DOES_NOT_END_WITH>]>>;
                }>, import("@sinclair/typebox").TObject<{
                    firstValue: import("@sinclair/typebox").TString<string>;
                    secondValue: import("@sinclair/typebox").TString<string>;
                    operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_GREATER_THAN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_LESS_THAN>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.NUMBER_IS_EQUAL_TO>]>>;
                }>, import("@sinclair/typebox").TObject<{
                    firstValue: import("@sinclair/typebox").TString<string>;
                    operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.EXISTS>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.DOES_NOT_EXIST>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.BOOLEAN_IS_TRUE>, import("@sinclair/typebox").TLiteral<import("./actions/action").BranchOperator.BOOLEAN_IS_FALSE>]>>;
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
    }>;
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<FlowOperationType.UPDATE_TRIGGER>;
    request: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<import("./triggers/trigger").TriggerType.EMPTY>;
        settings: import("@sinclair/typebox").TAny;
        name: import("@sinclair/typebox").TString<string>;
        valid: import("@sinclair/typebox").TBoolean;
        displayName: import("@sinclair/typebox").TString<string>;
        nextAction: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>, import("@sinclair/typebox").TObject<{
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
    }>]>;
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<FlowOperationType.CHANGE_FOLDER>;
    request: import("@sinclair/typebox").TObject<{
        folderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<string | null>>;
    }>;
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<FlowOperationType.DUPLICATE_ACTION>;
    request: import("@sinclair/typebox").TObject<{
        stepName: import("@sinclair/typebox").TString<string>;
    }>;
}>]>;
export type FlowOperationRequest = Static<typeof FlowOperationRequest>;
