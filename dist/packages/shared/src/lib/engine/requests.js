"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFlowVersionForWorkerRequest = exports.GetFlowVersionForWorkerRequestType = exports.RemoveStableJobEngineRequest = exports.UpdateRunProgressRequest = void 0;
const typebox_1 = require("@sinclair/typebox");
const common_1 = require("../common");
const flow_execution_1 = require("../flow-run/execution/flow-execution");
const engine_operation_1 = require("./engine-operation");
exports.UpdateRunProgressRequest = typebox_1.Type.Object({
    runDetails: flow_execution_1.FlowRunResponse,
    runId: typebox_1.Type.String(),
    progressUpdateType: typebox_1.Type.Enum(engine_operation_1.ProgressUpdateType),
    workerHandlerId: (0, common_1.Nullable)(typebox_1.Type.String()),
    httpRequestId: (0, common_1.Nullable)(typebox_1.Type.String()),
});
exports.RemoveStableJobEngineRequest = typebox_1.Type.Object({
    flowId: typebox_1.Type.Optional(typebox_1.Type.String()),
    flowVersionId: typebox_1.Type.String(),
});
var GetFlowVersionForWorkerRequestType;
(function (GetFlowVersionForWorkerRequestType) {
    GetFlowVersionForWorkerRequestType["LATEST"] = "LATEST";
    GetFlowVersionForWorkerRequestType["LOCKED"] = "LOCKED";
    GetFlowVersionForWorkerRequestType["EXACT"] = "EXACT";
})(GetFlowVersionForWorkerRequestType || (exports.GetFlowVersionForWorkerRequestType = GetFlowVersionForWorkerRequestType = {}));
exports.GetFlowVersionForWorkerRequest = typebox_1.Type.Union([
    typebox_1.Type.Object({
        type: typebox_1.Type.Literal(GetFlowVersionForWorkerRequestType.LATEST),
        flowId: typebox_1.Type.String(),
    }),
    typebox_1.Type.Object({
        type: typebox_1.Type.Literal(GetFlowVersionForWorkerRequestType.LOCKED),
        flowId: typebox_1.Type.String(),
    }),
    typebox_1.Type.Object({
        type: typebox_1.Type.Literal(GetFlowVersionForWorkerRequestType.EXACT),
        versionId: typebox_1.Type.String(),
    }),
]);
//# sourceMappingURL=requests.js.map