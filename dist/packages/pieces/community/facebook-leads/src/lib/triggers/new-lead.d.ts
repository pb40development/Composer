import { TriggerStrategy } from '@activepieces/pieces-framework';
export declare const newLead: import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    page: import("@activepieces/pieces-framework").DropdownProperty<unknown, true>;
    form: import("@activepieces/pieces-framework").DropdownProperty<unknown, false>;
}> | import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    page: import("@activepieces/pieces-framework").DropdownProperty<unknown, true>;
    form: import("@activepieces/pieces-framework").DropdownProperty<unknown, false>;
}> | import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    page: import("@activepieces/pieces-framework").DropdownProperty<unknown, true>;
    form: import("@activepieces/pieces-framework").DropdownProperty<unknown, false>;
}>;
