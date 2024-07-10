import { Static } from '@sinclair/typebox';
import { AppConnectionType } from '../app-connection';
import { OAuth2AuthorizationMethod } from '../oauth2-authorization-method';
export declare enum OAuth2GrantType {
    AUTHORIZATION_CODE = "authorization_code",
    CLIENT_CREDENTIALS = "client_credentials"
}
export declare const UpsertCustomAuthRequest: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<AppConnectionType.CUSTOM_AUTH>;
    value: import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<AppConnectionType.CUSTOM_AUTH>;
        props: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    pieceName: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TString<string>;
}>;
export declare const UpsertPlatformOAuth2Request: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<AppConnectionType.PLATFORM_OAUTH2>;
    value: import("@sinclair/typebox").TObject<{
        client_id: import("@sinclair/typebox").TString<string>;
        authorization_method: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof OAuth2AuthorizationMethod>>;
        code: import("@sinclair/typebox").TString<string>;
        code_challenge: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        props: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TString<string>>>;
        scope: import("@sinclair/typebox").TString<string>;
        type: import("@sinclair/typebox").TLiteral<AppConnectionType.PLATFORM_OAUTH2>;
        redirect_url: import("@sinclair/typebox").TString<string>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    pieceName: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TString<string>;
}>;
export declare const UpsertCloudOAuth2Request: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<AppConnectionType.CLOUD_OAUTH2>;
    value: import("@sinclair/typebox").TObject<{
        client_id: import("@sinclair/typebox").TString<string>;
        authorization_method: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof OAuth2AuthorizationMethod>>;
        code: import("@sinclair/typebox").TString<string>;
        code_challenge: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        props: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TString<string>>>;
        scope: import("@sinclair/typebox").TString<string>;
        type: import("@sinclair/typebox").TLiteral<AppConnectionType.CLOUD_OAUTH2>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    pieceName: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TString<string>;
}>;
export declare const UpsertSecretTextRequest: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<AppConnectionType.SECRET_TEXT>;
    value: import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<AppConnectionType.SECRET_TEXT>;
        secret_text: import("@sinclair/typebox").TString<string>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    pieceName: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TString<string>;
}>;
export declare const UpsertOAuth2Request: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<AppConnectionType.OAUTH2>;
    value: import("@sinclair/typebox").TObject<{
        client_id: import("@sinclair/typebox").TString<string>;
        client_secret: import("@sinclair/typebox").TString<string>;
        grant_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof OAuth2GrantType>>;
        props: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TAny>>;
        scope: import("@sinclair/typebox").TString<string>;
        code: import("@sinclair/typebox").TString<string>;
        authorization_method: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof OAuth2AuthorizationMethod>>;
        code_challenge: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        redirect_url: import("@sinclair/typebox").TString<string>;
        type: import("@sinclair/typebox").TLiteral<AppConnectionType.OAUTH2>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    pieceName: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TString<string>;
}>;
export declare const UpsertBasicAuthRequest: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<AppConnectionType.BASIC_AUTH>;
    value: import("@sinclair/typebox").TObject<{
        username: import("@sinclair/typebox").TString<string>;
        password: import("@sinclair/typebox").TString<string>;
        type: import("@sinclair/typebox").TLiteral<AppConnectionType.BASIC_AUTH>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    pieceName: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TString<string>;
}>;
export declare const UpsertAppConnectionRequestBody: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<AppConnectionType.SECRET_TEXT>;
    value: import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<AppConnectionType.SECRET_TEXT>;
        secret_text: import("@sinclair/typebox").TString<string>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    pieceName: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TString<string>;
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<AppConnectionType.OAUTH2>;
    value: import("@sinclair/typebox").TObject<{
        client_id: import("@sinclair/typebox").TString<string>;
        client_secret: import("@sinclair/typebox").TString<string>;
        grant_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof OAuth2GrantType>>;
        props: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TAny>>;
        scope: import("@sinclair/typebox").TString<string>;
        code: import("@sinclair/typebox").TString<string>;
        authorization_method: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof OAuth2AuthorizationMethod>>;
        code_challenge: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        redirect_url: import("@sinclair/typebox").TString<string>;
        type: import("@sinclair/typebox").TLiteral<AppConnectionType.OAUTH2>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    pieceName: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TString<string>;
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<AppConnectionType.CLOUD_OAUTH2>;
    value: import("@sinclair/typebox").TObject<{
        client_id: import("@sinclair/typebox").TString<string>;
        authorization_method: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof OAuth2AuthorizationMethod>>;
        code: import("@sinclair/typebox").TString<string>;
        code_challenge: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        props: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TString<string>>>;
        scope: import("@sinclair/typebox").TString<string>;
        type: import("@sinclair/typebox").TLiteral<AppConnectionType.CLOUD_OAUTH2>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    pieceName: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TString<string>;
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<AppConnectionType.PLATFORM_OAUTH2>;
    value: import("@sinclair/typebox").TObject<{
        client_id: import("@sinclair/typebox").TString<string>;
        authorization_method: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof OAuth2AuthorizationMethod>>;
        code: import("@sinclair/typebox").TString<string>;
        code_challenge: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        props: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TString<string>>>;
        scope: import("@sinclair/typebox").TString<string>;
        type: import("@sinclair/typebox").TLiteral<AppConnectionType.PLATFORM_OAUTH2>;
        redirect_url: import("@sinclair/typebox").TString<string>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    pieceName: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TString<string>;
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<AppConnectionType.BASIC_AUTH>;
    value: import("@sinclair/typebox").TObject<{
        username: import("@sinclair/typebox").TString<string>;
        password: import("@sinclair/typebox").TString<string>;
        type: import("@sinclair/typebox").TLiteral<AppConnectionType.BASIC_AUTH>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    pieceName: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TString<string>;
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<AppConnectionType.CUSTOM_AUTH>;
    value: import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<AppConnectionType.CUSTOM_AUTH>;
        props: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>;
    }>;
    name: import("@sinclair/typebox").TString<string>;
    pieceName: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TString<string>;
}>]>;
export type UpsertCloudOAuth2Request = Static<typeof UpsertCloudOAuth2Request>;
export type UpsertPlatformOAuth2Request = Static<typeof UpsertPlatformOAuth2Request>;
export type UpsertOAuth2Request = Static<typeof UpsertOAuth2Request>;
export type UpsertSecretTextRequest = Static<typeof UpsertSecretTextRequest>;
export type UpsertBasicAuthRequest = Static<typeof UpsertBasicAuthRequest>;
export type UpsertCustomAuthRequest = Static<typeof UpsertCustomAuthRequest>;
export type UpsertAppConnectionRequestBody = Static<typeof UpsertAppConnectionRequestBody>;
