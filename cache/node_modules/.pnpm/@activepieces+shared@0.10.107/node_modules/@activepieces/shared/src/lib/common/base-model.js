"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nullable = exports.BaseModelSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.BaseModelSchema = {
    id: typebox_1.Type.String(),
    created: typebox_1.Type.String(),
    updated: typebox_1.Type.String(),
};
// Used to generate valid nullable in OpenAPI Schema
const Nullable = (schema) => typebox_1.Type.Optional(typebox_1.Type.Unsafe(Object.assign(Object.assign({}, schema), { nullable: true })));
exports.Nullable = Nullable;
//# sourceMappingURL=base-model.js.map