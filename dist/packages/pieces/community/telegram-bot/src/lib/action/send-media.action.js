"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegramSendMediaAction = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const common_1 = require("../common");
const __1 = require("../..");
const form_data_1 = tslib_1.__importDefault(require("form-data"));
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
exports.telegramSendMediaAction = (0, pieces_framework_1.createAction)({
    auth: __1.telegramBotAuth,
    name: 'send_media',
    description: 'Send a media message through a Telegram bot',
    displayName: 'Send Media',
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
        media_type: pieces_framework_1.Property.StaticDropdown({
            displayName: 'Media Type',
            required: false,
            options: {
                disabled: false,
                placeholder: 'Select media type',
                options: [
                    { label: 'Image', value: 'photo' },
                    { label: 'Video', value: 'video' },
                    { label: 'Sticker', value: 'sticker' },
                    { label: 'GIF', value: 'animation' },
                ],
            },
        }),
        media: pieces_framework_1.Property.DynamicProperties({
            displayName: 'Media Properties',
            required: false,
            refreshers: ['media_type'],
            props(_a) {
                return tslib_1.__awaiter(this, arguments, void 0, function* ({ media_type }) {
                    const propsBuilders = {
                        photo: () => ({
                            photo: pieces_framework_1.Property.File({
                                displayName: 'Image',
                                description: 'The image to be uploaded as a file',
                                required: false,
                            }),
                            photoUrl: pieces_framework_1.Property.ShortText({
                                displayName: 'Image Url',
                                description: 'The image url to be downloaded by Telegram',
                                required: false,
                            }),
                            photoId: pieces_framework_1.Property.ShortText({
                                displayName: 'Image Id',
                                description: "The image id previously uploaded to Telegram's servers",
                                required: false,
                            }),
                        }),
                        video: () => ({
                            video: pieces_framework_1.Property.File({
                                displayName: 'Video',
                                description: 'The video to be uploaded as a file',
                                required: false,
                            }),
                            videoUrl: pieces_framework_1.Property.ShortText({
                                displayName: 'Video Url',
                                description: 'The video url to be downloaded by Telegram',
                                required: false,
                            }),
                            videoId: pieces_framework_1.Property.ShortText({
                                displayName: 'Video Id',
                                description: "The video id previously uploaded to Telegram's servers",
                                required: false,
                            }),
                        }),
                        sticker: () => ({
                            sticker: pieces_framework_1.Property.File({
                                displayName: 'Sticker',
                                description: 'The sticker to be uploaded as a file (supports .WEBP files for static and .TGS for animated)',
                                required: false,
                            }),
                            emoji: pieces_framework_1.Property.ShortText({
                                displayName: 'Emoji',
                                description: 'Emoji associated with the sticker. Only for just uploaded stickers',
                                required: false,
                            }),
                            stickerUrl: pieces_framework_1.Property.ShortText({
                                displayName: 'Sticker Url',
                                description: 'The static sticker url to be downloaded by Telegram (supports only .WEBP files)',
                                required: false,
                            }),
                            stickerId: pieces_framework_1.Property.ShortText({
                                displayName: 'Sticker Id',
                                description: "The sticker id previously uploaded to Telegram's servers",
                                required: false,
                            }),
                        }),
                        animation: () => ({
                            animation: pieces_framework_1.Property.File({
                                displayName: 'GIF',
                                description: 'The GIF or MPEG-4 without sound file to be uploaded as a auto-playing animation',
                                required: false,
                            }),
                            animationUrl: pieces_framework_1.Property.ShortText({
                                displayName: 'GIF Url',
                                description: 'The GIF or MPEG-4 without sound url to be downloaded by Telegram',
                                required: false,
                            }),
                            animationId: pieces_framework_1.Property.ShortText({
                                displayName: 'GIF Id',
                                description: "The GIF or MPEG-4 without sound id previously uploaded to Telegram's servers",
                                required: false,
                            }),
                            duration: pieces_framework_1.Property.Number({
                                displayName: 'Duration',
                                description: 'Duration of sent video in seconds',
                                required: false,
                            }),
                        }),
                    };
                    return propsBuilders[media_type]();
                });
            },
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
            var _a, _b, _c, _d, _e, _f, _g;
            const mediaType = ctx.propsValue['media_type'];
            const headers = {};
            const queryParams = {};
            let body = undefined;
            let method = 'sendMessage';
            if (typeof mediaType !== 'undefined') {
                // send media message
                const [file, url, id] = [
                    (_a = ctx.propsValue.media) === null || _a === void 0 ? void 0 : _a[mediaType],
                    (_b = ctx.propsValue.media) === null || _b === void 0 ? void 0 : _b[mediaType + 'Url'],
                    (_c = ctx.propsValue.media) === null || _c === void 0 ? void 0 : _c[mediaType + 'Id'],
                ];
                const methods = {
                    photo: 'sendPhoto',
                    video: 'sendVideo',
                    sticker: 'sendSticker',
                    animation: 'sendAnimation',
                };
                const mediaMethod = methods[mediaType];
                if (!mediaMethod) {
                    throw new Error('Unknown media type method (' + mediaType + ')');
                }
                method = mediaMethod;
                if (typeof file !== 'undefined') {
                    // upload
                    headers['Content-Type'] = 'multipart/form-data';
                    const form = new form_data_1.default();
                    form.append('file', file.data, file.extension);
                    body = form;
                    queryParams.chat_id = ctx.propsValue['chat_id'];
                    queryParams.caption = ctx.propsValue['message'];
                    if (ctx.propsValue['message_thread_id'])
                        queryParams.message_thread_id = ctx.propsValue['message_thread_id'];
                    queryParams.parse_mode = (_d = ctx.propsValue['format']) !== null && _d !== void 0 ? _d : 'MarkdownV2';
                    // TODO: research how to
                    // if (ctx.propsValue['reply_markup'])
                    //   queryParams.reply_markup = ctx.propsValue['reply_markup'];
                }
                else if (typeof url !== 'undefined' || typeof id !== 'undefined') {
                    // download
                    body = body || {};
                    body[mediaType] = url !== null && url !== void 0 ? url : id;
                    body.chat_id = ctx.propsValue['chat_id'];
                    body.caption = ctx.propsValue['message'];
                    body.message_thread_id =
                        (_e = ctx.propsValue['message_thread_id']) !== null && _e !== void 0 ? _e : undefined;
                    body.parse_mode = (_f = ctx.propsValue['format']) !== null && _f !== void 0 ? _f : 'MarkdownV2';
                    body.reply_markup = (_g = ctx.propsValue['reply_markup']) !== null && _g !== void 0 ? _g : undefined;
                }
                else {
                    throw new Error('No media defined. Ensure you have setup file, url or id');
                }
            }
            if (typeof body === 'undefined') {
                throw new Error('No body defined');
            }
            return yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.POST,
                url: common_1.telegramCommons.getApiUrl(ctx.auth, method),
                headers,
                body,
                queryParams,
            });
        });
    },
});
//# sourceMappingURL=send-media.action.js.map