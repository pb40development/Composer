import { Static } from '@sinclair/typebox';
import { LocalesEnum } from '../common';
import { FilteredPieceBehavior } from './platform.model';
export declare const UpdatePlatformRequestBody: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    primaryColor: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    logoIconUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    fullLogoUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    favIconUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    filteredPieceNames: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    filteredPieceBehavior: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof FilteredPieceBehavior>>;
    smtpHost: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    smtpPort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    smtpUser: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    smtpPassword: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    smtpSenderEmail: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    smtpUseSSL: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    federatedAuthProviders: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
    }>>;
    cloudAuthEnabled: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    emailAuthEnabled: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    allowedAuthDomains: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    enforceAllowedAuthDomains: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    defaultLocale: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof LocalesEnum>>;
}>;
export type UpdatePlatformRequestBody = Static<typeof UpdatePlatformRequestBody>;
export declare const AdminAddPlatformRequestBody: import("@sinclair/typebox").TObject<{
    userId: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TString<string>;
    name: import("@sinclair/typebox").TString<string>;
    primaryColor: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    logoIconUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    fullLogoUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    favIconUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type AdminAddPlatformRequestBody = Static<typeof AdminAddPlatformRequestBody>;
