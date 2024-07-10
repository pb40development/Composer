"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripeCreateInvoice = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../..");
exports.stripeCreateInvoice = (0, pieces_framework_1.createAction)({
    name: 'create_invoice',
    auth: __1.stripeAuth,
    displayName: 'Create Invoice',
    description: 'Create an Invoice in stripe',
    props: {
        customer_id: pieces_framework_1.Property.ShortText({
            displayName: 'Customer ID',
            description: 'Stripe Customer ID',
            required: true,
        }),
        currency: pieces_framework_1.Property.ShortText({
            displayName: 'Currency',
            description: 'Currency for the invoice (e.g., USD)',
            required: true,
        }),
        description: pieces_framework_1.Property.LongText({
            displayName: 'Description',
            description: 'Description for the invoice',
            required: false,
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const invoice = {
                customer: context.propsValue.customer_id,
                currency: context.propsValue.currency,
                description: context.propsValue.description,
            };
            const response = yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.POST,
                url: 'https://api.stripe.com/v1/invoices',
                headers: {
                    Authorization: 'Bearer ' + context.auth,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: {
                    customer: invoice.customer,
                    currency: invoice.currency,
                    description: invoice.description,
                },
            });
            return response.body;
        });
    },
});
//# sourceMappingURL=create-invoice.js.map