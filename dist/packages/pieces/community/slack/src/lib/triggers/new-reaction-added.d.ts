import { TriggerStrategy } from '@activepieces/pieces-framework';
export declare const newReactionAdded: import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    emojis: import("@activepieces/pieces-framework").ArrayProperty<false>;
    channel: import("@activepieces/pieces-framework").DropdownProperty<string, false>;
}> | import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    emojis: import("@activepieces/pieces-framework").ArrayProperty<false>;
    channel: import("@activepieces/pieces-framework").DropdownProperty<string, false>;
}> | import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    emojis: import("@activepieces/pieces-framework").ArrayProperty<false>;
    channel: import("@activepieces/pieces-framework").DropdownProperty<string, false>;
}>;
