"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripeNewPayment = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_framework_2 = require("@activepieces/pieces-framework");
const common_1 = require("../common");
const __1 = require("../..");
exports.stripeNewPayment = (0, pieces_framework_1.createTrigger)({
    auth: __1.stripeAuth,
    name: 'new_payment',
    displayName: 'New Payment',
    description: 'Triggers when a new payment is made',
    props: {},
    type: pieces_framework_2.TriggerStrategy.WEBHOOK,
    sampleData: {
        id: 'ch_3MWM7aKZ0dZRqLEK1soCKVrq',
        object: 'charge',
        amount: 10000,
        amount_captured: 10000,
        amount_refunded: 0,
        application: null,
        application_fee: null,
        application_fee_amount: null,
        balance_transaction: 'txn_3MWM7aKZ0dZRqLEK1VyE8QH1',
        billing_details: {
            address: {
                city: null,
                country: 'DE',
                line1: null,
                line2: null,
                postal_code: null,
                state: null,
            },
            email: 'test@gmail.com',
            name: 'Test user',
            phone: null,
        },
        calculated_statement_descriptor: 'WWW.ACTIVEPIECES.COM',
        captured: true,
        created: 1675180355,
        currency: 'usd',
        customer: 'cus_NGtvUQ18FJXcGI',
        description: 'Subscription creation',
        destination: null,
        dispute: null,
        disputed: false,
        failure_balance_transaction: null,
        failure_code: null,
        failure_message: null,
        fraud_details: {},
        invoice: 'in_1MWM7ZKZ0dZRqLEKQbrgSBnh',
        livemode: false,
        metadata: {},
        on_behalf_of: null,
        order: null,
        outcome: {
            network_status: 'approved_by_network',
            reason: null,
            risk_level: 'normal',
            risk_score: 64,
            seller_message: 'Payment complete.',
            type: 'authorized',
        },
        paid: true,
        payment_intent: 'pi_3MWM7aKZ0dZRqLEK1BsblcVI',
        payment_method: 'pm_1MWM8MKZ0dZRqLEKnIH41f76',
        payment_method_details: {
            card: {
                brand: 'visa',
                checks: {
                    address_line1_check: null,
                    address_postal_code_check: null,
                    cvc_check: 'pass',
                },
                country: 'US',
                exp_month: 12,
                exp_year: 2034,
                fingerprint: 't8SMsmS4h2vvODpN',
                funding: 'credit',
                installments: null,
                last4: '4242',
                mandate: null,
                network: 'visa',
                three_d_secure: null,
                wallet: null,
            },
            type: 'card',
        },
        receipt_email: null,
        receipt_number: null,
        receipt_url: 'https://pay.stripe.com/receipts/invoices/CAcaFwoVYWNjdF8xS214ZEtLWjBkWlJxTEVLKMXy5J4GMgZcuppYWF06LBZEoiAhZ6H7EoJ3bN-BMHCXdaW-_i-ywhSIG9wPGTmtE0CdpD75s1hIyprK?s=ap',
        refunded: false,
        refunds: {
            object: 'list',
            data: [],
            has_more: false,
            total_count: 0,
            url: '/v1/charges/ch_3MWM7aKZ0dZRqLEK1soCKVrq/refunds',
        },
        review: null,
        shipping: null,
        source: null,
        source_transfer: null,
        statement_descriptor: null,
        statement_descriptor_suffix: null,
        status: 'succeeded',
        transfer_data: null,
        transfer_group: null,
    },
    onEnable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            const webhook = yield common_1.stripeCommon.subscribeWebhook('charge.succeeded', context.webhookUrl, context.auth);
            yield ((_a = context.store) === null || _a === void 0 ? void 0 : _a.put('_new_payment_trigger', {
                webhookId: webhook.id,
            }));
        });
    },
    onDisable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            const response = yield ((_a = context.store) === null || _a === void 0 ? void 0 : _a.get('_new_payment_trigger'));
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
//# sourceMappingURL=new-payment.js.map