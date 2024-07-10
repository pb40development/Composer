export declare const sendTemplateMessageAction: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").CustomAuthProperty<{
    access_token: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    businessAccountId: import("@activepieces/pieces-framework").ShortTextProperty<true>;
}>, {
    phone_number_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    to: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    message_template_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    message_template_fields: import("@activepieces/pieces-framework").DynamicProperties<true>;
}>;
