import { Static } from '@sinclair/typebox';
import { BaseModel } from '../common/base-model';
import { OAuth2GrantType } from './dto/upsert-app-connection-request';
import { OAuth2AuthorizationMethod } from './oauth2-authorization-method';
export type AppConnectionId = string;
export declare enum AppConnectionStatus {
    ACTIVE = "ACTIVE",
    ERROR = "ERROR"
}
export declare enum AppConnectionType {
    OAUTH2 = "OAUTH2",
    PLATFORM_OAUTH2 = "PLATFORM_OAUTH2",
    CLOUD_OAUTH2 = "CLOUD_OAUTH2",
    SECRET_TEXT = "SECRET_TEXT",
    BASIC_AUTH = "BASIC_AUTH",
    CUSTOM_AUTH = "CUSTOM_AUTH"
}
export type SecretTextConnectionValue = {
    type: AppConnectionType.SECRET_TEXT;
    secret_text: string;
};
export type BasicAuthConnectionValue = {
    username: string;
    password: string;
    type: AppConnectionType.BASIC_AUTH;
};
export type BaseOAuth2ConnectionValue = {
    expires_in?: number;
    client_id: string;
    token_type: string;
    access_token: string;
    claimed_at: number;
    refresh_token: string;
    scope: string;
    token_url: string;
    authorization_method?: OAuth2AuthorizationMethod;
    data: Record<string, unknown>;
    props?: Record<string, unknown>;
    grant_type?: OAuth2GrantType;
};
export type CustomAuthConnectionValue = {
    type: AppConnectionType.CUSTOM_AUTH;
    props: Record<string, unknown>;
};
export type CloudOAuth2ConnectionValue = {
    type: AppConnectionType.CLOUD_OAUTH2;
} & BaseOAuth2ConnectionValue;
export type PlatformOAuth2ConnectionValue = {
    type: AppConnectionType.PLATFORM_OAUTH2;
    redirect_url: string;
} & BaseOAuth2ConnectionValue;
export type OAuth2ConnectionValueWithApp = {
    type: AppConnectionType.OAUTH2;
    client_secret: string;
    redirect_url: string;
} & BaseOAuth2ConnectionValue;
export type AppConnectionValue<T extends AppConnectionType = AppConnectionType> = T extends AppConnectionType.SECRET_TEXT ? SecretTextConnectionValue : T extends AppConnectionType.BASIC_AUTH ? BasicAuthConnectionValue : T extends AppConnectionType.CLOUD_OAUTH2 ? CloudOAuth2ConnectionValue : T extends AppConnectionType.PLATFORM_OAUTH2 ? PlatformOAuth2ConnectionValue : T extends AppConnectionType.OAUTH2 ? OAuth2ConnectionValueWithApp : T extends AppConnectionType.CUSTOM_AUTH ? CustomAuthConnectionValue : never;
export type AppConnection<Type extends AppConnectionType = AppConnectionType> = BaseModel<AppConnectionId> & {
    name: string;
    type: Type;
    pieceName: string;
    projectId: string;
    status: AppConnectionStatus;
    value: AppConnectionValue<Type>;
};
export type OAuth2AppConnection = AppConnection<AppConnectionType.OAUTH2>;
export type SecretKeyAppConnection = AppConnection<AppConnectionType.SECRET_TEXT>;
export type CloudAuth2Connection = AppConnection<AppConnectionType.CLOUD_OAUTH2>;
export type PlatformOAuth2Connection = AppConnection<AppConnectionType.PLATFORM_OAUTH2>;
export type BasicAuthConnection = AppConnection<AppConnectionType.BASIC_AUTH>;
export type CustomAuthConnection = AppConnection<AppConnectionType.CUSTOM_AUTH>;
export declare const AppConnectionWithoutSensitiveData: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString<string>;
    type: import("@sinclair/typebox").TEnum<typeof AppConnectionType>;
    pieceName: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TString<string>;
    status: import("@sinclair/typebox").TEnum<typeof AppConnectionStatus>;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
}>;
export declare const connectionNameRegex = "[A-Za-z0-9_\\-@\\+\\.]*";
export type AppConnectionWithoutSensitiveData = Static<typeof AppConnectionWithoutSensitiveData> & {
    __brand: 'AppConnectionWithoutSensitiveData';
};
export declare const ValidateConnectionNameResponse: import("@sinclair/typebox").TObject<{
    isValid: import("@sinclair/typebox").TBoolean;
    error: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type ValidateConnectionNameResponse = Static<typeof ValidateConnectionNameResponse>;
export declare const ValidateConnectionNameRequestBody: import("@sinclair/typebox").TObject<{
    connectionName: import("@sinclair/typebox").TString<string>;
}>;
export type ValidateConnectionNameRequestBody = Static<typeof ValidateConnectionNameRequestBody>;
