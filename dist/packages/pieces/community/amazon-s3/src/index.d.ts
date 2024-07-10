export declare const amazonS3Auth: import("@activepieces/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    bucket: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    endpoint: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    region: import("@activepieces/pieces-framework").StaticDropdownProperty<string, true>;
}>;
export declare const amazonS3: import("@activepieces/pieces-framework").Piece<import("@activepieces/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    bucket: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    endpoint: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    region: import("@activepieces/pieces-framework").StaticDropdownProperty<string, true>;
}>>;
