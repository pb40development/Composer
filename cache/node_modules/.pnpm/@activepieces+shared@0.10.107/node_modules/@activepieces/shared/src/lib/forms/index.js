"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileResponseInterface = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.FileResponseInterface = typebox_1.Type.Object({
    base64Url: typebox_1.Type.String(),
    fileName: typebox_1.Type.String(),
    extension: typebox_1.Type.Optional(typebox_1.Type.String()),
});
//# sourceMappingURL=index.js.map