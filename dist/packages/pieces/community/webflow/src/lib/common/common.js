"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webflowCommon = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@activepieces/pieces-common");
exports.webflowCommon = {
    baseUrl: 'https://api.webflow.com/',
    subscribeWebhook: (siteId, tag, webhookUrl, accessToken) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const request = {
            method: pieces_common_1.HttpMethod.POST,
            url: `https://api.webflow.com/sites/${siteId}/webhooks`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                triggerType: tag,
                url: webhookUrl,
            },
            authentication: {
                type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                token: accessToken,
            },
            queryParams: {},
        };
        const res = yield pieces_common_1.httpClient.sendRequest(request);
        return res;
    }),
    unsubscribeWebhook: (siteId, webhookId, accessToken) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const request = {
            method: pieces_common_1.HttpMethod.DELETE,
            url: `https://api.webflow.com/sites/${siteId}/webhooks/${webhookId}`,
            headers: {
                'Content-Type': 'application/json',
            },
            authentication: {
                type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                token: accessToken,
            },
        };
        return yield pieces_common_1.httpClient.sendRequest(request);
    }),
};
//# sourceMappingURL=common.js.map