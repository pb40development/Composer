"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripeCommon = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@activepieces/pieces-common");
exports.stripeCommon = {
    baseUrl: 'https://api.stripe.com/v1',
    subscribeWebhook: (eventName, webhookUrl, apiKey) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const request = {
            method: pieces_common_1.HttpMethod.POST,
            url: `${exports.stripeCommon.baseUrl}/webhook_endpoints`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: {
                enabled_events: [eventName],
                url: webhookUrl,
            },
            authentication: {
                type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                token: apiKey,
            },
            queryParams: {},
        };
        const { body: webhook } = yield pieces_common_1.httpClient.sendRequest(request);
        return webhook;
    }),
    unsubscribeWebhook: (webhookId, apiKey) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const request = {
            method: pieces_common_1.HttpMethod.DELETE,
            url: `${exports.stripeCommon.baseUrl}/webhook_endpoints/${webhookId}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            authentication: {
                type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                token: apiKey,
            },
        };
        return yield pieces_common_1.httpClient.sendRequest(request);
    }),
};
//# sourceMappingURL=index.js.map