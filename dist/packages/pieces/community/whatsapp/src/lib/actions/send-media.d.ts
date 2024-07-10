export declare const sendMedia: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").CustomAuthProperty<{
    access_token: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    businessAccountId: import("@activepieces/pieces-framework").ShortTextProperty<true>;
}>, {
    phone_number_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    to: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    type: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    media: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    caption: import("@activepieces/pieces-framework").LongTextProperty<false>;
    filename: import("@activepieces/pieces-framework").LongTextProperty<false>;
}>;
