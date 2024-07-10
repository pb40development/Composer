"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smtp = exports.smtpAuth = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const shared_1 = require("@activepieces/shared");
const send_email_1 = require("./lib/actions/send-email");
const common_1 = require("./lib/common");
const SMTPPorts = [25, 465, 587, 2525];
exports.smtpAuth = pieces_framework_1.PieceAuth.CustomAuth({
    required: true,
    props: {
        host: pieces_framework_1.Property.ShortText({
            displayName: 'Host',
            required: true,
        }),
        email: pieces_framework_1.Property.ShortText({
            displayName: 'Email',
            required: true,
        }),
        password: pieces_framework_1.PieceAuth.SecretText({
            displayName: 'Password',
            required: true,
        }),
        port: pieces_framework_1.Property.StaticDropdown({
            displayName: 'Port',
            required: true,
            options: {
                disabled: false,
                options: SMTPPorts.map((port) => {
                    return {
                        label: port.toString(),
                        value: port,
                    };
                }),
            },
        }),
        TLS: pieces_framework_1.Property.Checkbox({
            displayName: 'Require TLS?',
            defaultValue: false,
            required: true,
        }),
    },
    validate: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ auth }) {
        try {
            const transporter = common_1.smtpCommon.createSMTPTransport(auth);
            return new Promise((resolve, reject) => {
                transporter.verify(function (error, success) {
                    if (error) {
                        resolve({ valid: false, error: JSON.stringify(error) });
                    }
                    else {
                        resolve({ valid: true });
                    }
                });
            });
        }
        catch (e) {
            const castedError = e;
            const code = castedError === null || castedError === void 0 ? void 0 : castedError['code'];
            switch (code) {
                case 'EDNS':
                    return {
                        valid: false,
                        error: 'SMTP server not found or unreachable with error code: EDNS',
                    };
                case 'CONN':
                    return {
                        valid: false,
                        error: 'SMTP server connection failed with error code: CONN',
                    };
                default:
                    break;
            }
            return {
                valid: false,
                error: JSON.stringify(e),
            };
        }
    }),
});
exports.smtp = (0, pieces_framework_1.createPiece)({
    displayName: 'SMTP',
    description: 'Send emails using Simple Mail Transfer Protocol',
    minimumSupportedRelease: '0.5.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/smtp.png',
    categories: [shared_1.PieceCategory.CORE],
    authors: [
        'tahboubali',
        'abaza738',
        'kishanprmr',
        'MoShizzle',
        'khaledmashaly',
        'abuaboud',
        'pfernandez98'
    ],
    auth: exports.smtpAuth,
    actions: [send_email_1.sendEmail],
    triggers: [],
});
//# sourceMappingURL=index.js.map