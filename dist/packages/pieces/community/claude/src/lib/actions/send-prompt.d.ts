export declare const askClaude: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").SecretTextProperty<true>, {
    model: import("@activepieces/pieces-framework").StaticDropdownProperty<string, true>;
    systemPrompt: import("@activepieces/pieces-framework").LongTextProperty<false>;
    temperature: import("@activepieces/pieces-framework").NumberProperty<false>;
    maxTokens: import("@activepieces/pieces-framework").NumberProperty<false>;
    prompt: import("@activepieces/pieces-framework").LongTextProperty<true>;
    image: import("@activepieces/pieces-framework").FileProperty<false>;
    roles: import("@activepieces/pieces-framework").JsonProperty<false>;
}>;
