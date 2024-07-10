"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webflowFindOrder = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const __1 = require("../..");
const props_1 = require("../common/props");
const client_1 = require("../common/client");
exports.webflowFindOrder = (0, pieces_framework_1.createAction)({
    auth: __1.webflowAuth,
    name: 'find_order',
    description: 'Find order',
    displayName: 'Find an order',
    props: {
        site_id: props_1.webflowProps.site_id,
        order_id: props_1.webflowProps.order_id,
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orderId = context.propsValue.order_id;
            const siteId = context.propsValue.site_id;
            const client = new client_1.WebflowApiClient(context.auth.access_token);
            return yield client.getOrder(siteId, orderId);
        });
    },
});
//# sourceMappingURL=find-order.js.map