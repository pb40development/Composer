"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateConnectionNameRequestBody = exports.ValidateConnectionNameResponse = exports.connectionNameRegex = exports.AppConnectionWithoutSensitiveData = exports.AppConnectionType = exports.AppConnectionStatus = void 0;
const typebox_1 = require("@sinclair/typebox");
const base_model_1 = require("../common/base-model");
const id_generator_1 = require("../common/id-generator");
var AppConnectionStatus;
(function (AppConnectionStatus) {
    AppConnectionStatus["ACTIVE"] = "ACTIVE";
    AppConnectionStatus["ERROR"] = "ERROR";
})(AppConnectionStatus || (exports.AppConnectionStatus = AppConnectionStatus = {}));
var AppConnectionType;
(function (AppConnectionType) {
    AppConnectionType["OAUTH2"] = "OAUTH2";
    AppConnectionType["PLATFORM_OAUTH2"] = "PLATFORM_OAUTH2";
    AppConnectionType["CLOUD_OAUTH2"] = "CLOUD_OAUTH2";
    AppConnectionType["SECRET_TEXT"] = "SECRET_TEXT";
    AppConnectionType["BASIC_AUTH"] = "BASIC_AUTH";
    AppConnectionType["CUSTOM_AUTH"] = "CUSTOM_AUTH";
})(AppConnectionType || (exports.AppConnectionType = AppConnectionType = {}));
exports.AppConnectionWithoutSensitiveData = typebox_1.Type.Object(Object.assign(Object.assign({}, base_model_1.BaseModelSchema), { name: typebox_1.Type.String(), type: typebox_1.Type.Enum(AppConnectionType), pieceName: typebox_1.Type.String(), projectId: id_generator_1.ApId, status: typebox_1.Type.Enum(AppConnectionStatus) }), {
    description: 'App connection is a connection to an external app.',
});
exports.connectionNameRegex = '[A-Za-z0-9_\\-@\\+\\.]*';
exports.ValidateConnectionNameResponse = typebox_1.Type.Object({
    isValid: typebox_1.Type.Boolean(),
    error: typebox_1.Type.Optional(typebox_1.Type.String()),
}, {
    description: 'Response for validating connection name',
});
exports.ValidateConnectionNameRequestBody = typebox_1.Type.Object({
    connectionName: typebox_1.Type.String(),
}, {
    description: 'Request for validating connection name',
});
//# sourceMappingURL=app-connection.js.map