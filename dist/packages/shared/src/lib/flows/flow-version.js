"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowVersionMetadata = exports.FlowVersion = exports.FlowVersionState = void 0;
const typebox_1 = require("@sinclair/typebox");
const base_model_1 = require("../common/base-model");
const user_1 = require("../user");
const trigger_1 = require("./triggers/trigger");
var FlowVersionState;
(function (FlowVersionState) {
    FlowVersionState["LOCKED"] = "LOCKED";
    FlowVersionState["DRAFT"] = "DRAFT";
})(FlowVersionState || (exports.FlowVersionState = FlowVersionState = {}));
exports.FlowVersion = typebox_1.Type.Object(Object.assign(Object.assign({}, base_model_1.BaseModelSchema), { flowId: typebox_1.Type.String(), displayName: typebox_1.Type.String(), trigger: trigger_1.Trigger, updatedBy: (0, base_model_1.Nullable)(typebox_1.Type.String()), valid: typebox_1.Type.Boolean(), state: typebox_1.Type.Enum(FlowVersionState) }));
exports.FlowVersionMetadata = typebox_1.Type.Object(Object.assign(Object.assign({}, base_model_1.BaseModelSchema), { flowId: typebox_1.Type.String(), displayName: typebox_1.Type.String(), valid: typebox_1.Type.Boolean(), state: typebox_1.Type.Enum(FlowVersionState), updatedBy: (0, base_model_1.Nullable)(typebox_1.Type.String()), updatedByUser: (0, base_model_1.Nullable)(user_1.User) }));
//# sourceMappingURL=flow-version.js.map