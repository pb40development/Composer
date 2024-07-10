export declare const getChannelHistory: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    info: import("dist/packages/pieces/community/framework/src/lib/property/input/markdown-property").MarkDownProperty;
    channel: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    oldest: import("@activepieces/pieces-framework").NumberProperty<false>;
    latest: import("@activepieces/pieces-framework").NumberProperty<false>;
    inclusive: import("@activepieces/pieces-framework").CheckboxProperty<true>;
    includeAllMetadata: import("@activepieces/pieces-framework").CheckboxProperty<true>;
}>;
