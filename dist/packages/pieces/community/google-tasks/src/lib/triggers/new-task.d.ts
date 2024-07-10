import { OAuth2Props, TriggerStrategy } from '@activepieces/pieces-framework';
export declare const newTaskTrigger: import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@activepieces/pieces-framework").OAuth2Property<OAuth2Props>, {
    tasks_list: import("@activepieces/pieces-framework").DropdownProperty<string, false> | import("@activepieces/pieces-framework").DropdownProperty<string, true>;
}> | import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@activepieces/pieces-framework").OAuth2Property<OAuth2Props>, {
    tasks_list: import("@activepieces/pieces-framework").DropdownProperty<string, false> | import("@activepieces/pieces-framework").DropdownProperty<string, true>;
}> | import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@activepieces/pieces-framework").OAuth2Property<OAuth2Props>, {
    tasks_list: import("@activepieces/pieces-framework").DropdownProperty<string, false> | import("@activepieces/pieces-framework").DropdownProperty<string, true>;
}>;
