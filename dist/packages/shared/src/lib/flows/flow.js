"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopulatedFlow = exports.Flow = exports.FlowScheduleOptions = exports.FlowStatus = exports.ScheduleType = void 0;
const typebox_1 = require("@sinclair/typebox");
const base_model_1 = require("../common/base-model");
const flow_version_1 = require("./flow-version");
var ScheduleType;
(function (ScheduleType) {
    ScheduleType["CRON_EXPRESSION"] = "CRON_EXPRESSION";
})(ScheduleType || (exports.ScheduleType = ScheduleType = {}));
var FlowStatus;
(function (FlowStatus) {
    FlowStatus["ENABLED"] = "ENABLED";
    FlowStatus["DISABLED"] = "DISABLED";
})(FlowStatus || (exports.FlowStatus = FlowStatus = {}));
exports.FlowScheduleOptions = typebox_1.Type.Object({
    type: typebox_1.Type.Literal(ScheduleType.CRON_EXPRESSION),
    cronExpression: typebox_1.Type.String(),
    timezone: typebox_1.Type.String(),
});
exports.Flow = typebox_1.Type.Object(Object.assign(Object.assign({}, base_model_1.BaseModelSchema), { projectId: typebox_1.Type.String(), folderId: (0, base_model_1.Nullable)(typebox_1.Type.String()), status: typebox_1.Type.Enum(FlowStatus), schedule: (0, base_model_1.Nullable)(exports.FlowScheduleOptions), publishedVersionId: (0, base_model_1.Nullable)(typebox_1.Type.String()) }));
exports.PopulatedFlow = typebox_1.Type.Composite([
    exports.Flow,
    typebox_1.Type.Object({
        version: flow_version_1.FlowVersion,
    }),
]);
//# sourceMappingURL=flow.js.map