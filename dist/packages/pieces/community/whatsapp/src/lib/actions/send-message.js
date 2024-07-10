"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../..");
const utils_1 = require("../common/utils");
exports.sendMessage = (0, pieces_framework_1.createAction)({
    auth: __1.whatsappAuth,
    name: 'sendMessage',
    displayName: 'Send Message',
    description: 'Send a text message through WhatsApp',
    props: {
        phone_number_id: utils_1.commonProps.phone_number_id,
        to: pieces_framework_1.Property.ShortText({
            displayName: 'To',
            description: 'The recipient of the message',
            required: true,
        }),
        text: pieces_framework_1.Property.LongText({
            displayName: 'Message',
            description: 'The message to send',
            required: true,
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { to, text, phone_number_id } = context.propsValue;
            const { access_token } = context.auth;
            return yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.POST,
                url: `https://graph.facebook.com/v17.0/${phone_number_id}/messages`,
                headers: {
                    Authorization: 'Bearer ' + access_token,
                },
                body: {
                    messaging_product: 'whatsapp',
                    recipient_type: 'individual',
                    to,
                    type: 'text',
                    text: {
                        body: text,
                    },
                },
            });
        });
    },
});
//# sourceMappingURL=send-message.js.map