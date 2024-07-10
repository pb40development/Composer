"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepExecutionPath = exports.StepRunResponse = exports.CreateStepRunRequestBody = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.CreateStepRunRequestBody = typebox_1.Type.Object({
    flowVersionId: typebox_1.Type.String(),
    stepName: typebox_1.Type.String(),
    id: typebox_1.Type.String(),
});
exports.StepRunResponse = typebox_1.Type.Object({
    id: typebox_1.Type.String(),
    success: typebox_1.Type.Boolean(),
    output: typebox_1.Type.Unknown(),
    standardError: typebox_1.Type.String(),
    standardOutput: typebox_1.Type.String(),
});
exports.StepExecutionPath = typebox_1.Type.Array(typebox_1.Type.Tuple([typebox_1.Type.String(), typebox_1.Type.Number()]));
//# sourceMappingURL=test-step-request.js.map