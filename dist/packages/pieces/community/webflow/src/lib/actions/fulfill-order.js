"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webflowFulfillOrder = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const __1 = require("../..");
const props_1 = require("../common/props");
const client_1 = require("../common/client");
exports.webflowFulfillOrder = (0, pieces_framework_1.createAction)({
    auth: __1.webflowAuth,
    name: 'fulfill_order',
    description: 'Fulfill order',
    displayName: 'Fulfill an order',
    props: {
        site_id: props_1.webflowProps.site_id,
        order_id: props_1.webflowProps.order_id,
        send_order_fulfilled_email: pieces_framework_1.Property.Checkbox({
            displayName: 'Send Order Fulfilled Email',
            description: 'Send an email to the customer that their order has been fulfilled',
            required: false,
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orderId = context.propsValue.order_id;
            const siteId = context.propsValue.site_id;
            const sendOrderFulfilledEmail = context.propsValue.send_order_fulfilled_email;
            const client = new client_1.WebflowApiClient(context.auth.access_token);
            return yield client.fulfillOrder(siteId, orderId, { sendOrderFulfilledEmail });
        });
    },
});
//# sourceMappingURL=fulfill-order.js.map