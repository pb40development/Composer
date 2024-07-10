export declare const getJobResults: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").CustomAuthProperty<{
    apiKey: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    projectId: import("@activepieces/pieces-framework").ShortTextProperty<true>;
}>, {
    workflow: import("@activepieces/pieces-framework").DropdownProperty<unknown, true>;
    job: import("@activepieces/pieces-framework").DropdownProperty<any, true>;
}>;
