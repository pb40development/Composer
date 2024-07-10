export declare const dropboxSearch: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    query: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    path: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    max_results: import("@activepieces/pieces-framework").NumberProperty<false>;
    order_by: import("@activepieces/pieces-framework").StaticDropdownProperty<string, false>;
    file_status: import("@activepieces/pieces-framework").StaticDropdownProperty<string, false>;
    filename_only: import("@activepieces/pieces-framework").CheckboxProperty<false>;
    file_extensions: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    file_categories: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    account_id: import("@activepieces/pieces-framework").ShortTextProperty<false>;
}>;
