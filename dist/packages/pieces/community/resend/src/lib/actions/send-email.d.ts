export declare const sendEmail: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").SecretTextProperty<true>, {
    to: import("@activepieces/pieces-framework").ArrayProperty<true>;
    from_name: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    from: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    bcc: import("@activepieces/pieces-framework").ArrayProperty<false>;
    cc: import("@activepieces/pieces-framework").ArrayProperty<false>;
    reply_to: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    subject: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    content_type: import("@activepieces/pieces-framework").DropdownProperty<"text" | "html", false> | import("@activepieces/pieces-framework").DropdownProperty<"text" | "html", true>;
    content: import("@activepieces/pieces-framework").ShortTextProperty<true>;
}>;
