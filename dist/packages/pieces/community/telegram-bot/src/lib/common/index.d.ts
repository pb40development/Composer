export type SetWebhookRequest = {
    ip_address: string;
    max_connections: number;
    allowed_updates: string[];
    drop_pending_updates: boolean;
    secret_token: string;
};
export declare const telegramCommons: {
    getApiUrl: (botToken: string, methodName: string) => string;
    subscribeWebhook: (botToken: string, webhookUrl: string, overrides?: Partial<SetWebhookRequest>) => Promise<void>;
    unsubscribeWebhook: (botToken: string) => Promise<import("@activepieces/pieces-common").HttpResponse<any>>;
};
