import { TriggerStrategy } from '@activepieces/pieces-framework';
export declare const newMessage: import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    info: import("dist/packages/pieces/community/framework/src/lib/property/input/markdown-property").MarkDownProperty;
    channel: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
}> | import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    info: import("dist/packages/pieces/community/framework/src/lib/property/input/markdown-property").MarkDownProperty;
    channel: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
}> | import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    info: import("dist/packages/pieces/community/framework/src/lib/property/input/markdown-property").MarkDownProperty;
    channel: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
}>;
