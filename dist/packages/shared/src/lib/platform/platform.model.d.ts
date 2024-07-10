import { Static } from '@sinclair/typebox';
import { LocalesEnum } from '../common';
import { ApId } from '../common/id-generator';
export type PlatformId = ApId;
export declare enum FilteredPieceBehavior {
    ALLOWED = "ALLOWED",
    BLOCKED = "BLOCKED"
}
export declare const Platform: import("@sinclair/typebox").TObject<{
    ownerId: import("@sinclair/typebox").TString<string>;
    name: import("@sinclair/typebox").TString<string>;
    primaryColor: import("@sinclair/typebox").TString<string>;
    logoIconUrl: import("@sinclair/typebox").TString<string>;
    fullLogoUrl: import("@sinclair/typebox").TString<string>;
    favIconUrl: import("@sinclair/typebox").TString<string>;
    /**
    * @deprecated Use projects filter instead.
    */
    filteredPieceNames: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    /**
    * @deprecated Use projects filter instead.
    */
    filteredPieceBehavior: import("@sinclair/typebox").TEnum<typeof FilteredPieceBehavior>;
    smtpHost: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    smtpPort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    smtpUser: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    smtpPassword: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    smtpSenderEmail: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    smtpUseSSL: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    privacyPolicyUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    termsOfServiceUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    cloudAuthEnabled: import("@sinclair/typebox").TBoolean;
    gitSyncEnabled: import("@sinclair/typebox").TBoolean;
    showPoweredBy: import("@sinclair/typebox").TBoolean;
    auditLogEnabled: import("@sinclair/typebox").TBoolean;
    embeddingEnabled: import("@sinclair/typebox").TBoolean;
    managePiecesEnabled: import("@sinclair/typebox").TBoolean;
    manageTemplatesEnabled: import("@sinclair/typebox").TBoolean;
    customAppearanceEnabled: import("@sinclair/typebox").TBoolean;
    manageProjectsEnabled: import("@sinclair/typebox").TBoolean;
    projectRolesEnabled: import("@sinclair/typebox").TBoolean;
    customDomainsEnabled: import("@sinclair/typebox").TBoolean;
    apiKeysEnabled: import("@sinclair/typebox").TBoolean;
    flowIssuesEnabled: import("@sinclair/typebox").TBoolean;
    alertsEnabled: import("@sinclair/typebox").TBoolean;
    defaultLocale: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof LocalesEnum>>;
    ssoEnabled: import("@sinclair/typebox").TBoolean;
    enforceAllowedAuthDomains: import("@sinclair/typebox").TBoolean;
    allowedAuthDomains: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    federatedAuthProviders: import("@sinclair/typebox").TObject<{
        google: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            clientId: import("@sinclair/typebox").TString<string>;
            clientSecret: import("@sinclair/typebox").TString<string>;
        }>>;
        github: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            clientId: import("@sinclair/typebox").TString<string>;
            clientSecret: import("@sinclair/typebox").TString<string>;
        }>>;
        saml: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            idpMetadata: import("@sinclair/typebox").TString<string>;
            idpCertificate: import("@sinclair/typebox").TString<string>;
        }>>;
    }>;
    emailAuthEnabled: import("@sinclair/typebox").TBoolean;
    premiumPieces: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
}>;
export type Platform = Static<typeof Platform>;
export declare const PlatformWithoutSensitiveData: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    federatedAuthProviders: import("@sinclair/typebox").TObject<{
        google: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            clientId: import("@sinclair/typebox").TString<string>;
        }>>;
        github: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            clientId: import("@sinclair/typebox").TString<string>;
        }>>;
        saml: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>;
    }>;
    defaultLocale: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<string | null>>;
}>, import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString<string>;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
    ownerId: import("@sinclair/typebox").TString<string>;
    primaryColor: import("@sinclair/typebox").TString<string>;
    logoIconUrl: import("@sinclair/typebox").TString<string>;
    fullLogoUrl: import("@sinclair/typebox").TString<string>;
    favIconUrl: import("@sinclair/typebox").TString<string>;
    filteredPieceNames: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    filteredPieceBehavior: import("@sinclair/typebox").TEnum<typeof FilteredPieceBehavior>;
    smtpHost: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    smtpPort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    smtpUser: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    smtpSenderEmail: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    smtpUseSSL: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    privacyPolicyUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    termsOfServiceUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    cloudAuthEnabled: import("@sinclair/typebox").TBoolean;
    gitSyncEnabled: import("@sinclair/typebox").TBoolean;
    showPoweredBy: import("@sinclair/typebox").TBoolean;
    auditLogEnabled: import("@sinclair/typebox").TBoolean;
    embeddingEnabled: import("@sinclair/typebox").TBoolean;
    managePiecesEnabled: import("@sinclair/typebox").TBoolean;
    manageTemplatesEnabled: import("@sinclair/typebox").TBoolean;
    customAppearanceEnabled: import("@sinclair/typebox").TBoolean;
    manageProjectsEnabled: import("@sinclair/typebox").TBoolean;
    projectRolesEnabled: import("@sinclair/typebox").TBoolean;
    customDomainsEnabled: import("@sinclair/typebox").TBoolean;
    apiKeysEnabled: import("@sinclair/typebox").TBoolean;
    flowIssuesEnabled: import("@sinclair/typebox").TBoolean;
    alertsEnabled: import("@sinclair/typebox").TBoolean;
    ssoEnabled: import("@sinclair/typebox").TBoolean;
    enforceAllowedAuthDomains: import("@sinclair/typebox").TBoolean;
    allowedAuthDomains: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    emailAuthEnabled: import("@sinclair/typebox").TBoolean;
    premiumPieces: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
}>]>;
export type PlatformWithoutSensitiveData = Static<typeof PlatformWithoutSensitiveData>;
