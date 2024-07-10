export declare const textToSpeech: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").SecretTextProperty<true>, {
    text: import("@activepieces/pieces-framework").LongTextProperty<true>;
    model: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    speed: import("@activepieces/pieces-framework").NumberProperty<false>;
    voice: import("@activepieces/pieces-framework").DropdownProperty<string, false>;
    format: import("@activepieces/pieces-framework").DropdownProperty<string, false>;
}>;
