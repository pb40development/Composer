export declare const telegramSendMessageAction: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").SecretTextProperty<true>, {
    instructions: import("dist/packages/pieces/community/framework/src/lib/property/input/markdown-property").MarkDownProperty;
    chat_id: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    message_thread_id: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    format: import("@activepieces/pieces-framework").StaticDropdownProperty<string, false>;
    instructions_format: import("dist/packages/pieces/community/framework/src/lib/property/input/markdown-property").MarkDownProperty;
    web_page_preview: import("@activepieces/pieces-framework").CheckboxProperty<false>;
    message: import("@activepieces/pieces-framework").LongTextProperty<true>;
    reply_markup: import("@activepieces/pieces-framework").JsonProperty<false>;
}>;
