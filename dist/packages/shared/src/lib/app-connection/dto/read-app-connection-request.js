"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAppConnectionsRequestQuery = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.ListAppConnectionsRequestQuery = typebox_1.Type.Object({
    cursor: typebox_1.Type.Optional(typebox_1.Type.String({})),
    projectId: typebox_1.Type.String(),
    pieceName: typebox_1.Type.Optional(typebox_1.Type.String({})),
    name: typebox_1.Type.Optional(typebox_1.Type.String({})),
    limit: typebox_1.Type.Optional(typebox_1.Type.Number({})),
});
//# sourceMappingURL=read-app-connection-request.js.map