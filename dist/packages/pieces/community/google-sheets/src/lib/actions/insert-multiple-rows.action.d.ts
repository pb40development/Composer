export declare const insertMultipleRowsAction: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    spreadsheet_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    include_team_drives: import("@activepieces/pieces-framework").CheckboxProperty<false>;
    sheet_id: import("@activepieces/pieces-framework").DropdownProperty<number, true>;
    as_string: import("@activepieces/pieces-framework").CheckboxProperty<false>;
    values: import("@activepieces/pieces-framework").DynamicProperties<true>;
}>;