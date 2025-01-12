"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertAppConnectionRequestBody = exports.UpsertBasicAuthRequest = exports.UpsertOAuth2Request = exports.UpsertSecretTextRequest = exports.UpsertCloudOAuth2Request = exports.UpsertPlatformOAuth2Request = exports.UpsertCustomAuthRequest = exports.OAuth2GrantType = void 0;
const typebox_1 = require("@sinclair/typebox");
const app_connection_1 = require("../app-connection");
const oauth2_authorization_method_1 = require("../oauth2-authorization-method");
const commonAuthProps = {
    name: typebox_1.Type.String({}),
    pieceName: typebox_1.Type.String({}),
    projectId: typebox_1.Type.String({}),
};
var OAuth2GrantType;
(function (OAuth2GrantType) {
    OAuth2GrantType["AUTHORIZATION_CODE"] = "authorization_code";
    OAuth2GrantType["CLIENT_CREDENTIALS"] = "client_credentials";
})(OAuth2GrantType || (exports.OAuth2GrantType = OAuth2GrantType = {}));
exports.UpsertCustomAuthRequest = typebox_1.Type.Object(Object.assign(Object.assign({}, commonAuthProps), { type: typebox_1.Type.Literal(app_connection_1.AppConnectionType.CUSTOM_AUTH), value: typebox_1.Type.Object({
        type: typebox_1.Type.Literal(app_connection_1.AppConnectionType.CUSTOM_AUTH),
        props: typebox_1.Type.Record(typebox_1.Type.String(), typebox_1.Type.Unknown()),
    }) }), {
    title: 'Custom Auth',
    description: 'Custom Auth',
});
exports.UpsertPlatformOAuth2Request = typebox_1.Type.Object(Object.assign(Object.assign({}, commonAuthProps), { type: typebox_1.Type.Literal(app_connection_1.AppConnectionType.PLATFORM_OAUTH2), value: typebox_1.Type.Object({
        client_id: typebox_1.Type.String(),
        authorization_method: typebox_1.Type.Optional(typebox_1.Type.Enum(oauth2_authorization_method_1.OAuth2AuthorizationMethod)),
        code: typebox_1.Type.String(),
        code_challenge: typebox_1.Type.Optional(typebox_1.Type.String()),
        props: typebox_1.Type.Optional(typebox_1.Type.Record(typebox_1.Type.String(), typebox_1.Type.String())),
        scope: typebox_1.Type.String(),
        type: typebox_1.Type.Literal(app_connection_1.AppConnectionType.PLATFORM_OAUTH2),
        redirect_url: typebox_1.Type.String({}),
    }) }), {
    title: 'Platform OAuth2',
    description: 'Platform OAuth2',
});
exports.UpsertCloudOAuth2Request = typebox_1.Type.Object(Object.assign(Object.assign({}, commonAuthProps), { type: typebox_1.Type.Literal(app_connection_1.AppConnectionType.CLOUD_OAUTH2), value: typebox_1.Type.Object({
        client_id: typebox_1.Type.String(),
        authorization_method: typebox_1.Type.Optional(typebox_1.Type.Enum(oauth2_authorization_method_1.OAuth2AuthorizationMethod)),
        code: typebox_1.Type.String(),
        code_challenge: typebox_1.Type.Optional(typebox_1.Type.String()),
        props: typebox_1.Type.Optional(typebox_1.Type.Record(typebox_1.Type.String(), typebox_1.Type.String())),
        scope: typebox_1.Type.String(),
        type: typebox_1.Type.Literal(app_connection_1.AppConnectionType.CLOUD_OAUTH2),
    }) }), {
    title: 'Cloud OAuth2',
    description: 'Cloud OAuth2',
});
exports.UpsertSecretTextRequest = typebox_1.Type.Object(Object.assign(Object.assign({}, commonAuthProps), { type: typebox_1.Type.Literal(app_connection_1.AppConnectionType.SECRET_TEXT), value: typebox_1.Type.Object({
        type: typebox_1.Type.Literal(app_connection_1.AppConnectionType.SECRET_TEXT),
        secret_text: typebox_1.Type.String({}),
    }) }), {
    title: 'Secret Text',
    description: 'Secret Text',
});
exports.UpsertOAuth2Request = typebox_1.Type.Object(Object.assign(Object.assign({}, commonAuthProps), { type: typebox_1.Type.Literal(app_connection_1.AppConnectionType.OAUTH2), value: typebox_1.Type.Object({
        client_id: typebox_1.Type.String({}),
        client_secret: typebox_1.Type.String({}),
        grant_type: typebox_1.Type.Optional(typebox_1.Type.Enum(OAuth2GrantType)),
        props: typebox_1.Type.Optional(typebox_1.Type.Record(typebox_1.Type.String(), typebox_1.Type.Any())),
        scope: typebox_1.Type.String(),
        code: typebox_1.Type.String(),
        authorization_method: typebox_1.Type.Optional(typebox_1.Type.Enum(oauth2_authorization_method_1.OAuth2AuthorizationMethod)),
        code_challenge: typebox_1.Type.Optional(typebox_1.Type.String()),
        redirect_url: typebox_1.Type.String({}),
        type: typebox_1.Type.Literal(app_connection_1.AppConnectionType.OAUTH2),
    }) }), {
    title: 'OAuth2',
    description: 'OAuth2',
});
exports.UpsertBasicAuthRequest = typebox_1.Type.Object(Object.assign(Object.assign({}, commonAuthProps), { type: typebox_1.Type.Literal(app_connection_1.AppConnectionType.BASIC_AUTH), value: typebox_1.Type.Object({
        username: typebox_1.Type.String({}),
        password: typebox_1.Type.String({}),
        type: typebox_1.Type.Literal(app_connection_1.AppConnectionType.BASIC_AUTH),
    }) }), {
    title: 'Basic Auth',
    description: 'Basic Auth',
});
exports.UpsertAppConnectionRequestBody = typebox_1.Type.Union([
    exports.UpsertSecretTextRequest,
    exports.UpsertOAuth2Request,
    exports.UpsertCloudOAuth2Request,
    exports.UpsertPlatformOAuth2Request,
    exports.UpsertBasicAuthRequest,
    exports.UpsertCustomAuthRequest,
]);
//# sourceMappingURL=upsert-app-connection-request.js.map