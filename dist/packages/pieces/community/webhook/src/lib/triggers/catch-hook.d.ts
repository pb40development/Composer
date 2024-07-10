import { TriggerStrategy } from '@activepieces/pieces-framework';
declare enum AuthType {
    NONE = "none",
    BASIC = "basic",
    HEADER = "header"
}
export declare const catchWebhook: import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@activepieces/pieces-framework").PieceAuthProperty, {
    markdown: import("dist/packages/pieces/community/framework/src/lib/property/input/markdown-property").MarkDownProperty;
    authType: import("@activepieces/pieces-framework").StaticDropdownProperty<AuthType, false> | import("@activepieces/pieces-framework").StaticDropdownProperty<AuthType, true>;
    authFields: import("@activepieces/pieces-framework").DynamicProperties<false>;
}> | import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@activepieces/pieces-framework").PieceAuthProperty, {
    markdown: import("dist/packages/pieces/community/framework/src/lib/property/input/markdown-property").MarkDownProperty;
    authType: import("@activepieces/pieces-framework").StaticDropdownProperty<AuthType, false> | import("@activepieces/pieces-framework").StaticDropdownProperty<AuthType, true>;
    authFields: import("@activepieces/pieces-framework").DynamicProperties<false>;
}> | import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@activepieces/pieces-framework").PieceAuthProperty, {
    markdown: import("dist/packages/pieces/community/framework/src/lib/property/input/markdown-property").MarkDownProperty;
    authType: import("@activepieces/pieces-framework").StaticDropdownProperty<AuthType, false> | import("@activepieces/pieces-framework").StaticDropdownProperty<AuthType, true>;
    authFields: import("@activepieces/pieces-framework").DynamicProperties<false>;
}>;
export {};
