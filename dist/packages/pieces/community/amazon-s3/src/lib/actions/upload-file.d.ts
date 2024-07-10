export declare const amazons3UploadFile: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    bucket: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    endpoint: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    region: import("@activepieces/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    file: import("@activepieces/pieces-framework").FileProperty<true>;
    fileName: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    acl: import("@activepieces/pieces-framework").StaticDropdownProperty<string, false>;
    type: import("@activepieces/pieces-framework").StaticDropdownProperty<string, true>;
}>;
