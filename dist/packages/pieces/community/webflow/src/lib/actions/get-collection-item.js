"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webflowGetCollectionItem = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const __1 = require("../..");
const props_1 = require("../common/props");
const client_1 = require("../common/client");
exports.webflowGetCollectionItem = (0, pieces_framework_1.createAction)({
    auth: __1.webflowAuth,
    name: 'get_collection_item',
    description: 'Get collection item in a collection by ID',
    displayName: 'Get a Collection Item by ID',
    props: {
        site_id: props_1.webflowProps.site_id,
        collection_id: props_1.webflowProps.collection_id,
        collection_item_id: props_1.webflowProps.collection_item_id,
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const collectionId = context.propsValue.collection_id;
            const collectionItemId = context.propsValue.collection_item_id;
            const client = new client_1.WebflowApiClient(context.auth.access_token);
            return yield client.getCollectionItem(collectionId, collectionItemId);
        });
    },
});
//# sourceMappingURL=get-collection-item.js.map