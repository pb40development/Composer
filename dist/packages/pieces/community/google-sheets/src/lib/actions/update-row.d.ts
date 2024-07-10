export declare const updateRowAction: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    spreadsheet_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    include_team_drives: import("@activepieces/pieces-framework").CheckboxProperty<false>;
    sheet_id: import("@activepieces/pieces-framework").DropdownProperty<number, true>;
    row_id: import("@activepieces/pieces-framework").NumberProperty<true>;
    first_row_headers: import("@activepieces/pieces-framework").CheckboxProperty<true>;
    values: import("@activepieces/pieces-framework").DynamicProperties<true>;
}>;
