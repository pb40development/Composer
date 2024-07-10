"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegramBot = exports.telegramBotAuth = void 0;
const pieces_common_1 = require("@activepieces/pieces-common");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const shared_1 = require("@activepieces/shared");
const create_invite_link_1 = require("./lib/action/create-invite-link");
const get_chat_member_1 = require("./lib/action/get-chat-member");
const send_media_action_1 = require("./lib/action/send-media.action");
const send_text_message_action_1 = require("./lib/action/send-text-message.action");
const common_1 = require("./lib/common");
const new_message_1 = require("./lib/trigger/new-message");
const markdownDescription = `
**Authentication**:

1. Begin a conversation with the [Botfather](https://telegram.me/BotFather).
2. Type in "/newbot"
3. Choose a name for your bot
4. Choose a username for your bot.
5. Copy the token value from the Botfather and use it activepieces connection.
6. Congratulations! You can now use your new Telegram connection in your flows.
`;
exports.telegramBotAuth = pieces_framework_1.PieceAuth.SecretText({
    displayName: 'Bot Token',
    description: markdownDescription,
    required: true,
});
exports.telegramBot = (0, pieces_framework_1.createPiece)({
    displayName: 'Telegram Bot',
    description: 'Build chatbots for Telegram',
    minimumSupportedRelease: '0.5.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/telegram_bot.png',
    categories: [shared_1.PieceCategory.COMMUNICATION],
    auth: exports.telegramBotAuth,
    actions: [
        send_text_message_action_1.telegramSendMessageAction,
        send_media_action_1.telegramSendMediaAction,
        get_chat_member_1.telegramGetChatMemberAction,
        create_invite_link_1.telegramCreateInviteLinkAction,
        (0, pieces_common_1.createCustomApiCallAction)({
            baseUrl: (auth) => common_1.telegramCommons.getApiUrl(auth, ''),
            auth: exports.telegramBotAuth,
        }),
    ],
    authors: ["abdullahranginwala", "tanoggy", "alerdenisov", "Abdallah-Alwarawreh", "kishanprmr", "MoShizzle", "khaledmashaly", "abuaboud"],
    triggers: [new_message_1.telegramNewMessage],
});
//# sourceMappingURL=index.js.map