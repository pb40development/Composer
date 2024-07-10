export declare const markdownToHTML: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").PieceAuthProperty, {
    markdown: import("@activepieces/pieces-framework").LongTextProperty<true>;
    flavor: import("@activepieces/pieces-framework").StaticDropdownProperty<string, true>;
    headerLevelStart: import("@activepieces/pieces-framework").NumberProperty<true>;
    tables: import("@activepieces/pieces-framework").CheckboxProperty<true>;
    noHeaderId: import("@activepieces/pieces-framework").CheckboxProperty<true>;
    simpleLineBreaks: import("@activepieces/pieces-framework").CheckboxProperty<true>;
    openLinksInNewWindow: import("@activepieces/pieces-framework").CheckboxProperty<true>;
}>;
