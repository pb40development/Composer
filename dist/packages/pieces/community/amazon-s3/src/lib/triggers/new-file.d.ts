import { TriggerStrategy } from '@activepieces/pieces-framework';
export declare const newFile: import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@activepieces/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    bucket: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    endpoint: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    region: import("@activepieces/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    folderPath: import("@activepieces/pieces-framework").ShortTextProperty<false>;
}> | import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@activepieces/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    bucket: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    endpoint: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    region: import("@activepieces/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    folderPath: import("@activepieces/pieces-framework").ShortTextProperty<false>;
}> | import("@activepieces/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@activepieces/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    bucket: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    endpoint: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    region: import("@activepieces/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    folderPath: import("@activepieces/pieces-framework").ShortTextProperty<false>;
}>;
