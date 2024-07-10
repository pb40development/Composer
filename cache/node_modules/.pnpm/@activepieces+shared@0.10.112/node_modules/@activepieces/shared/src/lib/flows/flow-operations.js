"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowOperationRequest = exports.ChangePublishedVersionIdRequest = exports.UpdateFlowStatusRequest = exports.UpdateTriggerRequest = exports.AddActionRequest = exports.MoveActionRequest = exports.DuplicateStepRequest = exports.UpdateActionRequest = exports.DeleteActionRequest = exports.ChangeNameRequest = exports.ChangeFolderRequest = exports.ImportFlowRequest = exports.LockFlowRequest = exports.UseAsDraftRequest = exports.StepLocationRelativeToParent = exports.FlowOperationType = void 0;
const typebox_1 = require("@sinclair/typebox");
const common_1 = require("../common");
const action_1 = require("./actions/action");
const flow_1 = require("./flow");
const trigger_1 = require("./triggers/trigger");
var FlowOperationType;
(function (FlowOperationType) {
    FlowOperationType["LOCK_AND_PUBLISH"] = "LOCK_AND_PUBLISH";
    FlowOperationType["CHANGE_STATUS"] = "CHANGE_STATUS";
    FlowOperationType["LOCK_FLOW"] = "LOCK_FLOW";
    FlowOperationType["CHANGE_FOLDER"] = "CHANGE_FOLDER";
    FlowOperationType["CHANGE_NAME"] = "CHANGE_NAME";
    FlowOperationType["MOVE_ACTION"] = "MOVE_ACTION";
    FlowOperationType["IMPORT_FLOW"] = "IMPORT_FLOW";
    FlowOperationType["UPDATE_TRIGGER"] = "UPDATE_TRIGGER";
    FlowOperationType["ADD_ACTION"] = "ADD_ACTION";
    FlowOperationType["UPDATE_ACTION"] = "UPDATE_ACTION";
    FlowOperationType["DELETE_ACTION"] = "DELETE_ACTION";
    FlowOperationType["DUPLICATE_ACTION"] = "DUPLICATE_ACTION";
    FlowOperationType["USE_AS_DRAFT"] = "USE_AS_DRAFT";
})(FlowOperationType || (exports.FlowOperationType = FlowOperationType = {}));
var StepLocationRelativeToParent;
(function (StepLocationRelativeToParent) {
    StepLocationRelativeToParent["INSIDE_TRUE_BRANCH"] = "INSIDE_TRUE_BRANCH";
    StepLocationRelativeToParent["INSIDE_FALSE_BRANCH"] = "INSIDE_FALSE_BRANCH";
    StepLocationRelativeToParent["AFTER"] = "AFTER";
    StepLocationRelativeToParent["INSIDE_LOOP"] = "INSIDE_LOOP";
})(StepLocationRelativeToParent || (exports.StepLocationRelativeToParent = StepLocationRelativeToParent = {}));
const optionalNextAction = typebox_1.Type.Object({ nextAction: typebox_1.Type.Optional(action_1.Action) });
exports.UseAsDraftRequest = typebox_1.Type.Object({
    versionId: typebox_1.Type.String(),
});
exports.LockFlowRequest = typebox_1.Type.Object({});
exports.ImportFlowRequest = typebox_1.Type.Object({
    displayName: typebox_1.Type.String({}),
    trigger: typebox_1.Type.Union([typebox_1.Type.Composite([trigger_1.PieceTrigger, optionalNextAction]), typebox_1.Type.Composite([trigger_1.EmptyTrigger, optionalNextAction])]),
});
exports.ChangeFolderRequest = typebox_1.Type.Object({
    folderId: (0, common_1.Nullable)(typebox_1.Type.String({})),
});
exports.ChangeNameRequest = typebox_1.Type.Object({
    displayName: typebox_1.Type.String({}),
});
exports.DeleteActionRequest = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
});
exports.UpdateActionRequest = typebox_1.Type.Union([action_1.CodeActionSchema, action_1.LoopOnItemsActionSchema, action_1.PieceActionSchema, action_1.BranchActionSchema]);
exports.DuplicateStepRequest = typebox_1.Type.Object({
    stepName: typebox_1.Type.String(),
});
exports.MoveActionRequest = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    newParentStep: typebox_1.Type.String(),
    stepLocationRelativeToNewParent: typebox_1.Type.Optional(typebox_1.Type.Enum(StepLocationRelativeToParent)),
});
exports.AddActionRequest = typebox_1.Type.Object({
    parentStep: typebox_1.Type.String(),
    stepLocationRelativeToParent: typebox_1.Type.Optional(typebox_1.Type.Enum(StepLocationRelativeToParent)),
    action: exports.UpdateActionRequest,
});
exports.UpdateTriggerRequest = typebox_1.Type.Union([trigger_1.EmptyTrigger, trigger_1.PieceTrigger]);
exports.UpdateFlowStatusRequest = typebox_1.Type.Object({
    status: typebox_1.Type.Enum(flow_1.FlowStatus),
});
exports.ChangePublishedVersionIdRequest = typebox_1.Type.Object({});
exports.FlowOperationRequest = typebox_1.Type.Union([
    typebox_1.Type.Object({
        type: typebox_1.Type.Literal(FlowOperationType.MOVE_ACTION),
        request: exports.MoveActionRequest,
    }, {
        title: 'Move Action',
    }),
    typebox_1.Type.Object({
        type: typebox_1.Type.Literal(FlowOperationType.CHANGE_STATUS),
        request: exports.UpdateFlowStatusRequest,
    }, {
        title: 'Change Status',
    }),
    typebox_1.Type.Object({
        type: typebox_1.Type.Literal(FlowOperationType.LOCK_AND_PUBLISH),
        request: exports.ChangePublishedVersionIdRequest,
    }, {
        title: 'Lock and Publish',
    }),
    typebox_1.Type.Object({
        type: typebox_1.Type.Literal(FlowOperationType.USE_AS_DRAFT),
        request: exports.UseAsDraftRequest,
    }, {
        title: 'Copy as Draft',
    }),
    typebox_1.Type.Object({
        type: typebox_1.Type.Literal(FlowOperationType.LOCK_FLOW),
        request: exports.LockFlowRequest,
    }, {
        title: 'Lock Flow',
    }),
    typebox_1.Type.Object({
        type: typebox_1.Type.Literal(FlowOperationType.IMPORT_FLOW),
        request: exports.ImportFlowRequest,
    }, {
        title: 'Import Flow',
    }),
    typebox_1.Type.Object({
        type: typebox_1.Type.Literal(FlowOperationType.CHANGE_NAME),
        request: exports.ChangeNameRequest,
    }, {
        title: 'Change Name',
    }),
    typebox_1.Type.Object({
        type: typebox_1.Type.Literal(FlowOperationType.DELETE_ACTION),
        request: exports.DeleteActionRequest,
    }, {
        title: 'Delete Action',
    }),
    typebox_1.Type.Object({
        type: typebox_1.Type.Literal(FlowOperationType.UPDATE_ACTION),
        request: exports.UpdateActionRequest,
    }, {
        title: 'Update Action',
    }),
    typebox_1.Type.Object({
        type: typebox_1.Type.Literal(FlowOperationType.ADD_ACTION),
        request: exports.AddActionRequest,
    }, {
        title: 'Add Action',
    }),
    typebox_1.Type.Object({
        type: typebox_1.Type.Literal(FlowOperationType.UPDATE_TRIGGER),
        request: exports.UpdateTriggerRequest,
    }, {
        title: 'Update Trigger',
    }),
    typebox_1.Type.Object({
        type: typebox_1.Type.Literal(FlowOperationType.CHANGE_FOLDER),
        request: exports.ChangeFolderRequest,
    }, {
        title: 'Change Folder',
    }),
    typebox_1.Type.Object({
        type: typebox_1.Type.Literal(FlowOperationType.DUPLICATE_ACTION),
        request: exports.DuplicateStepRequest,
    }, {
        title: 'Duplicate Action',
    }),
]);
//# sourceMappingURL=flow-operations.js.map