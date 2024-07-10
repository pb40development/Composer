"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whatsapp = exports.whatsappAuth = void 0;
const pieces_framework_1 = require("@activepieces/pieces-framework");
const send_message_1 = require("./lib/actions/send-message");
const send_media_1 = require("./lib/actions/send-media");
const send_from_template_1 = require("./lib/actions/send-from-template");
const markdown = `
To Obtain a Phone Number ID and a Permanent System User Access Token, follow these steps:

1. Go to https://developers.facebook.com/
2. Make a new app, Select Other for usecase.
3. Choose Business as the type of app.
4. Add new Product -> WhatsApp.
5. Navigate to WhatsApp Settings > API Setup.
6. Copy the Business Account ID.
7. Login to your [Meta Business Manager](https://business.facebook.com/).
8. Click on Settings.
9. Create a new System User with access over the app and copy the access token.
`;
exports.whatsappAuth = pieces_framework_1.PieceAuth.CustomAuth({
    required: true,
    description: markdown,
    props: {
        access_token: pieces_framework_1.PieceAuth.SecretText({
            displayName: 'System User Access Token',
            description: 'The system user access token of your WhatsApp business account.',
            required: true,
        }),
        businessAccountId: pieces_framework_1.Property.ShortText({
            displayName: 'Business Account ID',
            description: 'The business account ID of your WhatsApp business account.',
            required: true,
        }),
    },
});
exports.whatsapp = (0, pieces_framework_1.createPiece)({
    displayName: 'WhatsApp Business',
    description: 'Manage your WhatsApp business account',
    auth: exports.whatsappAuth,
    minimumSupportedRelease: '0.20.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/whatsapp.png',
    authors: ['LevwTech', 'kishanprmr'],
    actions: [send_message_1.sendMessage, send_media_1.sendMedia, send_from_template_1.sendTemplateMessageAction],
    triggers: [],
});
//# sourceMappingURL=index.js.map