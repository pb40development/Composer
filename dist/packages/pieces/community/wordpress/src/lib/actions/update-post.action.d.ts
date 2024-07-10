export declare const updateWordPressPost: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").CustomAuthProperty<{
    username: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    password: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    website_url: import("@activepieces/pieces-framework").ShortTextProperty<true>;
}>, {
    post: import("@activepieces/pieces-framework").DropdownProperty<number, true>;
    title: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    content: import("@activepieces/pieces-framework").LongTextProperty<false>;
    slug: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    date: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    featured_media_file: import("@activepieces/pieces-framework").FileProperty<false>;
    tags: import("@activepieces/pieces-framework").MultiSelectDropdownProperty<string, false>;
    acfFields: import("@activepieces/pieces-framework").ObjectProperty<false>;
    categories: import("@activepieces/pieces-framework").MultiSelectDropdownProperty<string, false>;
    featured_media: import("@activepieces/pieces-framework").DropdownProperty<string, false>;
    status: import("@activepieces/pieces-framework").StaticDropdownProperty<string, false>;
    excerpt: import("@activepieces/pieces-framework").LongTextProperty<false>;
    comment_status: import("@activepieces/pieces-framework").CheckboxProperty<false>;
    ping_status: import("@activepieces/pieces-framework").CheckboxProperty<false>;
}>;
