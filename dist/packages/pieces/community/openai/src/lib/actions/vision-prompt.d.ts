export declare const visionPrompt: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").SecretTextProperty<true>, {
    image: import("@activepieces/pieces-framework").FileProperty<true>;
    prompt: import("@activepieces/pieces-framework").LongTextProperty<true>;
    detail: import("@activepieces/pieces-framework").DropdownProperty<string, false>;
    temperature: import("@activepieces/pieces-framework").NumberProperty<false>;
    maxTokens: import("@activepieces/pieces-framework").NumberProperty<false>;
    topP: import("@activepieces/pieces-framework").NumberProperty<false>;
    frequencyPenalty: import("@activepieces/pieces-framework").NumberProperty<false>;
    presencePenalty: import("@activepieces/pieces-framework").NumberProperty<false>;
    roles: import("@activepieces/pieces-framework").JsonProperty<false>;
}>;
