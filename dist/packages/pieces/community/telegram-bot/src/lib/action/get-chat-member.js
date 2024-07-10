"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegramGetChatMemberAction = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@activepieces/pieces-common");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const __1 = require("../..");
const common_1 = require("../common");
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
exports.telegramGetChatMemberAction = (0, pieces_framework_1.createAction)({
    auth: __1.telegramBotAuth,
    name: 'get_chat_member',
    description: 'Get member info (or null) for provided chat id and user id',
    displayName: 'Get Chat Member',
    props: {
        instructions: pieces_framework_1.Property.MarkDown({
            value: chatId,
        }),
        chat_id: pieces_framework_1.Property.ShortText({
            displayName: 'Chat Id',
            required: true,
        }),
        user_id: pieces_framework_1.Property.ShortText({
            displayName: 'User Id',
            description: 'Unique identifier for the user',
            required: true,
        }),
    },
    run(ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield pieces_common_1.httpClient
                    .sendRequest({
                    method: pieces_common_1.HttpMethod.POST,
                    url: common_1.telegramCommons.getApiUrl(ctx.auth, 'getChatMember'),
                    headers: {},
                    body: {
                        chat_id: ctx.propsValue.chat_id,
                        user_id: ctx.propsValue.user_id,
                    },
                })
                    .then((res) => res.body);
            }
            catch (error) {
                return error.errorMessage().response.body;
            }
        });
    },
});
//# sourceMappingURL=get-chat-member.js.map