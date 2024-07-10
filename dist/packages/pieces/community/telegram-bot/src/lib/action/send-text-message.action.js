"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegramSendMessageAction = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const common_1 = require("../common");
const __1 = require("../..");
const chatId = `

**How to obtain Chat ID:**
1. Search for the bot "@getmyid_bot" in Telegram.
2. Start a conversation with the bot.
3. Send the command "/my_id" to the bot.
4. The bot will reply with your chat ID.

**Note: Remember to initiate the chat with the bot, or you'll get an error for "chat not found.**
`;
const format = `
[Link example](https://core.telegram.org/bots/api#formatting-options)
`;
exports.telegramSendMessageAction = (0, pieces_framework_1.createAction)({
    auth: __1.telegramBotAuth,
    name: 'send_text_message',
    description: 'Send a message through a Telegram bot',
    displayName: 'Send Text Message',
    props: {
        instructions: pieces_framework_1.Property.MarkDown({
            value: chatId,
        }),
        chat_id: pieces_framework_1.Property.ShortText({
            displayName: 'Chat Id',
            required: true,
        }),
        message_thread_id: pieces_framework_1.Property.ShortText({
            displayName: 'Message Thread Id',
            description: 'Unique identifier for the target message thread of the forums; for forums supergroups only',
            required: false,
        }),
        format: pieces_framework_1.Property.StaticDropdown({
            displayName: 'Format',
            description: 'Choose format you want ',
            required: false,
            options: {
                options: [
                    {
                        label: 'Markdown',
                        value: 'MarkdownV2',
                    },
                    {
                        label: 'HTML',
                        value: 'HTML',
                    },
                ],
            },
            defaultValue: 'MarkdownV2',
        }),
        instructions_format: pieces_framework_1.Property.MarkDown({
            value: format,
        }),
        web_page_preview: pieces_framework_1.Property.Checkbox({
            displayName: 'Disable Web Page Preview',
            description: 'Disable link previews for links in this message',
            required: false,
            defaultValue: false,
        }),
        message: pieces_framework_1.Property.LongText({
            displayName: 'Message',
            description: 'The message to be sent',
            required: true,
        }),
        reply_markup: pieces_framework_1.Property.Json({
            required: false,
            displayName: 'Reply Markup',
            description: 'Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. Use special actions such as Build Inline Keyboard to generate this JSON object.',
        }),
    },
    run(ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            return yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.POST,
                url: common_1.telegramCommons.getApiUrl(ctx.auth, 'sendMessage'),
                body: {
                    chat_id: ctx.propsValue['chat_id'],
                    text: ctx.propsValue['message'],
                    message_thread_id: (_a = ctx.propsValue['message_thread_id']) !== null && _a !== void 0 ? _a : undefined,
                    parse_mode: (_b = ctx.propsValue['format']) !== null && _b !== void 0 ? _b : 'MarkdownV2',
                    reply_markup: (_c = ctx.propsValue['reply_markup']) !== null && _c !== void 0 ? _c : undefined,
                    disable_web_page_preview: (_d = ctx.propsValue['web_page_preview']) !== null && _d !== void 0 ? _d : false,
                },
            });
        });
    },
});
//# sourceMappingURL=send-text-message.action.js.map