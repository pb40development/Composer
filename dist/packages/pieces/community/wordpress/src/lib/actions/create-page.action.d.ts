export declare const createWordPressPage: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").CustomAuthProperty<{
    username: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    password: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    website_url: import("@activepieces/pieces-framework").ShortTextProperty<true>;
}>, {
    title: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    content: import("@activepieces/pieces-framework").LongTextProperty<true>;
    slug: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    date: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    status: import("@activepieces/pieces-framework").StaticDropdownProperty<string, false>;
    excerpt: import("@activepieces/pieces-framework").LongTextProperty<false>;
    comment_status: import("@activepieces/pieces-framework").CheckboxProperty<false>;
    ping_status: import("@activepieces/pieces-framework").CheckboxProperty<false>;
}>;
