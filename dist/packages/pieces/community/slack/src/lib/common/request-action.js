"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestAction = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("./utils");
const shared_1 = require("@activepieces/shared");
const requestAction = (conversationId, context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { actions } = context.propsValue;
    (0, shared_1.assertNotNullOrUndefined)(actions, 'actions');
    if (!actions.length) {
        throw new Error(`Must have at least one button action`);
    }
    const actionTextToIds = actions.map((actionText) => {
        if (!actionText) {
            throw new Error(`Button text for the action cannot be empty`);
        }
        return {
            actionText,
            actionId: encodeURI(actionText),
        };
    });
    if (context.executionType === shared_1.ExecutionType.BEGIN) {
        context.run.pause({
            pauseMetadata: {
                type: shared_1.PauseType.WEBHOOK,
                actions: actionTextToIds.map((action) => action.actionId),
            },
        });
        const token = context.auth.access_token;
        const { text, username, profilePicture } = context.propsValue;
        (0, shared_1.assertNotNullOrUndefined)(token, 'token');
        (0, shared_1.assertNotNullOrUndefined)(text, 'text');
        const actionElements = actionTextToIds.map((action) => {
            const actionLink = context.generateResumeUrl({
                queryParams: { action: action.actionId },
            });
            return {
                type: 'button',
                text: {
                    type: 'plain_text',
                    text: action.actionText,
                },
                style: 'primary',
                url: actionLink,
            };
        });
        return yield (0, utils_1.slackSendMessage)({
            token,
            text: `${context.propsValue.text}`,
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
                    elements: actionElements,
                },
            ],
            conversationId: conversationId,
        });
    }
    else {
        const payload = context.resumePayload;
        return {
            action: decodeURI(payload.action),
        };
    }
});
exports.requestAction = requestAction;
//# sourceMappingURL=request-action.js.map