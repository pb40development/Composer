export declare const launchWorkflow: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").CustomAuthProperty<{
    apiKey: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    projectId: import("@activepieces/pieces-framework").ShortTextProperty<true>;
}>, {
    workflow: import("@activepieces/pieces-framework").DropdownProperty<unknown, true>;
    jobName: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    inputs: import("@activepieces/pieces-framework").JsonProperty<false>;
    steps: import("@activepieces/pieces-framework").JsonProperty<false>;
    delay: import("@activepieces/pieces-framework").NumberProperty<false>;
}>;
