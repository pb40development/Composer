export declare const readFile: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    bucket: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    endpoint: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    region: import("@activepieces/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    key: import("@activepieces/pieces-framework").ShortTextProperty<true>;
}>;
