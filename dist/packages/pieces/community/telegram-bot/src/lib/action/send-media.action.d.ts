export declare const telegramSendMediaAction: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").SecretTextProperty<true>, {
    instructions: import("dist/packages/pieces/community/framework/src/lib/property/input/markdown-property").MarkDownProperty;
    chat_id: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    message_thread_id: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    media_type: import("@activepieces/pieces-framework").StaticDropdownProperty<string, false>;
    media: import("@activepieces/pieces-framework").DynamicProperties<false>;
    format: import("@activepieces/pieces-framework").StaticDropdownProperty<string, false>;
    instructions_format: import("dist/packages/pieces/community/framework/src/lib/property/input/markdown-property").MarkDownProperty;
    message: import("@activepieces/pieces-framework").LongTextProperty<true>;
    reply_markup: import("@activepieces/pieces-framework").JsonProperty<false>;
}>;
