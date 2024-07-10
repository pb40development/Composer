"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateCodeResponse = exports.GenerateCodeRequest = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.GenerateCodeRequest = typebox_1.Type.Object({
    prompt: typebox_1.Type.String(),
});
exports.GenerateCodeResponse = typebox_1.Type.Object({
    result: typebox_1.Type.String(),
});
//# sourceMappingURL=index.js.map