export declare const sendMessage: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    region: import("@activepieces/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    queueUrl: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    messageBody: import("@activepieces/pieces-framework").ShortTextProperty<true>;
}>;
