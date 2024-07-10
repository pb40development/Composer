"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripeNewSubscription = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_framework_2 = require("@activepieces/pieces-framework");
const common_1 = require("../common");
const __1 = require("../..");
exports.stripeNewSubscription = (0, pieces_framework_1.createTrigger)({
    auth: __1.stripeAuth,
    name: 'new_subscription',
    displayName: 'New Subscription',
    description: 'Triggers when a new subscription is made',
    props: {},
    type: pieces_framework_2.TriggerStrategy.WEBHOOK,
    sampleData: {
        id: 'sub_1MWMJXKZ0dZRqLEKJX80JXfv',
        object: 'subscription',
        application: null,
        application_fee_percent: null,
        automatic_tax: {
            enabled: true,
        },
        billing_cycle_anchor: 1675181047,
        billing_thresholds: null,
        cancel_at: null,
        cancel_at_period_end: false,
        canceled_at: null,
        collection_method: 'charge_automatically',
        created: 1675181047,
        currency: 'usd',
        current_period_end: 1677600247,
        current_period_start: 1675181047,
        customer: 'cus_NGtvUQ18FJXcGI',
        days_until_due: null,
        default_payment_method: 'pm_1MWM8MKZ0dZRqLEKnIH41f76',
        default_source: null,
        default_tax_rates: [],
        description: null,
        discount: null,
        ended_at: null,
        items: {
            object: 'list',
            data: [
                {
                    id: 'si_NGu7pb7hS3Rps3',
                    object: 'subscription_item',
                    billing_thresholds: null,
                    created: 1675181048,
                    metadata: {},
                    plan: {
                        id: 'price_1MWLz3KZ0dZRqLEK06gRMHCF',
                        object: 'plan',
                        active: true,
                        aggregate_usage: null,
                        amount: 10000,
                        amount_decimal: '10000',
                        billing_scheme: 'per_unit',
                        created: 1675179777,
                        currency: 'usd',
                        interval: 'month',
                        interval_count: 1,
                        livemode: false,
                        metadata: {},
                        nickname: null,
                        product: 'prod_NGtm3AlvaGjaLN',
                        tiers_mode: null,
                        transform_usage: null,
                        trial_period_days: null,
                        usage_type: 'licensed',
                    },
                    price: {
                        id: 'price_1MWLz3KZ0dZRqLEK06gRMHCF',
                        object: 'price',
                        active: true,
                        billing_scheme: 'per_unit',
                        created: 1675179777,
                        currency: 'usd',
                        custom_unit_amount: null,
                        livemode: false,
                        lookup_key: null,
                        metadata: {},
                        nickname: null,
                        product: 'prod_NGtm3AlvaGjaLN',
                        recurring: {
                            aggregate_usage: null,
                            interval: 'month',
                            interval_count: 1,
                            trial_period_days: null,
                            usage_type: 'licensed',
                        },
                        tax_behavior: 'exclusive',
                        tiers_mode: null,
                        transform_quantity: null,
                        type: 'recurring',
                        unit_amount: 10000,
                        unit_amount_decimal: '10000',
                    },
                    quantity: 1,
                    subscription: 'sub_1MWMJXKZ0dZRqLEKJX80JXfv',
                    tax_rates: [],
                },
            ],
            has_more: false,
            total_count: 1,
            url: '/v1/subscription_items?subscription=sub_1MWMJXKZ0dZRqLEKJX80JXfv',
        },
        latest_invoice: 'in_1MWMJXKZ0dZRqLEKIu4a51u7',
        livemode: false,
        metadata: {},
        next_pending_invoice_item_invoice: null,
        on_behalf_of: null,
        pause_collection: null,
        payment_settings: {
            payment_method_options: null,
            payment_method_types: null,
            save_default_payment_method: 'off',
        },
        pending_invoice_item_interval: null,
        pending_setup_intent: null,
        pending_update: null,
        plan: {
            id: 'price_1MWLz3KZ0dZRqLEK06gRMHCF',
            object: 'plan',
            active: true,
            aggregate_usage: null,
            amount: 10000,
            amount_decimal: '10000',
            billing_scheme: 'per_unit',
            created: 1675179777,
            currency: 'usd',
            interval: 'month',
            interval_count: 1,
            livemode: false,
            metadata: {},
            nickname: null,
            product: 'prod_NGtm3AlvaGjaLN',
            tiers_mode: null,
            transform_usage: null,
            trial_period_days: null,
            usage_type: 'licensed',
        },
        quantity: 1,
        schedule: null,
        start_date: 1675181047,
        status: 'active',
        test_clock: null,
        transfer_data: null,
        trial_end: null,
        trial_start: null,
    },
    onEnable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            const webhook = yield common_1.stripeCommon.subscribeWebhook('customer.subscription.created', context.webhookUrl, context.auth);
            yield ((_a = context.store) === null || _a === void 0 ? void 0 : _a.put('_new_customer_subscription_trigger', {
                webhookId: webhook.id,
            }));
        });
    },
    onDisable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            const response = yield ((_a = context.store) === null || _a === void 0 ? void 0 : _a.get('_new_customer_subscription_trigger'));
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
//# sourceMappingURL=new-subscription.js.map