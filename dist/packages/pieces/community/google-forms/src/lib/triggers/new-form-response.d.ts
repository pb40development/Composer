import { TriggerStrategy } from '@activepieces/pieces-framework';
export declare const newResponse: import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    form_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    include_team_drives: import("@activepieces/pieces-framework").CheckboxProperty<false>;
}> | import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    form_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    include_team_drives: import("@activepieces/pieces-framework").CheckboxProperty<false>;
}> | import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    form_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    include_team_drives: import("@activepieces/pieces-framework").CheckboxProperty<false>;
}>;
