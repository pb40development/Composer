"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonProps = exports.mediaTypeSupportsCaption = exports.capitalizeFirstLetter = exports.supportedMediaTypes = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@activepieces/pieces-common");
const pieces_framework_1 = require("@activepieces/pieces-framework");
exports.supportedMediaTypes = ['image', 'audio', 'document', 'sticker', 'video'];
const capitalizeFirstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1);
exports.capitalizeFirstLetter = capitalizeFirstLetter;
const mediaTypeSupportsCaption = (type) => ['image', 'video', 'document'].includes(type);
exports.mediaTypeSupportsCaption = mediaTypeSupportsCaption;
exports.commonProps = {
    phone_number_id: pieces_framework_1.Property.Dropdown({
        displayName: 'Phone Number ID',
        description: 'Phone number ID that will be used to send the message.',
        refreshers: [],
        required: true,
        options: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ auth }) {
            if (!auth) {
                return {
                    placeholder: 'Please connect account first',
                    disabled: true,
                    options: [],
                };
            }
            const authValue = auth;
            const options = [];
            let hasMore = false;
            let cursor;
            do {
                const qs = {
                    fields: 'verified_name,id,display_phone_number',
                    limit: '1',
                };
                if (cursor)
                    qs['after'] = cursor;
                const response = yield pieces_common_1.httpClient.sendRequest({
                    method: pieces_common_1.HttpMethod.GET,
                    url: `https://graph.facebook.com/v20.0/${authValue.businessAccountId}/phone_numbers`,
                    authentication: {
                        type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                        token: authValue.access_token,
                    },
                    queryParams: qs,
                });
                for (const phoneNumber of response.body.data) {
                    options.push({
                        label: `${phoneNumber.verified_name} : ${phoneNumber.display_phone_number}`,
                        value: phoneNumber.id,
                    });
                }
                if (response.body.paging.next) {
                    (hasMore = true), (cursor = response.body.paging.cursors.after);
                }
                else {
                    hasMore = false;
                }
            } while (hasMore);
            return {
                disabled: false,
                options,
            };
        }),
    }),
    message_template_id: pieces_framework_1.Property.Dropdown({
        displayName: 'Message Template ID',
        refreshers: [],
        required: true,
        options: (_b) => tslib_1.__awaiter(void 0, [_b], void 0, function* ({ auth }) {
            if (!auth) {
                return {
                    placeholder: 'Please connect account first',
                    disabled: true,
                    options: [],
                };
            }
            const authValue = auth;
            const options = [];
            let hasMore = false;
            let cursor;
            do {
                const qs = {
                    fields: 'id,name,language',
                    limit: '1',
                };
                if (cursor)
                    qs['after'] = cursor;
                const response = yield pieces_common_1.httpClient.sendRequest({
                    method: pieces_common_1.HttpMethod.GET,
                    url: `https://graph.facebook.com/v20.0/${authValue.businessAccountId}/message_templates`,
                    authentication: {
                        type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                        token: authValue.access_token,
                    },
                    queryParams: qs,
                });
                for (const template of response.body.data) {
                    options.push({
                        label: `${template.name} (${template.language})`,
                        value: template.id,
                    });
                }
                if (response.body.paging.next) {
                    (hasMore = true), (cursor = response.body.paging.cursors.after);
                }
                else {
                    hasMore = false;
                }
            } while (hasMore);
            return {
                disabled: false,
                options,
            };
        }),
    }),
    message_template_fields: pieces_framework_1.Property.DynamicProperties({
        displayName: 'Template Fields',
        refreshers: ['message_template_id'],
        required: true,
        props: (_c) => tslib_1.__awaiter(void 0, [_c], void 0, function* ({ auth, message_template_id }) {
            var _d, _e, _f, _g, _h, _j;
            if (!auth)
                return {};
            if (!message_template_id)
                return {};
            const authValue = auth;
            const templateId = message_template_id;
            const response = yield pieces_common_1.httpClient.sendRequest({
                url: `https://graph.facebook.com/v20.0/${templateId}`,
                method: pieces_common_1.HttpMethod.GET,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: authValue.access_token,
                },
            });
            const bodyComponentFields = {};
            const headerComponentFields = {};
            const buttonComponentFields = {};
            for (const component of response.body.components) {
                if (component.type === 'BODY') {
                    // https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/components#syntax
                    bodyComponentFields['BODY_markdown'] = pieces_framework_1.Property.MarkDown({
                        value: `
						**Body :**
						${component.text}`,
                    });
                    const bodyTextVariables = (_e = (_d = component.text) === null || _d === void 0 ? void 0 : _d.match(/{{(\d+)}}/g)) !== null && _e !== void 0 ? _e : [];
                    for (let i = 0; i < bodyTextVariables.length; i++) {
                        bodyComponentFields[`body_{{${i + 1}}}`] = pieces_framework_1.Property.ShortText({
                            displayName: `Body {{${i + 1}}}`,
                            required: false,
                        });
                    }
                }
                else if (component.type === 'HEADER' && component.format === 'TEXT') {
                    // https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/components#text-headers
                    headerComponentFields['HEADER_markdown'] = pieces_framework_1.Property.MarkDown({
                        value: `
						**Header :**
						${component.text}`,
                    });
                    const headerTextVariables = (_g = (_f = component.text) === null || _f === void 0 ? void 0 : _f.match(/{{(\d+)}}/g)) !== null && _g !== void 0 ? _g : [];
                    for (let i = 0; i < headerTextVariables.length; i++) {
                        headerComponentFields[`header_{{${i + 1}}}`] = pieces_framework_1.Property.ShortText({
                            displayName: `Header {{${i + 1}}}`,
                            required: false,
                        });
                    }
                }
                else if (component.type === 'BUTTONS') {
                    // https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/components#url-buttons
                    for (const button of component.buttons) {
                        if (button.type === 'URL') {
                            const buttonURLTextVariables = (_j = (_h = button.url) === null || _h === void 0 ? void 0 : _h.match(/{{(\d+)}}/g)) !== null && _j !== void 0 ? _j : [];
                            for (let i = 0; i < buttonURLTextVariables.length; i++) {
                                buttonComponentFields[`button_{{${i + 1}}}`] = pieces_framework_1.Property.ShortText({
                                    displayName: button.text,
                                    required: false,
                                });
                            }
                        }
                    }
                }
            }
            const templateFields = Object.assign(Object.assign(Object.assign({}, headerComponentFields), bodyComponentFields), buttonComponentFields);
            return templateFields;
        }),
    }),
};
//# sourceMappingURL=utils.js.map