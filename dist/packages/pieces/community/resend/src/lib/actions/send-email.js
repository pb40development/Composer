"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../..");
exports.sendEmail = (0, pieces_framework_1.createAction)({
    auth: __1.resendAuth,
    name: 'send_email',
    displayName: 'Send Email',
    description: 'Send a text or HTML email',
    props: {
        to: pieces_framework_1.Property.Array({
            displayName: 'To',
            description: 'Emails of the recipients',
            required: true,
        }),
        from_name: pieces_framework_1.Property.ShortText({
            displayName: 'Sender Name',
            description: 'Sender name',
            required: true,
        }),
        from: pieces_framework_1.Property.ShortText({
            displayName: 'Sender Email (From)',
            description: 'Sender email',
            required: true,
        }),
        bcc: pieces_framework_1.Property.Array({
            displayName: 'BCC',
            description: 'List of emails in bcc',
            required: false,
        }),
        cc: pieces_framework_1.Property.Array({
            displayName: 'CC',
            description: 'List of emails in cc',
            required: false,
        }),
        reply_to: pieces_framework_1.Property.ShortText({
            displayName: 'Reply To',
            description: 'Email to receive replies on (defaults to sender)',
            required: false,
        }),
        subject: pieces_framework_1.Property.ShortText({
            displayName: 'Subject',
            description: undefined,
            required: true,
        }),
        content_type: pieces_framework_1.Property.Dropdown({
            displayName: 'Content Type',
            refreshers: [],
            required: true,
            defaultValue: 'html',
            options: () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return {
                    disabled: false,
                    options: [
                        { label: 'Plain Text', value: 'text' },
                        { label: 'HTML', value: 'html' },
                    ],
                };
            }),
        }),
        content: pieces_framework_1.Property.ShortText({
            displayName: 'Content',
            description: 'HTML is only allowed if you selected HTML as type',
            required: true,
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { to, from, from_name, reply_to, subject, content_type, content, cc, bcc, } = context.propsValue;
            const requestBody = {
                to,
                from: from_name ? `${from_name} <${from}>` : from,
                reply_to: reply_to !== null && reply_to !== void 0 ? reply_to : from,
                cc,
                bcc,
                subject: subject,
            };
            if (content_type === 'text') {
                requestBody['text'] = content;
            }
            else if (content_type === 'html') {
                requestBody['html'] = content;
            }
            return yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.POST,
                url: `https://api.resend.com/emails`,
                body: requestBody,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: context.auth,
                },
                queryParams: {},
            });
        });
    },
});
//# sourceMappingURL=send-email.js.map