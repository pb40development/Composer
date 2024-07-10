"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestSendApprovalMessageAction = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const utils_1 = require("../common/utils");
const __1 = require("../..");
const shared_1 = require("@activepieces/shared");
const props_1 = require("../common/props");
exports.requestSendApprovalMessageAction = (0, pieces_framework_1.createAction)({
    auth: __1.slackAuth,
    name: 'request_approval_message',
    displayName: 'Request Approval in a Channel',
    description: 'Send approval message to a channel and then wait until the message is approved or disapproved',
    props: {
        info: props_1.slackInfo,
        channel: (0, props_1.slackChannel)(true),
        text: props_1.text,
        username: props_1.username,
        profilePicture: props_1.profilePicture,
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (context.executionType === shared_1.ExecutionType.BEGIN) {
                context.run.pause({
                    pauseMetadata: {
                        type: shared_1.PauseType.WEBHOOK,
                        response: {},
                    },
                });
                const token = context.auth.access_token;
                const { channel, username, profilePicture } = context.propsValue;
                (0, shared_1.assertNotNullOrUndefined)(token, 'token');
                (0, shared_1.assertNotNullOrUndefined)(props_1.text, 'text');
                (0, shared_1.assertNotNullOrUndefined)(channel, 'channel');
                const approvalLink = context.generateResumeUrl({
                    queryParams: { action: 'approve' },
                });
                const disapprovalLink = context.generateResumeUrl({
                    queryParams: { action: 'disapprove' },
                });
                return yield (0, utils_1.slackSendMessage)({
                    token,
                    text: `${context.propsValue.text}\n\nApprove: ${approvalLink}\n\nDisapprove: ${disapprovalLink}`,
                    username,
                    profilePicture,
                    blocks: [
                        {
                            type: 'section',
                            text: {
                                type: 'mrkdwn',
                                text: `${context.propsValue.text}`,
                            },
                        },
                        {
                            type: 'actions',
                            block_id: 'actions',
                            elements: [
                                {
                                    type: 'button',
                                    text: {
                                        type: 'plain_text',
                                        text: 'Approve',
                                    },
                                    style: 'primary',
                                    url: approvalLink,
                                },
                                {
                                    type: 'button',
                                    text: {
                                        type: 'plain_text',
                                        text: 'Disapprove',
                                    },
                                    style: 'danger',
                                    url: disapprovalLink,
                                },
                            ],
                        },
                    ],
                    conversationId: channel,
                });
            }
            else {
                return {
                    approved: context.resumePayload.queryParams['action'] === 'approve',
                };
            }
        });
    },
});
//# sourceMappingURL=request-approval-message.js.map