"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slack = exports.slackAuth = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@activepieces/pieces-common");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const shared_1 = require("@activepieces/shared");
const node_crypto_1 = tslib_1.__importDefault(require("node:crypto"));
const request_action_direct_message_1 = require("./lib/actions/request-action-direct-message");
const request_action_message_1 = require("./lib/actions/request-action-message");
const request_approval_direct_message_1 = require("./lib/actions/request-approval-direct-message");
const request_approval_message_1 = require("./lib/actions/request-approval-message");
const send_direct_message_action_1 = require("./lib/actions/send-direct-message-action");
const send_message_action_1 = require("./lib/actions/send-message-action");
const new_message_1 = require("./lib/triggers/new-message");
const new_reaction_added_1 = require("./lib/triggers/new-reaction-added");
const upload_file_1 = require("./lib/actions/upload-file");
const search_messages_1 = require("./lib/actions/search-messages");
const update_message_1 = require("./lib/actions/update-message");
const find_user_by_email_1 = require("./lib/actions/find-user-by-email");
const update_profile_1 = require("./lib/actions/update-profile");
const create_channel_1 = require("./lib/actions/create-channel");
const new_channel_1 = require("./lib/triggers/new-channel");
const add_reaction_to_message_1 = require("./lib/actions/add-reaction-to-message");
const get_channel_history_1 = require("./lib/actions/get-channel-history");
exports.slackAuth = pieces_framework_1.PieceAuth.OAuth2({
    description: '',
    authUrl: 'https://slack.com/oauth/v2/authorize?user_scope=search:read,users.profile:write',
    tokenUrl: 'https://slack.com/api/oauth.v2.access',
    required: true,
    scope: [
        'channels:read',
        'channels:manage',
        'channels:history',
        'chat:write',
        'groups:read',
        'groups:write',
        'reactions:read',
        'mpim:read',
        'mpim:write',
        'im:write',
        'users:read',
        'files:write',
        'files:read',
        'users:read.email',
        'reactions:write',
    ],
});
exports.slack = (0, pieces_framework_1.createPiece)({
    displayName: 'Slack',
    description: 'Channel-based messaging platform',
    minimumSupportedRelease: '0.20.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/slack.png',
    categories: [shared_1.PieceCategory.COMMUNICATION],
    auth: exports.slackAuth,
    events: {
        parseAndReply: ({ payload }) => {
            var _a;
            const payloadBody = payload.body;
            if (payloadBody.challenge) {
                return {
                    reply: {
                        body: payloadBody['challenge'],
                        headers: {},
                    },
                };
            }
            return {
                event: (_a = payloadBody === null || payloadBody === void 0 ? void 0 : payloadBody.event) === null || _a === void 0 ? void 0 : _a.type,
                identifierValue: payloadBody.team_id,
            };
        },
        verify: ({ webhookSecret, payload }) => {
            // Construct the signature base string
            const timestamp = payload.headers['x-slack-request-timestamp'];
            const signature = payload.headers['x-slack-signature'];
            const signatureBaseString = `v0:${timestamp}:${payload.rawBody}`;
            const hmac = node_crypto_1.default.createHmac('sha256', webhookSecret);
            hmac.update(signatureBaseString);
            const computedSignature = `v0=${hmac.digest('hex')}`;
            return signature === computedSignature;
        },
    },
    authors: [
        'rita-gorokhod',
        'AdamSelene',
        'Abdallah-Alwarawreh',
        'kishanprmr',
        'MoShizzle',
        'AbdulTheActivePiecer',
        'khaledmashaly',
        'abuaboud',
    ],
    actions: [
        add_reaction_to_message_1.addRectionToMessageAction,
        send_direct_message_action_1.slackSendDirectMessageAction,
        send_message_action_1.slackSendMessageAction,
        request_approval_direct_message_1.requestApprovalDirectMessageAction,
        request_approval_message_1.requestSendApprovalMessageAction,
        request_action_direct_message_1.requestActionDirectMessageAction,
        request_action_message_1.requestActionMessageAction,
        upload_file_1.uploadFile,
        search_messages_1.searchMessages,
        find_user_by_email_1.findUserByEmailAction,
        update_message_1.updateMessage,
        create_channel_1.createChannelAction,
        update_profile_1.updateProfileAction,
        get_channel_history_1.getChannelHistory,
        (0, pieces_common_1.createCustomApiCallAction)({
            baseUrl: () => {
                return 'https://slack.com/api';
            },
            auth: exports.slackAuth,
            authMapping: (auth) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return {
                    Authorization: `Bearer ${auth.access_token}`,
                };
            }),
        }),
    ],
    triggers: [new_message_1.newMessage, new_reaction_added_1.newReactionAdded, new_channel_1.channelCreated],
});
//# sourceMappingURL=index.js.map