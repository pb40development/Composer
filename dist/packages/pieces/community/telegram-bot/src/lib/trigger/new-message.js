"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegramNewMessage = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const common_1 = require("../common");
const __1 = require("../..");
const pieces_common_1 = require("@activepieces/pieces-common");
exports.telegramNewMessage = (0, pieces_framework_1.createTrigger)({
    auth: __1.telegramBotAuth,
    name: 'new_telegram_message',
    displayName: 'New message',
    description: 'Triggers when Telegram receives a new message',
    props: {},
    type: pieces_framework_1.TriggerStrategy.WEBHOOK,
    sampleData: {
        body: {
            message: {
                chat: {
                    id: 55169542059,
                    type: 'private',
                    username: 'AbdallahAlwarawreh',
                    last_name: 'Alwarawreh',
                    first_name: 'Abdallah',
                },
                date: 1686050152,
                from: {
                    id: 55169542059,
                    is_bot: false,
                    username: 'AbdallahAlwarawreh',
                    last_name: 'Alwarawreh',
                    first_name: 'Abdallah',
                    language_code: 'en',
                },
                parse_mode: 'MarkdownV2',
                text: 'Hello world',
                message_id: 21,
            },
            update_id: 351114420,
        },
    },
    onEnable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield common_1.telegramCommons.subscribeWebhook(context.auth, context.webhookUrl, {
                allowed_updates: [],
            });
        });
    },
    onDisable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield common_1.telegramCommons.unsubscribeWebhook(context.auth);
        });
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return [context.payload.body];
        });
    },
    test(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const messages = yield getLastFiveMessages(context.auth);
            return messages.result;
        });
    },
});
const getLastFiveMessages = (botToken) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const request = {
        method: pieces_common_1.HttpMethod.GET,
        url: `https://api.telegram.org/bot${botToken}/getUpdates?offset=-5`,
    };
    const response = yield pieces_common_1.httpClient.sendRequest(request);
    return response.body;
});
//# sourceMappingURL=new-message.js.map