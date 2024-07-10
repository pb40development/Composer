"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripeCreateCustomer = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../..");
exports.stripeCreateCustomer = (0, pieces_framework_1.createAction)({
    name: 'create_customer',
    auth: __1.stripeAuth,
    displayName: 'Create Customer',
    description: 'Create a customer in stripe',
    props: {
        email: pieces_framework_1.Property.ShortText({
            displayName: 'Email',
            description: undefined,
            required: true,
        }),
        name: pieces_framework_1.Property.ShortText({
            displayName: 'Name',
            required: true,
        }),
        description: pieces_framework_1.Property.LongText({
            displayName: 'Description',
            required: false,
        }),
        phone: pieces_framework_1.Property.ShortText({
            displayName: 'Phone',
            required: false,
        }),
        line1: pieces_framework_1.Property.ShortText({
            displayName: 'Address Line 1',
            required: false,
        }),
        postal_code: pieces_framework_1.Property.ShortText({
            displayName: 'Postal Code',
            required: false,
        }),
        city: pieces_framework_1.Property.ShortText({
            displayName: 'City',
            required: false,
        }),
        state: pieces_framework_1.Property.ShortText({
            displayName: 'State',
            required: false,
        }),
        country: pieces_framework_1.Property.ShortText({
            displayName: 'Country',
            required: false,
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const customer = {
                email: context.propsValue.email,
                name: context.propsValue.name,
                description: context.propsValue.description,
                phone: context.propsValue.phone,
                address: {
                    line1: context.propsValue.line1,
                    postal_code: context.propsValue.postal_code,
                    city: context.propsValue.city,
                    state: context.propsValue.state,
                    country: context.propsValue.country,
                },
            };
            const response = yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.POST,
                url: 'https://api.stripe.com/v1/customers',
                headers: {
                    Authorization: 'Bearer ' + context.auth,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: {
                    email: customer.email,
                    name: customer.name,
                    description: customer.description,
                    phone: customer.phone,
                    address: customer.address,
                },
            });
            return response.body;
        });
    },
});
//# sourceMappingURL=create-customer.js.map