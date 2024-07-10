"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripeSearchCustomer = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../..");
exports.stripeSearchCustomer = (0, pieces_framework_1.createAction)({
    name: 'search_customer',
    auth: __1.stripeAuth,
    displayName: 'Search Customer',
    description: 'Search for a customer in stripe by email',
    props: {
        email: pieces_framework_1.Property.ShortText({
            displayName: 'Email',
            description: undefined,
            required: true,
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const customer = {
                email: context.propsValue.email,
            };
            const response = yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.GET,
                url: 'https://api.stripe.com/v1/customers/search',
                headers: {
                    Authorization: 'Bearer ' + context.auth,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: {
                    query: 'email:' + "'" + customer.email + "'",
                },
            });
            return response.body;
        });
    },
});
//# sourceMappingURL=search-customer.js.map