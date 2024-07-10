export declare const amazonSqsAuth: import("@activepieces/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    region: import("@activepieces/pieces-framework").StaticDropdownProperty<string, true>;
}>;
export declare const awsSqs: import("@activepieces/pieces-framework").Piece<import("@activepieces/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    region: import("@activepieces/pieces-framework").StaticDropdownProperty<string, true>;
}>>;
