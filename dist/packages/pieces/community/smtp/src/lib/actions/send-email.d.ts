export declare const sendEmail: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").CustomAuthProperty<{
    host: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    email: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    password: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    port: import("@activepieces/pieces-framework").StaticDropdownProperty<number, true>;
    TLS: import("@activepieces/pieces-framework").CheckboxProperty<true>;
}>, {
    from: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    senderName: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    to: import("@activepieces/pieces-framework").ArrayProperty<true>;
    cc: import("@activepieces/pieces-framework").ArrayProperty<false>;
    replyTo: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    bcc: import("@activepieces/pieces-framework").ArrayProperty<false>;
    subject: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    body_type: import("@activepieces/pieces-framework").StaticDropdownProperty<string, true>;
    body: import("@activepieces/pieces-framework").LongTextProperty<true>;
    customHeaders: import("@activepieces/pieces-framework").ObjectProperty<false>;
    attachment: import("@activepieces/pieces-framework").FileProperty<false>;
    attachment_name: import("@activepieces/pieces-framework").ShortTextProperty<false>;
}>;
