import { TriggerStrategy } from '@activepieces/pieces-framework';
export declare const webflowNewSubmission: import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    site_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    formName: import("@activepieces/pieces-framework").ShortTextProperty<false>;
}> | import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    site_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    formName: import("@activepieces/pieces-framework").ShortTextProperty<false>;
}> | import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    site_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    formName: import("@activepieces/pieces-framework").ShortTextProperty<false>;
}>;
