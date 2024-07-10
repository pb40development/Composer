"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripeRetrieveCustomer = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../..");
exports.stripeRetrieveCustomer = (0, pieces_framework_1.createAction)({
    name: 'retrieve_customer',
    auth: __1.stripeAuth,
    displayName: 'Retrieve Customer',
    description: 'Retrieve a customer in stripe by id',
    props: {
        id: pieces_framework_1.Property.ShortText({
            displayName: 'ID',
            description: undefined,
            required: true,
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const customer = {
                id: context.propsValue.id,
            };
            const response = yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.GET,
                url: `https://api.stripe.com/v1/customers/${customer.id}`,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: context.auth,
                },
            });
            return response.body;
        });
    },
});
//# sourceMappingURL=retrieve-customer.js.map