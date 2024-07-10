"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegramCreateInviteLinkAction = void 0;
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
exports.telegramCreateInviteLinkAction = (0, pieces_framework_1.createAction)({
    auth: __1.telegramBotAuth,
    name: 'create_invite_link',
    description: 'Create an invite link for a chat',
    displayName: 'Create Invite Link',
    props: {
        instructions: pieces_framework_1.Property.MarkDown({
            value: chatId,
        }),
        chat_id: pieces_framework_1.Property.ShortText({
            displayName: 'Chat Id',
            required: true,
        }),
        name: pieces_framework_1.Property.ShortText({
            displayName: 'Name',
            description: 'Name of the invite link (max 32 chars)',
            required: false,
        }),
        expire_date: pieces_framework_1.Property.DateTime({
            displayName: 'Expire Date',
            description: 'Point in time when the link will expire',
            required: false,
        }),
        member_limit: pieces_framework_1.Property.Number({
            displayName: 'Member Limit',
            description: 'Maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999',
            required: false,
        }),
    },
    run(ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            return yield pieces_common_1.httpClient
                .sendRequest({
                method: pieces_common_1.HttpMethod.POST,
                url: common_1.telegramCommons.getApiUrl(ctx.auth, 'createChatInviteLink'),
                headers: {},
                body: {
                    chat_id: ctx.propsValue.chat_id,
                    name: (_a = ctx.propsValue.name) !== null && _a !== void 0 ? _a : undefined,
                    expire_date: ctx.propsValue.expire_date
                        ? Math.floor(new Date(ctx.propsValue.expire_date).getTime() / 1000)
                        : undefined,
                    member_limit: (_b = ctx.propsValue.member_limit) !== null && _b !== void 0 ? _b : undefined,
                },
            })
                .then((res) => res.body);
        });
    },
});
//# sourceMappingURL=create-invite-link.js.map