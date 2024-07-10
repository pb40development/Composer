export declare const findRowsAction: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    spreadsheet_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    include_team_drives: import("@activepieces/pieces-framework").CheckboxProperty<false>;
    sheet_id: import("@activepieces/pieces-framework").DropdownProperty<number, true>;
    columnName: import("@activepieces/pieces-framework").DropdownProperty<string, true> | import("@activepieces/pieces-framework").DropdownProperty<string, false>;
    searchValue: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    matchCase: import("@activepieces/pieces-framework").CheckboxProperty<true>;
    startingRow: import("@activepieces/pieces-framework").NumberProperty<false>;
    numberOfRows: import("@activepieces/pieces-framework").NumberProperty<false>;
}>;
