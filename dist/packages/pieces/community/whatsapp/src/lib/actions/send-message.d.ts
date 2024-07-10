export declare const sendMessage: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").CustomAuthProperty<{
    access_token: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    businessAccountId: import("@activepieces/pieces-framework").ShortTextProperty<true>;
}>, {
    phone_number_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    to: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    text: import("@activepieces/pieces-framework").LongTextProperty<true>;
}>;
