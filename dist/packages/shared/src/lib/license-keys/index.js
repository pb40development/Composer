"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenseKeyEntity = exports.CreateTrialLicenseKeyRequestBody = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.CreateTrialLicenseKeyRequestBody = typebox_1.Type.Object({
    email: typebox_1.Type.String(),
    fullName: typebox_1.Type.String(),
    companyName: typebox_1.Type.String(),
    goal: typebox_1.Type.String(),
    numberOfEmployees: typebox_1.Type.String(),
});
exports.LicenseKeyEntity = typebox_1.Type.Object({
    id: typebox_1.Type.String(),
    email: typebox_1.Type.String(),
    expiresAt: typebox_1.Type.String(),
    activatedAt: typebox_1.Type.String(),
    createdAt: typebox_1.Type.String(),
    isTrial: typebox_1.Type.Boolean(),
    key: typebox_1.Type.String(),
    ssoEnabled: typebox_1.Type.Boolean(),
    gitSyncEnabled: typebox_1.Type.Boolean(),
    showPoweredBy: typebox_1.Type.Boolean(),
    embeddingEnabled: typebox_1.Type.Boolean(),
    auditLogEnabled: typebox_1.Type.Boolean(),
    customAppearanceEnabled: typebox_1.Type.Boolean(),
    manageProjectsEnabled: typebox_1.Type.Boolean(),
    managePiecesEnabled: typebox_1.Type.Boolean(),
    manageTemplatesEnabled: typebox_1.Type.Boolean(),
    apiKeysEnabled: typebox_1.Type.Boolean(),
    customDomainsEnabled: typebox_1.Type.Boolean(),
    projectRolesEnabled: typebox_1.Type.Boolean(),
    flowIssuesEnabled: typebox_1.Type.Boolean(),
    alertsEnabled: typebox_1.Type.Boolean(),
    premiumPieces: typebox_1.Type.Array(typebox_1.Type.String()),
});
//# sourceMappingURL=index.js.map