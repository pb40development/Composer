import { OAuth2PropertyValue, PieceAuthProperty } from "@activepieces/pieces-framework";
import { HttpHeaders, HttpMethod } from "../http";
export declare const getAccessTokenOrThrow: (auth: OAuth2PropertyValue | undefined) => string;
export declare function createCustomApiCallAction({ auth, baseUrl, authMapping, description, displayName, name }: {
    auth?: PieceAuthProperty;
    baseUrl: (auth?: unknown) => string;
    authMapping?: (auth: unknown) => Promise<HttpHeaders>;
    description?: string | null;
    displayName?: string | null;
    name?: string | null;
}): import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").BasicAuthProperty | import("@activepieces/pieces-framework").CustomAuthProperty<any> | import("@activepieces/pieces-framework").OAuth2Property<any> | import("@activepieces/pieces-framework").SecretTextProperty<boolean>, {
    url: import("@activepieces/pieces-framework").DynamicProperties<true>;
    method: import("@activepieces/pieces-framework").StaticDropdownProperty<HttpMethod, true>;
    headers: import("@activepieces/pieces-framework").ObjectProperty<true>;
    queryParams: import("@activepieces/pieces-framework").ObjectProperty<true>;
    body: import("@activepieces/pieces-framework").JsonProperty<false>;
    failsafe: import("@activepieces/pieces-framework").CheckboxProperty<false>;
    timeout: import("@activepieces/pieces-framework").NumberProperty<false>;
}>;
