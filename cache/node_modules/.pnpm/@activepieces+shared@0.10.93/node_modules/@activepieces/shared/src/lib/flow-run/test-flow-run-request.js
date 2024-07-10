"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetryFlowRequestBody = exports.TestFlowRunRequestBody = void 0;
const typebox_1 = require("@sinclair/typebox");
const id_generator_1 = require("../common/id-generator");
const flow_run_1 = require("./flow-run");
exports.TestFlowRunRequestBody = typebox_1.Type.Object({
    flowVersionId: id_generator_1.ApId,
});
exports.RetryFlowRequestBody = typebox_1.Type.Object({
    strategy: typebox_1.Type.Enum(flow_run_1.FlowRetryStrategy),
});
//# sourceMappingURL=test-flow-run-request.js.map