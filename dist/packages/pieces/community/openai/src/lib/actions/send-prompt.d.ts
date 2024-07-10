export declare const askOpenAI: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").SecretTextProperty<true>, {
    model: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    prompt: import("@activepieces/pieces-framework").LongTextProperty<true>;
    temperature: import("@activepieces/pieces-framework").NumberProperty<false>;
    maxTokens: import("@activepieces/pieces-framework").NumberProperty<true>;
    topP: import("@activepieces/pieces-framework").NumberProperty<false>;
    frequencyPenalty: import("@activepieces/pieces-framework").NumberProperty<false>;
    presencePenalty: import("@activepieces/pieces-framework").NumberProperty<false>;
    memoryKey: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    roles: import("@activepieces/pieces-framework").JsonProperty<false>;
}>;
