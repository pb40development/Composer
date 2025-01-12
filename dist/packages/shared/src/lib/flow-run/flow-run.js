"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowRun = exports.FlowRetryStrategy = exports.RunEnvironment = void 0;
const typebox_1 = require("@sinclair/typebox");
const base_model_1 = require("../common/base-model");
const flow_execution_1 = require("./execution/flow-execution");
var RunEnvironment;
(function (RunEnvironment) {
    RunEnvironment["PRODUCTION"] = "PRODUCTION";
    RunEnvironment["TESTING"] = "TESTING";
})(RunEnvironment || (exports.RunEnvironment = RunEnvironment = {}));
var FlowRetryStrategy;
(function (FlowRetryStrategy) {
    FlowRetryStrategy["ON_LATEST_VERSION"] = "ON_LATEST_VERSION";
    FlowRetryStrategy["FROM_FAILED_STEP"] = "FROM_FAILED_STEP";
})(FlowRetryStrategy || (exports.FlowRetryStrategy = FlowRetryStrategy = {}));
exports.FlowRun = typebox_1.Type.Object(Object.assign(Object.assign({}, base_model_1.BaseModelSchema), { projectId: typebox_1.Type.String(), flowId: typebox_1.Type.String(), tags: typebox_1.Type.Optional(typebox_1.Type.Array(typebox_1.Type.String())), flowVersionId: typebox_1.Type.String(), flowDisplayName: typebox_1.Type.String(), 
    // TODO remove this, and create migration to remove it
    terminationReason: typebox_1.Type.Optional(typebox_1.Type.String()), logsFileId: (0, base_model_1.Nullable)(typebox_1.Type.String()), tasks: typebox_1.Type.Optional(typebox_1.Type.Number()), status: typebox_1.Type.Enum(flow_execution_1.FlowRunStatus), duration: typebox_1.Type.Optional(typebox_1.Type.Number()), startTime: typebox_1.Type.String(), finishTime: typebox_1.Type.String(), environment: typebox_1.Type.Enum(RunEnvironment), pauseMetadata: typebox_1.Type.Optional(flow_execution_1.PauseMetadata), steps: typebox_1.Type.Record(typebox_1.Type.String(), typebox_1.Type.Unknown()) }));
//# sourceMappingURL=flow-run.js.map