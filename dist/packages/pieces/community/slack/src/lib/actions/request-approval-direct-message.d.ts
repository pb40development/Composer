export declare const requestApprovalDirectMessageAction: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    userId: import("@activepieces/pieces-framework").DropdownProperty<string, false> | import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    text: import("@activepieces/pieces-framework").LongTextProperty<true>;
    username: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    profilePicture: import("@activepieces/pieces-framework").ShortTextProperty<false>;
}>;