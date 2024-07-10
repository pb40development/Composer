"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripe = exports.stripeAuth = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@activepieces/pieces-common");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const shared_1 = require("@activepieces/shared");
const create_customer_1 = require("./lib/actions/create-customer");
const create_invoice_1 = require("./lib/actions/create-invoice");
const retrieve_customer_1 = require("./lib/actions/retrieve-customer");
const search_customer_1 = require("./lib/actions/search-customer");
const new_customer_1 = require("./lib/trigger/new-customer");
const new_payment_1 = require("./lib/trigger/new-payment");
const new_subscription_1 = require("./lib/trigger/new-subscription");
const payment_failed_1 = require("./lib/trigger/payment-failed");
exports.stripeAuth = pieces_framework_1.PieceAuth.SecretText({
    displayName: 'Secret API Key',
    required: true,
    description: 'Secret key acquired from your Stripe dashboard',
});
exports.stripe = (0, pieces_framework_1.createPiece)({
    displayName: 'Stripe',
    description: 'Online payment processing for internet businesses',
    minimumSupportedRelease: '0.5.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/stripe.png',
    authors: ["lldiegon", "doskyft", "kishanprmr", "MoShizzle", "AbdulTheActivePiecer", "khaledmashaly", "abuaboud"],
    categories: [shared_1.PieceCategory.COMMERCE, shared_1.PieceCategory.PAYMENT_PROCESSING],
    auth: exports.stripeAuth,
    actions: [
        create_customer_1.stripeCreateCustomer,
        create_invoice_1.stripeCreateInvoice,
        search_customer_1.stripeSearchCustomer,
        retrieve_customer_1.stripeRetrieveCustomer,
        (0, pieces_common_1.createCustomApiCallAction)({
            baseUrl: () => 'https://api.stripe.com/v1',
            auth: exports.stripeAuth,
            authMapping: (auth) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return ({
                    Authorization: `Bearer ${auth}`,
                });
            }),
        }),
    ],
    triggers: [
        new_payment_1.stripeNewPayment,
        new_customer_1.stripeNewCustomer,
        payment_failed_1.stripePaymentFailed,
        new_subscription_1.stripeNewSubscription,
    ],
});
//# sourceMappingURL=index.js.map