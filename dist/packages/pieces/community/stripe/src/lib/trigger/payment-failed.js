"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripePaymentFailed = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_framework_2 = require("@activepieces/pieces-framework");
const common_1 = require("../common");
const __1 = require("../..");
exports.stripePaymentFailed = (0, pieces_framework_1.createTrigger)({
    auth: __1.stripeAuth,
    name: 'payment_failed',
    displayName: 'Payment Failed',
    description: 'Triggers when a payment fails',
    props: {},
    sampleData: {
        id: 'ch_3MWMPQKZ0dZRqLEK063rxD7q',
        object: 'charge',
        amount: 100000,
        amount_captured: 0,
        amount_refunded: 0,
        application: null,
        application_fee: null,
        application_fee_amount: null,
        balance_transaction: null,
        billing_details: {
            address: {
                city: null,
                country: null,
                line1: null,
                line2: null,
                postal_code: '12321',
                state: null,
            },
            email: null,
            name: null,
            phone: null,
        },
        calculated_statement_descriptor: 'WWW.ACTIVEPIECES.COM',
        captured: false,
        created: 1675181413,
        currency: 'usd',
        customer: 'cus_NGtvUQ18FJXcGI',
        description: 'Failed Payment',
        destination: null,
        dispute: null,
        disputed: false,
        failure_balance_transaction: null,
        failure_code: 'card_declined',
        failure_message: 'Your card was declined.',
        fraud_details: {},
        invoice: null,
        livemode: false,
        metadata: {},
        on_behalf_of: null,
        order: null,
        outcome: {
            network_status: 'declined_by_network',
            reason: 'generic_decline',
            risk_level: 'normal',
            risk_score: 60,
            seller_message: 'The bank did not return any further details with this decline.',
            type: 'issuer_declined',
        },
        paid: false,
        payment_intent: 'pi_3MWMPQKZ0dZRqLEK0Nsc6WhL',
        payment_method: 'src_1MWMPQKZ0dZRqLEKuQ83wmZI',
        payment_method_details: {
            card: {
                brand: 'visa',
                checks: {
                    address_line1_check: null,
                    address_postal_code_check: 'pass',
                    cvc_check: 'pass',
                },
                country: 'US',
                exp_month: 12,
                exp_year: 2031,
                fingerprint: 'mtYxM2Q4edpEt8Pw',
                funding: 'credit',
                installments: null,
                last4: '0341',
                mandate: null,
                network: 'visa',
                three_d_secure: null,
                wallet: null,
            },
            type: 'card',
        },
        receipt_email: null,
        receipt_number: null,
        receipt_url: null,
        refunded: false,
        refunds: {
            object: 'list',
            data: [],
            has_more: false,
            total_count: 0,
            url: '/v1/charges/ch_3MWMPQKZ0dZRqLEK063rxD7q/refunds',
        },
        review: null,
        shipping: null,
        source: {
            id: 'src_1MWMPQKZ0dZRqLEKuQ83wmZI',
            object: 'source',
            amount: null,
            card: {
                exp_month: 12,
                exp_year: 2031,
                last4: '0341',
                country: 'US',
                brand: 'Visa',
                address_zip_check: 'pass',
                cvc_check: 'pass',
                funding: 'credit',
                fingerprint: 'mtYxM2Q4edpEt8Pw',
                three_d_secure: 'optional',
                name: null,
                address_line1_check: null,
                tokenization_method: null,
                dynamic_last4: null,
            },
            client_secret: 'src_client_secret_TlLkl6IvhCvmbx8Cz12YNDVb',
            created: 1675181413,
            currency: null,
            flow: 'none',
            livemode: false,
            metadata: {},
            owner: {
                address: {
                    city: null,
                    country: null,
                    line1: null,
                    line2: null,
                    postal_code: '12321',
                    state: null,
                },
                email: null,
                name: null,
                phone: null,
                verified_address: null,
                verified_email: null,
                verified_name: null,
                verified_phone: null,
            },
            statement_descriptor: null,
            status: 'chargeable',
            type: 'card',
            usage: 'reusable',
        },
        source_transfer: null,
        statement_descriptor: 'www.activepieces.com',
        statement_descriptor_suffix: null,
        status: 'failed',
        transfer_data: null,
        transfer_group: null,
    },
    type: pieces_framework_2.TriggerStrategy.WEBHOOK,
    onEnable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            const webhook = yield common_1.stripeCommon.subscribeWebhook('charge.failed', context.webhookUrl, context.auth);
            yield ((_a = context.store) === null || _a === void 0 ? void 0 : _a.put('_payment_failed_trigger', {
                webhookId: webhook.id,
            }));
        });
    },
    onDisable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            const response = yield ((_a = context.store) === null || _a === void 0 ? void 0 : _a.get('_payment_failed_trigger'));
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
//# sourceMappingURL=payment-failed.js.map