"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripeNewCustomer = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_framework_2 = require("@activepieces/pieces-framework");
const common_1 = require("../common");
const __1 = require("../..");
exports.stripeNewCustomer = (0, pieces_framework_1.createTrigger)({
    auth: __1.stripeAuth,
    name: 'new_customer',
    displayName: 'New Customer',
    description: 'Triggers when a new customer is created',
    props: {},
    sampleData: {
        id: 'cus_NGtyEf4hNGTj3p',
        object: 'customer',
        address: null,
        balance: 0,
        created: 1675180509,
        currency: null,
        default_currency: null,
        default_source: null,
        delinquent: false,
        description: null,
        discount: null,
        email: 'jane@example.com',
        invoice_prefix: 'B7162248',
        invoice_settings: {
            custom_fields: null,
            default_payment_method: null,
            footer: null,
            rendering_options: null,
        },
        livemode: false,
        metadata: {},
        name: 'John Doe',
        next_invoice_sequence: 1,
        phone: null,
        preferred_locales: [],
        shipping: null,
        tax_exempt: 'none',
        test_clock: null,
    },
    type: pieces_framework_2.TriggerStrategy.WEBHOOK,
    onEnable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const webhook = yield common_1.stripeCommon.subscribeWebhook('customer.created', context.webhookUrl, context.auth);
            yield context.store.put('_new_customer_trigger', {
                webhookId: webhook.id,
            });
        });
    },
    onDisable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            const response = yield ((_a = context.store) === null || _a === void 0 ? void 0 : _a.get('_new_customer_trigger'));
            if (response !== null && response !== undefined) {
                yield common_1.stripeCommon.unsubscribeWebhook(response.webhookId, context.auth);
            }
        });
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const payloadBody = context.payload.body;
            return [payloadBody.data.object];
        });
    },
});
//# sourceMappingURL=new-customer.js.map