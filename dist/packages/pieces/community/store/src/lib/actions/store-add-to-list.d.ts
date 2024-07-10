export declare const storageAddtoList: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").PieceAuthProperty, {
    key: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    value: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    ignore_if_exists: import("@activepieces/pieces-framework").CheckboxProperty<false>;
    store_scope: import("@activepieces/pieces-framework").StaticDropdownProperty<import("./common").PieceStoreScope, true>;
}>;
