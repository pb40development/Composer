"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMedia = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../..");
const utils_1 = require("../common/utils");
exports.sendMedia = (0, pieces_framework_1.createAction)({
    auth: __1.whatsappAuth,
    name: 'sendMedia',
    displayName: 'Send Media',
    description: 'Send a media message through WhatsApp',
    props: {
        phone_number_id: utils_1.commonProps.phone_number_id,
        to: pieces_framework_1.Property.ShortText({
            displayName: 'To',
            description: 'The recipient of the message',
            required: true,
        }),
        type: pieces_framework_1.Property.Dropdown({
            displayName: 'Type',
            description: 'The type of media to send',
            required: true,
            options: () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return {
                    options: utils_1.supportedMediaTypes.map((type) => ({
                        label: (0, utils_1.capitalizeFirstLetter)(type),
                        value: type,
                    })),
                };
            }),
            refreshers: [],
        }),
        media: pieces_framework_1.Property.ShortText({
            displayName: 'Media URL',
            description: 'The URL of the media to send',
            required: true,
        }),
        caption: pieces_framework_1.Property.LongText({
            displayName: 'Caption',
            description: 'A caption for the media',
            required: false,
        }),
        filename: pieces_framework_1.Property.LongText({
            displayName: 'Filename',
            description: 'Filename of the document to send',
            required: false,
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { to, caption, media, type, filename, phone_number_id } = context.propsValue;
            const { access_token } = context.auth;
            const body = {
                messaging_product: 'whatsapp',
                recipient_type: 'individual',
                to,
                type,
                [type]: {
                    link: media,
                },
            };
            if (caption && (0, utils_1.mediaTypeSupportsCaption)(type))
                body[type].caption = caption;
            if (filename && type === 'document')
                body[type].filename = filename;
            return yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.POST,
                url: `https://graph.facebook.com/v17.0/${phone_number_id}/messages`,
                headers: {
                    Authorization: 'Bearer ' + access_token,
                },
                body,
            });
        });
    },
});
//# sourceMappingURL=send-media.js.map