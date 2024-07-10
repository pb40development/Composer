"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const __1 = require("../..");
const common_1 = require("../common");
const mime_types_1 = tslib_1.__importDefault(require("mime-types"));
exports.sendEmail = (0, pieces_framework_1.createAction)({
    auth: __1.smtpAuth,
    name: 'send-email',
    displayName: 'Send Email',
    description: 'Send an email using a custom SMTP server.',
    props: {
        from: pieces_framework_1.Property.ShortText({
            displayName: 'From Email',
            required: true,
        }),
        senderName: pieces_framework_1.Property.ShortText({
            displayName: "Sender Name",
            required: false,
        }),
        to: pieces_framework_1.Property.Array({
            displayName: 'To',
            required: true,
        }),
        cc: pieces_framework_1.Property.Array({
            displayName: 'CC',
            required: false,
        }),
        replyTo: pieces_framework_1.Property.ShortText({
            displayName: 'Reply To',
            required: false,
        }),
        bcc: pieces_framework_1.Property.Array({
            displayName: 'BCC',
            required: false,
        }),
        subject: pieces_framework_1.Property.ShortText({
            displayName: 'Subject',
            required: true,
        }),
        body_type: pieces_framework_1.Property.StaticDropdown({
            displayName: 'Body Type',
            required: true,
            defaultValue: 'plain_text',
            options: {
                disabled: false,
                options: [
                    {
                        label: 'plain text',
                        value: 'plain_text',
                    },
                    {
                        label: 'html',
                        value: 'html',
                    },
                ],
            },
        }),
        body: pieces_framework_1.Property.LongText({
            displayName: 'Body',
            required: true,
        }),
        customHeaders: pieces_framework_1.Property.Object({
            displayName: 'Custom Headers',
            required: false,
        }),
        attachment: pieces_framework_1.Property.File({
            displayName: 'Attachment',
            description: 'File to attach to the email you want to send',
            required: false,
        }),
        attachment_name: pieces_framework_1.Property.ShortText({
            displayName: 'Attachment Name',
            description: 'In case you want to change the name of the attachment',
            required: false,
        }),
    },
    run: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ auth, propsValue }) {
        var _b, _c, _d;
        const transporter = common_1.smtpCommon.createSMTPTransport(auth);
        const attachment = propsValue['attachment'];
        let attachment_data = [];
        if (attachment) {
            const lookupResult = mime_types_1.default.lookup(attachment.extension ? attachment.extension : '');
            const attachmentOption = [
                {
                    filename: (_b = propsValue.attachment_name) !== null && _b !== void 0 ? _b : attachment.filename,
                    content: attachment === null || attachment === void 0 ? void 0 : attachment.base64,
                    contentType: lookupResult ? lookupResult : undefined,
                    encoding: 'base64',
                },
            ];
            attachment_data = attachmentOption;
        }
        const info = yield transporter.sendMail({
            from: getFrom(propsValue.senderName, propsValue.from),
            to: propsValue.to.join(','),
            cc: (_c = propsValue.cc) === null || _c === void 0 ? void 0 : _c.join(','),
            inReplyTo: propsValue.replyTo,
            bcc: (_d = propsValue.bcc) === null || _d === void 0 ? void 0 : _d.join(','),
            subject: propsValue.subject,
            text: propsValue.body_type === 'plain_text' ? propsValue.body : undefined,
            html: propsValue.body_type === 'html' ? propsValue.body : undefined,
            attachments: attachment ? attachment_data : undefined,
            headers: propsValue.customHeaders,
        });
        return info;
    }),
});
function getFrom(senderName, from) {
    if (senderName) {
        return `"${senderName}" <${from}>`;
    }
    return from;
}
//# sourceMappingURL=send-email.js.map