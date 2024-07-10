"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTemplateMessageAction = void 0;
const tslib_1 = require("tslib");
const __1 = require("../..");
const pieces_common_1 = require("@activepieces/pieces-common");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const utils_1 = require("../common/utils");
exports.sendTemplateMessageAction = (0, pieces_framework_1.createAction)({
    auth: __1.whatsappAuth,
    name: 'send-template-message',
    displayName: 'Send Template Message',
    description: 'Sends a template message.',
    props: {
        phone_number_id: utils_1.commonProps.phone_number_id,
        to: pieces_framework_1.Property.ShortText({
            displayName: 'To',
            description: 'Recipient phone number.',
            required: true,
        }),
        message_template_id: utils_1.commonProps.message_template_id,
        message_template_fields: utils_1.commonProps.message_template_fields,
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const phoneNumberId = context.propsValue.phone_number_id;
            const recipientPhoneNumber = context.propsValue.to;
            const templateId = context.propsValue.message_template_id;
            const templateFields = context.propsValue.message_template_fields;
            // construct components object
            // https://developers.facebook.com/docs/whatsapp/cloud-api/reference/messages#components-object
            const components = [];
            const headerParameters = [];
            const bodyParameters = [];
            const buttonParameters = [];
            for (const [key, value] of Object.entries(templateFields)) {
                if (key.startsWith('header_')) {
                    headerParameters.push({ type: 'text', text: value });
                }
                else if (key.startsWith('body_')) {
                    bodyParameters.push({ type: 'text', text: value });
                }
                else if (key.startsWith('button_')) {
                    buttonParameters.push({ type: 'text', text: value });
                }
            }
            if (headerParameters.length) {
                components.push({
                    type: 'header',
                    parameters: headerParameters,
                });
            }
            if (bodyParameters.length) {
                components.push({
                    type: 'body',
                    parameters: bodyParameters,
                });
            }
            if (buttonParameters.length) {
                components.push({
                    type: 'button',
                    sub_type: 'url',
                    index: 0,
                    parameters: buttonParameters,
                });
            }
            // fetch template language code
            const templateData = yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.GET,
                url: `https://graph.facebook.com/v20.0/${templateId}`,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: context.auth.access_token,
                },
                queryParams: {
                    fields: 'id,name,language',
                },
            });
            const templateLanguage = templateData.body['language'];
            const templateName = templateData.body['name'];
            // https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates/#text-based
            const response = yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.POST,
                url: `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: context.auth.access_token,
                },
                body: {
                    messaging_product: 'whatsapp',
                    recipient_type: 'individual',
                    to: recipientPhoneNumber,
                    type: 'template',
                    template: {
                        name: templateName,
                        language: {
                            code: templateLanguage,
                        },
                        components,
                    },
                },
            });
            return response.body;
        });
    },
});
//# sourceMappingURL=send-from-template.js.map