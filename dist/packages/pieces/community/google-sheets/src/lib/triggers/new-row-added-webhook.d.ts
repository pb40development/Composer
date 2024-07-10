import { TriggerStrategy } from '@activepieces/pieces-framework';
export declare const newRowAddedTrigger: import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    info: import("dist/packages/pieces/community/framework/src/lib/property/input/markdown-property").MarkDownProperty;
    spreadsheet_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    sheet_id: import("@activepieces/pieces-framework").DropdownProperty<number, true>;
    include_team_drives: import("@activepieces/pieces-framework").CheckboxProperty<false>;
}> | import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    info: import("dist/packages/pieces/community/framework/src/lib/property/input/markdown-property").MarkDownProperty;
    spreadsheet_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    sheet_id: import("@activepieces/pieces-framework").DropdownProperty<number, true>;
    include_team_drives: import("@activepieces/pieces-framework").CheckboxProperty<false>;
}> | import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    info: import("dist/packages/pieces/community/framework/src/lib/property/input/markdown-property").MarkDownProperty;
    spreadsheet_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    sheet_id: import("@activepieces/pieces-framework").DropdownProperty<number, true>;
    include_team_drives: import("@activepieces/pieces-framework").CheckboxProperty<false>;
}>;
