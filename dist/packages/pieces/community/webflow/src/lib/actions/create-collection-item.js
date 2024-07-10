"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webflowCreateCollectionItemAction = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const __1 = require("../..");
const props_1 = require("../common/props");
const client_1 = require("../common/client");
exports.webflowCreateCollectionItemAction = (0, pieces_framework_1.createAction)({
    auth: __1.webflowAuth,
    name: 'create_collection_item',
    displayName: 'Create Collection Item',
    description: 'Creates new collection item.',
    props: {
        site_id: props_1.webflowProps.site_id,
        collection_id: props_1.webflowProps.collection_id,
        collection_fields: props_1.webflowProps.collection_fields,
        is_archived: pieces_framework_1.Property.Checkbox({
            displayName: 'Is Archived',
            description: 'Whether the item is archived or not',
            required: false,
        }),
        is_draft: pieces_framework_1.Property.Checkbox({
            displayName: 'Is Draft',
            description: 'Whether the item is a draft or not',
            required: false,
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const collectionId = context.propsValue.collection_id;
            const isArchived = context.propsValue.is_archived;
            const isDraft = context.propsValue.is_draft;
            const collectionInputFields = context.propsValue.collection_fields;
            const client = new client_1.WebflowApiClient(context.auth.access_token);
            const { fields: CollectionFields } = yield client.getCollection(collectionId);
            const formattedCollectionFields = {};
            for (const field of CollectionFields) {
                const fieldValue = collectionInputFields[field.slug];
                if (fieldValue !== undefined && fieldValue !== '') {
                    switch (field.type) {
                        case 'ImageRef':
                        case 'FileRef':
                            formattedCollectionFields[field.slug] = { url: fieldValue };
                            break;
                        case 'Set':
                            formattedCollectionFields[field.slug] = fieldValue.map((url) => ({ url: url }));
                            break;
                        case 'Number':
                            formattedCollectionFields[field.slug] = Number(fieldValue);
                            break;
                        default:
                            formattedCollectionFields[field.slug] = fieldValue;
                    }
                }
            }
            return yield client.createCollectionItem(collectionId, {
                fields: Object.assign(Object.assign({}, formattedCollectionFields), { _archived: isArchived, _draft: isDraft }),
            });
        });
    },
});
//# sourceMappingURL=create-collection-item.js.map