export declare const webflowCommon: {
    baseUrl: string;
    subscribeWebhook: (siteId: string, tag: string, webhookUrl: string, accessToken: string) => Promise<import("@activepieces/pieces-common").HttpResponse<any>>;
    unsubscribeWebhook: (siteId: string, webhookId: string, accessToken: string) => Promise<import("@activepieces/pieces-common").HttpResponse<any>>;
};
