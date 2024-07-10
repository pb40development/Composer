export declare const webflowUpdateCollectionItem: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    site_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    collection_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    collection_item_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    collection_fields: import("@activepieces/pieces-framework").DynamicProperties<true>;
    is_archived: import("@activepieces/pieces-framework").CheckboxProperty<false>;
    is_draft: import("@activepieces/pieces-framework").CheckboxProperty<false>;
}>;
