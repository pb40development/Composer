"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFlowVersionRequest = exports.GetFlowQueryParamsRequest = exports.ListFlowsRequest = void 0;
const typebox_1 = require("@sinclair/typebox");
const flow_1 = require("../flow");
exports.ListFlowsRequest = typebox_1.Type.Object({
    folderId: typebox_1.Type.Optional(typebox_1.Type.String()),
    limit: typebox_1.Type.Optional(typebox_1.Type.Number({})),
    cursor: typebox_1.Type.Optional(typebox_1.Type.String({})),
    status: typebox_1.Type.Optional(typebox_1.Type.Enum(flow_1.FlowStatus)),
    projectId: typebox_1.Type.String({}),
});
exports.GetFlowQueryParamsRequest = typebox_1.Type.Object({
    versionId: typebox_1.Type.Optional(typebox_1.Type.String({})),
});
exports.ListFlowVersionRequest = typebox_1.Type.Object({
    limit: typebox_1.Type.Optional(typebox_1.Type.Number({})),
    cursor: typebox_1.Type.Optional(typebox_1.Type.String({})),
});
//# sourceMappingURL=list-flows-request.js.map