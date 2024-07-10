"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resend = exports.resendAuth = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@activepieces/pieces-common");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const shared_1 = require("@activepieces/shared");
const send_email_1 = require("./lib/actions/send-email");
exports.resendAuth = pieces_framework_1.PieceAuth.SecretText({
    displayName: 'API Key',
    required: true,
});
exports.resend = (0, pieces_framework_1.createPiece)({
    displayName: 'Resend',
    description: 'Email for developers',
    minimumSupportedRelease: '0.5.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/resend.png',
    categories: [shared_1.PieceCategory.BUSINESS_INTELLIGENCE, shared_1.PieceCategory.MARKETING],
    authors: ["kishanprmr", "MoShizzle", "khaledmashaly", "abuaboud"],
    auth: exports.resendAuth,
    actions: [
        send_email_1.sendEmail,
        (0, pieces_common_1.createCustomApiCallAction)({
            baseUrl: () => 'https://api.resend.com',
            auth: exports.resendAuth,
            authMapping: (auth) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return ({
                    Authorization: `Bearer ${auth}`,
                });
            }),
        }),
    ],
    triggers: [],
});
//# sourceMappingURL=index.js.map