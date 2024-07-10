import { ApFile } from '@activepieces/pieces-framework';
export declare const slackSendMessage: ({ text, conversationId, username, profilePicture, blocks, threadTs, token, file, }: SlackSendMessageParams) => Promise<import("@slack/web-api").WebAPICallResult>;
type SlackSendMessageParams = {
    token: string;
    conversationId: string;
    username?: string;
    profilePicture?: string;
    blocks?: unknown[] | Record<string, any>;
    text: string;
    file?: ApFile;
    threadTs?: string;
};
export declare function processMessageTimestamp(input: string): string | undefined;
export {};
