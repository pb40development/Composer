"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformWithoutSensitiveData = exports.Platform = exports.FilteredPieceBehavior = void 0;
const typebox_1 = require("@sinclair/typebox");
const common_1 = require("../common");
const base_model_1 = require("../common/base-model");
const id_generator_1 = require("../common/id-generator");
const federated_authn_1 = require("../federated-authn");
var FilteredPieceBehavior;
(function (FilteredPieceBehavior) {
    FilteredPieceBehavior["ALLOWED"] = "ALLOWED";
    FilteredPieceBehavior["BLOCKED"] = "BLOCKED";
})(FilteredPieceBehavior || (exports.FilteredPieceBehavior = FilteredPieceBehavior = {}));
exports.Platform = typebox_1.Type.Object(Object.assign(Object.assign({}, base_model_1.BaseModelSchema), { ownerId: id_generator_1.ApId, name: typebox_1.Type.String(), primaryColor: typebox_1.Type.String(), logoIconUrl: typebox_1.Type.String(), fullLogoUrl: typebox_1.Type.String(), favIconUrl: typebox_1.Type.String(), 
    /**
    * @deprecated Use projects filter instead.
    */
    filteredPieceNames: typebox_1.Type.Array(typebox_1.Type.String()), 
    /**
    * @deprecated Use projects filter instead.
    */
    filteredPieceBehavior: typebox_1.Type.Enum(FilteredPieceBehavior), smtpHost: typebox_1.Type.Optional(typebox_1.Type.String()), smtpPort: typebox_1.Type.Optional(typebox_1.Type.Number()), smtpUser: typebox_1.Type.Optional(typebox_1.Type.String()), smtpPassword: typebox_1.Type.Optional(typebox_1.Type.String()), smtpSenderEmail: typebox_1.Type.Optional(typebox_1.Type.String()), smtpUseSSL: typebox_1.Type.Optional(typebox_1.Type.Boolean()), privacyPolicyUrl: typebox_1.Type.Optional(typebox_1.Type.String()), termsOfServiceUrl: typebox_1.Type.Optional(typebox_1.Type.String()), cloudAuthEnabled: typebox_1.Type.Boolean(), gitSyncEnabled: typebox_1.Type.Boolean(), showPoweredBy: typebox_1.Type.Boolean(), auditLogEnabled: typebox_1.Type.Boolean(), embeddingEnabled: typebox_1.Type.Boolean(), managePiecesEnabled: typebox_1.Type.Boolean(), manageTemplatesEnabled: typebox_1.Type.Boolean(), customAppearanceEnabled: typebox_1.Type.Boolean(), manageProjectsEnabled: typebox_1.Type.Boolean(), projectRolesEnabled: typebox_1.Type.Boolean(), customDomainsEnabled: typebox_1.Type.Boolean(), apiKeysEnabled: typebox_1.Type.Boolean(), flowIssuesEnabled: typebox_1.Type.Boolean(), alertsEnabled: typebox_1.Type.Boolean(), defaultLocale: typebox_1.Type.Optional(typebox_1.Type.Enum(common_1.LocalesEnum)), ssoEnabled: typebox_1.Type.Boolean(), enforceAllowedAuthDomains: typebox_1.Type.Boolean(), allowedAuthDomains: typebox_1.Type.Array(typebox_1.Type.String()), federatedAuthProviders: federated_authn_1.FederatedAuthnProviderConfig, emailAuthEnabled: typebox_1.Type.Boolean(), premiumPieces: typebox_1.Type.Array(typebox_1.Type.String()) }));
exports.PlatformWithoutSensitiveData = typebox_1.Type.Composite([typebox_1.Type.Object({
        federatedAuthProviders: federated_authn_1.FederatedAuthnProviderConfigWithoutSensitiveData,
        defaultLocale: (0, base_model_1.Nullable)(typebox_1.Type.String()),
    }), typebox_1.Type.Omit(exports.Platform, ['smtpPassword', 'federatedAuthProviders', 'defaultLocale'])]);
//# sourceMappingURL=platform.model.js.map