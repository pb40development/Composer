"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webflowProps = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const client_1 = require("./client");
exports.webflowProps = {
    site_id: pieces_framework_1.Property.Dropdown({
        displayName: 'Site',
        required: true,
        refreshers: [],
        options: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ auth }) {
            if (!auth) {
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'Please connect account first.',
                };
            }
            const authValue = auth;
            const client = new client_1.WebflowApiClient(authValue.access_token);
            const sites = yield client.listSites();
            const options = [];
            for (const site of sites) {
                options.push({ label: site.name, value: site._id });
            }
            return {
                disabled: false,
                options,
            };
        }),
    }),
    collection_id: pieces_framework_1.Property.Dropdown({
        displayName: 'Collection',
        required: true,
        refreshers: ['site_id'],
        options: (_b) => tslib_1.__awaiter(void 0, [_b], void 0, function* ({ auth, site_id }) {
            if (!auth || !site_id) {
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'Please connect account first.',
                };
            }
            const authValue = auth;
            const client = new client_1.WebflowApiClient(authValue.access_token);
            const collections = yield client.listCollections(site_id);
            const options = [];
            for (const collection of collections) {
                options.push({ label: collection.name, value: collection._id });
            }
            return {
                disabled: false,
                options,
            };
        }),
    }),
    collection_fields: pieces_framework_1.Property.DynamicProperties({
        displayName: 'Collection Fields',
        required: true,
        refreshers: ['collection_id'],
        props: (_c) => tslib_1.__awaiter(void 0, [_c], void 0, function* ({ auth, collection_id }) {
            if (!auth)
                return {};
            if (!collection_id)
                return {};
            const collectionFields = {};
            const authValue = auth;
            const client = new client_1.WebflowApiClient(authValue.access_token);
            const { fields } = yield client.getCollection(collection_id);
            for (const field of fields) {
                if (field.editable && field.slug !== '_archived' && field.slug !== '_draft') {
                    switch (field.type) {
                        case 'Option':
                            collectionFields[field.slug] = pieces_framework_1.Property.StaticDropdown({
                                displayName: field.name,
                                required: field.required,
                                options: {
                                    disabled: false,
                                    options: field.validations.options.map((option) => {
                                        return {
                                            label: option.name,
                                            value: option.name,
                                        };
                                    }),
                                },
                            });
                            break;
                        case 'RichText':
                        case 'Email':
                        case 'PlainText':
                        case 'Phone':
                        case 'Link':
                        case 'Video':
                        case 'Color':
                        case 'ItemRef':
                        case 'FileRef':
                            collectionFields[field.slug] = pieces_framework_1.Property.ShortText({
                                displayName: field.name,
                                required: field.required,
                            });
                            break;
                        case 'ImageRef':
                            collectionFields[field.slug] = pieces_framework_1.Property.ShortText({
                                displayName: field.name,
                                required: field.required,
                                description: 'Images must be hosted on a publicly accessible URL to be uploaded via the API.The maximum file size for images is 4MB.',
                            });
                            break;
                        case 'Set':
                            collectionFields[field.slug] = pieces_framework_1.Property.Array({
                                displayName: field.name,
                                required: field.required,
                                description: ' Images must be hosted on a publicly accessible URL to be uploaded via the API.The maximum file size for images is 4MB.',
                            });
                            break;
                        case 'ItemRefSet':
                            collectionFields[field.slug] = pieces_framework_1.Property.Array({
                                displayName: field.name,
                                required: field.required,
                            });
                            break;
                        case 'Number':
                            collectionFields[field.slug] = pieces_framework_1.Property.Number({
                                displayName: field.name,
                                required: field.required,
                            });
                            break;
                        case 'Date':
                            collectionFields[field.slug] = pieces_framework_1.Property.DateTime({
                                displayName: field.name,
                                required: field.required,
                            });
                            break;
                        case 'Bool':
                            collectionFields[field.slug] = pieces_framework_1.Property.Checkbox({
                                displayName: field.name,
                                required: false,
                            });
                            break;
                    }
                }
            }
            return collectionFields;
        }),
    }),
    collection_item_id: pieces_framework_1.Property.Dropdown({
        displayName: 'Collection Item',
        required: true,
        refreshers: ['collection_id'],
        options: (_d) => tslib_1.__awaiter(void 0, [_d], void 0, function* ({ auth, collection_id }) {
            if (!auth || !collection_id) {
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'Please connect account first.',
                };
            }
            const authValue = auth;
            const client = new client_1.WebflowApiClient(authValue.access_token);
            const options = [];
            let page = 0;
            let response;
            do {
                response = yield client.listCollectionItems(collection_id, page, 100);
                page += 100;
                for (const item of response.items) {
                    options.push({ label: item.name, value: item._id });
                }
            } while (response.items.length > 0);
            return {
                disabled: false,
                options,
            };
        }),
    }),
    order_id: pieces_framework_1.Property.Dropdown({
        displayName: 'Order',
        required: true,
        refreshers: ['site_id'],
        options: (_e) => tslib_1.__awaiter(void 0, [_e], void 0, function* ({ auth, site_id }) {
            if (!auth || !site_id) {
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'Please connect account first.',
                };
            }
            const authValue = auth;
            const client = new client_1.WebflowApiClient(authValue.access_token);
            const options = [];
            let page = 0;
            let response;
            do {
                response = yield client.listOrders(site_id, page, 100);
                page += 100;
                for (const order of response) {
                    options.push({ label: order.orderId, value: order.orderId });
                }
            } while (response.length > 0);
            return {
                disabled: false,
                options,
            };
        }),
    }),
};
//# sourceMappingURL=props.js.map