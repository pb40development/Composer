"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleActionSchema = exports.Action = exports.BranchActionSchema = exports.BranchActionSettings = exports.BranchCondition = exports.BranchActionSettingsWithValidation = exports.textConditions = exports.singleValueConditions = exports.BranchOperator = exports.LoopOnItemsActionSchema = exports.LoopOnItemsActionSettings = exports.LoopOnItemsActionSettingsWithValidation = exports.PieceActionSchema = exports.PieceActionSettings = exports.CodeActionSchema = exports.CodeActionSettings = exports.SourceCode = exports.ActionErrorHandlingOptions = exports.ActionType = void 0;
const typebox_1 = require("@sinclair/typebox");
const pieces_1 = require("../../pieces");
const sample_data_1 = require("../sample-data");
var ActionType;
(function (ActionType) {
    ActionType["CODE"] = "CODE";
    ActionType["PIECE"] = "PIECE";
    ActionType["LOOP_ON_ITEMS"] = "LOOP_ON_ITEMS";
    ActionType["BRANCH"] = "BRANCH";
})(ActionType || (exports.ActionType = ActionType = {}));
const commonActionProps = {
    name: typebox_1.Type.String({}),
    valid: typebox_1.Type.Boolean({}),
    displayName: typebox_1.Type.String({}),
};
exports.ActionErrorHandlingOptions = typebox_1.Type.Optional(typebox_1.Type.Object({
    continueOnFailure: typebox_1.Type.Optional(typebox_1.Type.Object({
        value: typebox_1.Type.Boolean(),
    })),
    retryOnFailure: typebox_1.Type.Optional(typebox_1.Type.Object({
        value: typebox_1.Type.Boolean(),
    })),
}));
exports.SourceCode = typebox_1.Type.Object({
    packageJson: typebox_1.Type.String({}),
    code: typebox_1.Type.String({}),
});
exports.CodeActionSettings = typebox_1.Type.Object({
    sourceCode: exports.SourceCode,
    input: typebox_1.Type.Record(typebox_1.Type.String({}), typebox_1.Type.Any()),
    inputUiInfo: typebox_1.Type.Optional(sample_data_1.SampleDataSettingsObject),
    errorHandlingOptions: exports.ActionErrorHandlingOptions,
});
exports.CodeActionSchema = typebox_1.Type.Object(Object.assign(Object.assign({}, commonActionProps), { type: typebox_1.Type.Literal(ActionType.CODE), settings: exports.CodeActionSettings }));
// Piece Action
exports.PieceActionSettings = typebox_1.Type.Object({
    packageType: typebox_1.Type.Enum(pieces_1.PackageType),
    pieceType: typebox_1.Type.Enum(pieces_1.PieceType),
    pieceName: typebox_1.Type.String({}),
    pieceVersion: pieces_1.VersionType,
    actionName: typebox_1.Type.Optional(typebox_1.Type.String({})),
    input: typebox_1.Type.Record(typebox_1.Type.String({}), typebox_1.Type.Any()),
    inputUiInfo: sample_data_1.SampleDataSettingsObject,
    errorHandlingOptions: exports.ActionErrorHandlingOptions,
});
exports.PieceActionSchema = typebox_1.Type.Object(Object.assign(Object.assign({}, commonActionProps), { type: typebox_1.Type.Literal(ActionType.PIECE), settings: exports.PieceActionSettings }));
// Loop Items
exports.LoopOnItemsActionSettingsWithValidation = typebox_1.Type.Object({
    items: typebox_1.Type.String({ minLength: 1 }),
    inputUiInfo: sample_data_1.SampleDataSettingsObject,
});
exports.LoopOnItemsActionSettings = typebox_1.Type.Object({
    items: typebox_1.Type.String(),
    inputUiInfo: sample_data_1.SampleDataSettingsObject,
});
exports.LoopOnItemsActionSchema = typebox_1.Type.Object(Object.assign(Object.assign({}, commonActionProps), { type: typebox_1.Type.Literal(ActionType.LOOP_ON_ITEMS), settings: exports.LoopOnItemsActionSettings }));
var BranchOperator;
(function (BranchOperator) {
    BranchOperator["TEXT_CONTAINS"] = "TEXT_CONTAINS";
    BranchOperator["TEXT_DOES_NOT_CONTAIN"] = "TEXT_DOES_NOT_CONTAIN";
    BranchOperator["TEXT_EXACTLY_MATCHES"] = "TEXT_EXACTLY_MATCHES";
    BranchOperator["TEXT_DOES_NOT_EXACTLY_MATCH"] = "TEXT_DOES_NOT_EXACTLY_MATCH";
    BranchOperator["TEXT_STARTS_WITH"] = "TEXT_START_WITH";
    BranchOperator["TEXT_DOES_NOT_START_WITH"] = "TEXT_DOES_NOT_START_WITH";
    BranchOperator["TEXT_ENDS_WITH"] = "TEXT_ENDS_WITH";
    BranchOperator["TEXT_DOES_NOT_END_WITH"] = "TEXT_DOES_NOT_END_WITH";
    BranchOperator["NUMBER_IS_GREATER_THAN"] = "NUMBER_IS_GREATER_THAN";
    BranchOperator["NUMBER_IS_LESS_THAN"] = "NUMBER_IS_LESS_THAN";
    BranchOperator["NUMBER_IS_EQUAL_TO"] = "NUMBER_IS_EQUAL_TO";
    BranchOperator["BOOLEAN_IS_TRUE"] = "BOOLEAN_IS_TRUE";
    BranchOperator["BOOLEAN_IS_FALSE"] = "BOOLEAN_IS_FALSE";
    BranchOperator["EXISTS"] = "EXISTS";
    BranchOperator["DOES_NOT_EXIST"] = "DOES_NOT_EXIST";
})(BranchOperator || (exports.BranchOperator = BranchOperator = {}));
exports.singleValueConditions = [
    BranchOperator.EXISTS,
    BranchOperator.DOES_NOT_EXIST,
    BranchOperator.BOOLEAN_IS_TRUE,
    BranchOperator.BOOLEAN_IS_FALSE,
];
exports.textConditions = [
    BranchOperator.TEXT_CONTAINS,
    BranchOperator.TEXT_DOES_NOT_CONTAIN,
    BranchOperator.TEXT_EXACTLY_MATCHES,
    BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH,
    BranchOperator.TEXT_STARTS_WITH,
    BranchOperator.TEXT_DOES_NOT_START_WITH,
    BranchOperator.TEXT_ENDS_WITH,
    BranchOperator.TEXT_DOES_NOT_END_WITH,
];
const BranchConditionValid = (addMinLength) => typebox_1.Type.Union([
    typebox_1.Type.Object({
        firstValue: addMinLength ? typebox_1.Type.String({ minLength: 1 }) : typebox_1.Type.String(),
        secondValue: addMinLength ? typebox_1.Type.String({ minLength: 1 }) : typebox_1.Type.String(),
        caseSensitive: typebox_1.Type.Optional(typebox_1.Type.Boolean()),
        operator: typebox_1.Type.Optional(typebox_1.Type.Union([
            typebox_1.Type.Literal(BranchOperator.TEXT_CONTAINS),
            typebox_1.Type.Literal(BranchOperator.TEXT_DOES_NOT_CONTAIN),
            typebox_1.Type.Literal(BranchOperator.TEXT_EXACTLY_MATCHES),
            typebox_1.Type.Literal(BranchOperator.TEXT_DOES_NOT_EXACTLY_MATCH),
            typebox_1.Type.Literal(BranchOperator.TEXT_STARTS_WITH),
            typebox_1.Type.Literal(BranchOperator.TEXT_DOES_NOT_START_WITH),
            typebox_1.Type.Literal(BranchOperator.TEXT_ENDS_WITH),
            typebox_1.Type.Literal(BranchOperator.TEXT_DOES_NOT_END_WITH),
        ])),
    }),
    typebox_1.Type.Object({
        firstValue: addMinLength ? typebox_1.Type.String({ minLength: 1 }) : typebox_1.Type.String(),
        secondValue: addMinLength ? typebox_1.Type.String({ minLength: 1 }) : typebox_1.Type.String(),
        operator: typebox_1.Type.Optional(typebox_1.Type.Union([
            typebox_1.Type.Literal(BranchOperator.NUMBER_IS_GREATER_THAN),
            typebox_1.Type.Literal(BranchOperator.NUMBER_IS_LESS_THAN),
            typebox_1.Type.Literal(BranchOperator.NUMBER_IS_EQUAL_TO),
        ])),
    }),
    typebox_1.Type.Object({
        firstValue: addMinLength ? typebox_1.Type.String({ minLength: 1 }) : typebox_1.Type.String(),
        operator: typebox_1.Type.Optional(typebox_1.Type.Union([
            typebox_1.Type.Literal(BranchOperator.EXISTS),
            typebox_1.Type.Literal(BranchOperator.DOES_NOT_EXIST),
            typebox_1.Type.Literal(BranchOperator.BOOLEAN_IS_TRUE),
            typebox_1.Type.Literal(BranchOperator.BOOLEAN_IS_FALSE),
        ])),
    }),
]);
exports.BranchActionSettingsWithValidation = typebox_1.Type.Object({
    conditions: typebox_1.Type.Array(typebox_1.Type.Array(BranchConditionValid(true))),
    inputUiInfo: sample_data_1.SampleDataSettingsObject,
});
exports.BranchCondition = BranchConditionValid(false);
exports.BranchActionSettings = typebox_1.Type.Object({
    conditions: typebox_1.Type.Array(typebox_1.Type.Array(BranchConditionValid(false))),
    inputUiInfo: sample_data_1.SampleDataSettingsObject,
});
exports.BranchActionSchema = typebox_1.Type.Object(Object.assign(Object.assign({}, commonActionProps), { type: typebox_1.Type.Literal(ActionType.BRANCH), settings: exports.BranchActionSettings }));
// Union of all actions
exports.Action = typebox_1.Type.Recursive(action => typebox_1.Type.Union([
    typebox_1.Type.Intersect([exports.CodeActionSchema, typebox_1.Type.Object({
            nextAction: typebox_1.Type.Optional(action),
        })]),
    typebox_1.Type.Intersect([exports.PieceActionSchema, typebox_1.Type.Object({
            nextAction: typebox_1.Type.Optional(action),
        })]),
    typebox_1.Type.Intersect([exports.LoopOnItemsActionSchema, typebox_1.Type.Object({
            nextAction: typebox_1.Type.Optional(action),
            firstLoopAction: typebox_1.Type.Optional(action),
        })]),
    typebox_1.Type.Intersect([exports.BranchActionSchema, typebox_1.Type.Object({
            nextAction: typebox_1.Type.Optional(action),
            onSuccessAction: typebox_1.Type.Optional(action),
            onFailureAction: typebox_1.Type.Optional(action),
        })]),
]));
exports.SingleActionSchema = typebox_1.Type.Union([
    exports.CodeActionSchema,
    exports.PieceActionSchema,
    exports.LoopOnItemsActionSchema,
    exports.BranchActionSchema,
]);
//# sourceMappingURL=action.js.map