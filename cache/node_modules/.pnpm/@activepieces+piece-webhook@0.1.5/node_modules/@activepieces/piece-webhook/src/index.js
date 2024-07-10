"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook = void 0;
const pieces_framework_1 = require("@activepieces/pieces-framework");
const catch_hook_1 = require("./lib/triggers/catch-hook");
const shared_1 = require("@activepieces/shared");
exports.webhook = (0, pieces_framework_1.createPiece)({
    displayName: 'Webhook',
    description: 'Receive HTTP requests and trigger flows using unique URLs.',
    auth: pieces_framework_1.PieceAuth.None(),
    categories: [shared_1.PieceCategory.CORE],
    minimumSupportedRelease: '0.27.1',
    logoUrl: 'https://cdn.activepieces.com/pieces/webhook.svg',
    authors: ['abuaboud', 'pfernandez98'],
    actions: [],
    triggers: [catch_hook_1.catchWebhook],
});
//# sourceMappingURL=index.js.map