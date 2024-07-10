export declare const telegramCreateInviteLinkAction: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").SecretTextProperty<true>, {
    instructions: import("dist/packages/pieces/community/framework/src/lib/property/input/markdown-property").MarkDownProperty;
    chat_id: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    name: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    expire_date: import("@activepieces/pieces-framework").DateTimeProperty<false>;
    member_limit: import("@activepieces/pieces-framework").NumberProperty<false>;
}>;
