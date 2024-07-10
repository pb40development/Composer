export declare const stripeCommon: {
    baseUrl: string;
    subscribeWebhook: (eventName: string, webhookUrl: string, apiKey: string) => Promise<{
        id: string;
    }>;
    unsubscribeWebhook: (webhookId: string, apiKey: string) => Promise<import("@activepieces/pieces-common").HttpResponse<any>>;
};
