"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegramCommons = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@activepieces/pieces-common");
exports.telegramCommons = {
    getApiUrl: (botToken, methodName) => {
        return `https://api.telegram.org/bot${botToken}/${methodName}`;
    },
    subscribeWebhook: (botToken, webhookUrl, overrides) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const request = {
            method: pieces_common_1.HttpMethod.POST,
            url: `https://api.telegram.org/bot${botToken}/setWebhook`,
            body: Object.assign({ allowed_updates: [], url: webhookUrl }, overrides),
        };
        yield pieces_common_1.httpClient.sendRequest(request);
    }),
    unsubscribeWebhook: (botToken) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const request = {
            method: pieces_common_1.HttpMethod.GET,
            url: `https://api.telegram.org/bot${botToken}/deleteWebhook`,
        };
        return yield pieces_common_1.httpClient.sendRequest(request);
    }),
};
//# sourceMappingURL=index.js.map