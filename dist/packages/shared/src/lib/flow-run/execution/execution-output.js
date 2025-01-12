"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecutionState = exports.ExecutionType = exports.MAX_LOG_SIZE = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.MAX_LOG_SIZE = 2048 * 1024;
var ExecutionType;
(function (ExecutionType) {
    ExecutionType["BEGIN"] = "BEGIN";
    ExecutionType["RESUME"] = "RESUME";
})(ExecutionType || (exports.ExecutionType = ExecutionType = {}));
exports.ExecutionState = typebox_1.Type.Object({
    steps: typebox_1.Type.Record(typebox_1.Type.String(), typebox_1.Type.Unknown()),
});
//# sourceMappingURL=execution-output.js.map