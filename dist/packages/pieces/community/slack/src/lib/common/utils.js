"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processMessageTimestamp = exports.slackSendMessage = void 0;
const tslib_1 = require("tslib");
const web_api_1 = require("@slack/web-api");
const slackSendMessage = (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ text, conversationId, username, profilePicture, blocks, threadTs, token, file, }) {
    const client = new web_api_1.WebClient(token);
    if (file) {
        return yield client.files.uploadV2({
            channel_id: conversationId,
            initial_comment: text,
            thread_ts: threadTs,
            file_uploads: [
                {
                    file: file.data,
                    filename: file.filename,
                },
            ],
        });
    }
    else {
        return yield client.chat.postMessage({
            text,
            channel: conversationId,
            username,
            icon_url: profilePicture,
            blocks: blocks,
            thread_ts: threadTs,
        });
    }
});
exports.slackSendMessage = slackSendMessage;
function processMessageTimestamp(input) {
    // Regular expression to match a URL containing the timestamp
    const urlRegex = /\/p(\d+)(\d{6})$/;
    // Check if the input is a URL
    const urlMatch = input.match(urlRegex);
    if (urlMatch) {
        const timestamp = `${urlMatch[1]}.${urlMatch[2]}`;
        return timestamp;
    }
    // Check if the input is already in the desired format
    const timestampRegex = /^(\d+)\.(\d{6})$/;
    const timestampMatch = input.match(timestampRegex);
    if (timestampMatch) {
        return input;
    }
    return undefined;
}
exports.processMessageTimestamp = processMessageTimestamp;
//# sourceMappingURL=utils.js.map