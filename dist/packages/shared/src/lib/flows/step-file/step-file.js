"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepFileWithUrl = exports.StepFileGet = exports.StepFileUpsert = exports.StepFile = void 0;
const typebox_1 = require("@sinclair/typebox");
const common_1 = require("../../common");
exports.StepFile = typebox_1.Type.Object(Object.assign(Object.assign({}, common_1.BaseModelSchema), { name: typebox_1.Type.String(), flowId: typebox_1.Type.String(), projectId: typebox_1.Type.String(), stepName: typebox_1.Type.String(), size: typebox_1.Type.Number(), data: typebox_1.Type.Unknown() }));
exports.StepFileUpsert = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    flowId: typebox_1.Type.String(),
    stepName: typebox_1.Type.String(),
    file: typebox_1.Type.Unknown(),
});
exports.StepFileGet = typebox_1.Type.Object({
    id: typebox_1.Type.String(),
    projectId: typebox_1.Type.String(),
});
exports.StepFileWithUrl = typebox_1.Type.Composite([exports.StepFile, typebox_1.Type.Object({
        url: typebox_1.Type.String(),
    })]);
//# sourceMappingURL=step-file.js.map