"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFlowTemplatesRequest = exports.FlowTemplateWithoutProjectInformation = exports.FlowTemplate = exports.TemplateType = exports.FlowVersionTemplate = void 0;
const typebox_1 = require("@sinclair/typebox");
const common_1 = require("../../common");
const flow_version_1 = require("../flow-version");
exports.FlowVersionTemplate = typebox_1.Type.Omit(flow_version_1.FlowVersion, ['id', 'created', 'updated', 'flowId', 'state', 'updatedBy']);
var TemplateType;
(function (TemplateType) {
    TemplateType["PLATFORM"] = "PLATFORM";
    TemplateType["PROJECT"] = "PROJECT";
})(TemplateType || (exports.TemplateType = TemplateType = {}));
exports.FlowTemplate = typebox_1.Type.Object(Object.assign(Object.assign({}, common_1.BaseModelSchema), { name: typebox_1.Type.String(), description: typebox_1.Type.String(), type: typebox_1.Type.Enum(TemplateType), tags: typebox_1.Type.Array(typebox_1.Type.String()), pieces: typebox_1.Type.Array(typebox_1.Type.String()), blogUrl: typebox_1.Type.Optional(typebox_1.Type.String()), template: exports.FlowVersionTemplate, projectId: typebox_1.Type.String(), platformId: typebox_1.Type.String() }));
exports.FlowTemplateWithoutProjectInformation = typebox_1.Type.Omit(exports.FlowTemplate, ['projectId', 'platformId', 'id', 'type']);
exports.ListFlowTemplatesRequest = typebox_1.Type.Object({
    pieces: typebox_1.Type.Optional(typebox_1.Type.Array(typebox_1.Type.String())),
    tags: typebox_1.Type.Optional(typebox_1.Type.Array(typebox_1.Type.String())),
    search: typebox_1.Type.Optional(typebox_1.Type.String()),
});
//# sourceMappingURL=flow-template-request.js.map