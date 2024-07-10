"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webflow = exports.webflowAuth = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@activepieces/pieces-common");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const shared_1 = require("@activepieces/shared");
const create_collection_item_1 = require("./lib/actions/create-collection-item");
const delete_collection_item_1 = require("./lib/actions/delete-collection-item");
const find_collection_item_1 = require("./lib/actions/find-collection-item");
const find_order_1 = require("./lib/actions/find-order");
const fulfill_order_1 = require("./lib/actions/fulfill-order");
const get_collection_item_1 = require("./lib/actions/get-collection-item");
const refund_order_1 = require("./lib/actions/refund-order");
const unfulfill_order_1 = require("./lib/actions/unfulfill-order");
const update_collection_item_1 = require("./lib/actions/update-collection-item");
const new_form_submitted_1 = require("./lib/triggers/new-form-submitted");
exports.webflowAuth = pieces_framework_1.PieceAuth.OAuth2({
    description: '',
    authUrl: 'https://webflow.com/oauth/authorize',
    tokenUrl: 'https://api.webflow.com/oauth/access_token',
    required: true,
    scope: ['webhooks:write', 'forms:read'],
});
exports.webflow = (0, pieces_framework_1.createPiece)({
    displayName: 'Webflow',
    description: 'Design, build, and launch responsive websites visually',
    minimumSupportedRelease: '0.5.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/webflow.png',
    categories: [shared_1.PieceCategory.MARKETING],
    authors: [
        'Ahmad-AbuOsbeh',
        'TaskMagicKyle',
        'kishanprmr',
        'MoShizzle',
        'khaledmashaly',
        'abuaboud',
    ],
    auth: exports.webflowAuth,
    actions: [
        create_collection_item_1.webflowCreateCollectionItemAction,
        delete_collection_item_1.webflowDeleteCollectionItem,
        update_collection_item_1.webflowUpdateCollectionItem,
        find_collection_item_1.webflowFindCollectionItem,
        get_collection_item_1.webflowGetCollectionItem,
        fulfill_order_1.webflowFulfillOrder,
        unfulfill_order_1.webflowUnfulfillOrder,
        refund_order_1.webflowRefundOrder,
        find_order_1.webflowFindOrder,
        (0, pieces_common_1.createCustomApiCallAction)({
            baseUrl: () => 'https://api.webflow.com',
            auth: exports.webflowAuth,
            authMapping: (auth) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return ({
                    Authorization: `Bearer ${auth.access_token}`,
                });
            }),
        }),
    ],
    triggers: [new_form_submitted_1.webflowNewSubmission],
});
//# sourceMappingURL=index.js.map