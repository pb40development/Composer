"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webflowFindCollectionItem = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../..");
const props_1 = require("../common/props");
exports.webflowFindCollectionItem = (0, pieces_framework_1.createAction)({
    auth: __1.webflowAuth,
    name: 'find_collection_item',
    description: 'Find collection item in a collection by field',
    displayName: 'Find a Collection Item by Field',
    props: {
        site_id: props_1.webflowProps.site_id,
        collection_id: props_1.webflowProps.collection_id,
        field_name: pieces_framework_1.Property.ShortText({
            displayName: 'Field Name',
            description: 'The name of the field to search by',
            required: true,
        }),
        field_value: pieces_framework_1.Property.ShortText({
            displayName: 'Field Value',
            description: 'The value of the field to search for',
            required: true,
        }),
        max_results: pieces_framework_1.Property.Number({
            displayName: 'Max Results',
            description: 'The maximum number of results to return',
            required: false,
        }),
    },
    run(configValue) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const accessToken = configValue.auth['access_token'];
            const collectionId = configValue.propsValue['collection_id'];
            const fieldName = configValue.propsValue['field_name'];
            const fieldValue = configValue.propsValue['field_value'];
            const maxResults = configValue.propsValue['max_results'];
            const request = {
                method: pieces_common_1.HttpMethod.GET,
                url: `https://api.webflow.com/collections/${collectionId}/items`,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: accessToken,
                },
            };
            try {
                const res = yield pieces_common_1.httpClient.sendRequest(request);
                if (res.status !== 200) {
                    throw new Error('Failed to fetch collection items');
                }
                const items = res.body.items;
                const matches = items
                    .filter((item) => {
                    return item.fields[fieldName] === fieldValue;
                })
                    .slice(0, maxResults);
                return { success: true, result: matches };
            }
            catch (err) {
                return { success: false, message: err };
            }
        });
    },
});
//# sourceMappingURL=find-collection-item.js.map