import { TriggerStrategy } from '@activepieces/pieces-framework';
export declare const wordpressNewPost: import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@activepieces/pieces-framework").CustomAuthProperty<{
    username: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    password: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    website_url: import("@activepieces/pieces-framework").ShortTextProperty<true>;
}>, {
    authors: import("@activepieces/pieces-framework").DropdownProperty<string, false>;
}> | import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@activepieces/pieces-framework").CustomAuthProperty<{
    username: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    password: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    website_url: import("@activepieces/pieces-framework").ShortTextProperty<true>;
}>, {
    authors: import("@activepieces/pieces-framework").DropdownProperty<string, false>;
}> | import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@activepieces/pieces-framework").CustomAuthProperty<{
    username: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    password: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    website_url: import("@activepieces/pieces-framework").ShortTextProperty<true>;
}>, {
    authors: import("@activepieces/pieces-framework").DropdownProperty<string, false>;
}>;
