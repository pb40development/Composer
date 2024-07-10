"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
const typebox_1 = require("@sinclair/typebox");
const base_model_1 = require("../common/base-model");
const file_compression_1 = require("./file-compression");
const file_type_1 = require("./file-type");
exports.File = typebox_1.Type.Object(Object.assign(Object.assign({}, base_model_1.BaseModelSchema), { projectId: typebox_1.Type.Optional(typebox_1.Type.String()), platformId: typebox_1.Type.Optional(typebox_1.Type.String()), type: typebox_1.Type.Enum(file_type_1.FileType), compression: typebox_1.Type.Enum(file_compression_1.FileCompression), data: typebox_1.Type.Unknown() }));
//# sourceMappingURL=file.js.map