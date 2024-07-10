export declare const askGpt: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").PieceAuthProperty, {
    deploymentId: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    prompt: import("@activepieces/pieces-framework").LongTextProperty<true>;
    temperature: import("@activepieces/pieces-framework").NumberProperty<false>;
    maxTokens: import("@activepieces/pieces-framework").NumberProperty<true>;
    topP: import("@activepieces/pieces-framework").NumberProperty<false>;
    frequencyPenalty: import("@activepieces/pieces-framework").NumberProperty<false>;
    presencePenalty: import("@activepieces/pieces-framework").NumberProperty<false>;
    memoryKey: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    roles: import("@activepieces/pieces-framework").JsonProperty<false>;
}>;
