export declare const githubCreateCommentOnAIssue: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    repository: import("@activepieces/pieces-framework").DropdownProperty<{
        repo: string;
        owner: string;
    }, false> | import("@activepieces/pieces-framework").DropdownProperty<{
        repo: string;
        owner: string;
    }, true>;
    issue_number: import("@activepieces/pieces-framework").NumberProperty<true>;
    comment: import("@activepieces/pieces-framework").LongTextProperty<true>;
}>;
