"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facebookLeads = exports.facebookLeadsAuth = void 0;
const pieces_framework_1 = require("@activepieces/pieces-framework");
const shared_1 = require("@activepieces/shared");
const new_lead_1 = require("./lib/triggers/new-lead");
exports.facebookLeadsAuth = pieces_framework_1.PieceAuth.OAuth2({
    description: '',
    authUrl: 'https://graph.facebook.com/oauth/authorize',
    tokenUrl: 'https://graph.facebook.com/oauth/access_token',
    required: true,
    scope: [
        'pages_show_list',
        'pages_manage_ads',
        'leads_retrieval',
        'pages_manage_metadata',
    ],
});
exports.facebookLeads = (0, pieces_framework_1.createPiece)({
    displayName: 'Facebook Leads',
    description: 'Capture leads from Facebook',
    minimumSupportedRelease: '0.5.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/facebook.png',
    authors: ["kishanprmr", "MoShizzle", "khaledmashaly", "abuaboud"],
    categories: [shared_1.PieceCategory.MARKETING],
    auth: exports.facebookLeadsAuth,
    actions: [],
    triggers: [new_lead_1.newLead],
    events: {
        parseAndReply: (context) => {
            const payload = context.payload;
            const payloadBody = payload.body;
            if (payload.queryParams['hub.verify_token'] == 'activepieces') {
                return {
                    reply: {
                        body: payload.queryParams['hub.challenge'],
                        headers: {},
                    },
                };
            }
            return {
                event: 'lead',
                identifierValue: payloadBody.entry[0].changes[0].value.page_id,
            };
        },
        verify: () => {
            // TODO IMPLEMENT VALIDATION AFTER APP VERIFICATION
            return true;
        },
    },
});
//# sourceMappingURL=index.js.map