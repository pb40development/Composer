"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebflowApiClient = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@activepieces/pieces-common");
class WebflowApiClient {
    constructor(accessToken) {
        this.accessToken = accessToken;
    }
    makeRequest(method_1, resourceUri_1, query_1) {
        return tslib_1.__awaiter(this, arguments, void 0, function* (method, resourceUri, query, body = undefined) {
            const apiUrl = 'https://api.webflow.com';
            const params = {};
            if (query) {
                for (const [key, value] of Object.entries(query)) {
                    if (value !== null && value !== undefined) {
                        params[key] = String(value);
                    }
                }
            }
            const request = {
                method: method,
                url: apiUrl + resourceUri,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: this.accessToken,
                },
                queryParams: params,
                body: body,
            };
            const response = yield pieces_common_1.httpClient.sendRequest(request);
            return response.body;
        });
    }
    listSites() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.GET, '/sites');
        });
    }
    listCollections(siteId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.GET, `/sites/${siteId}/collections`);
        });
    }
    getCollection(collectionId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.GET, `/collections/${collectionId}`);
        });
    }
    createCollectionItem(collectionId, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.POST, `/collections/${collectionId}/items`, undefined, request);
        });
    }
    updateCollectionItem(collectionId, itemId, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.PUT, `/collections/${collectionId}/items/${itemId}`, undefined, request);
        });
    }
    getCollectionItem(collectionId, itemId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.GET, `/collections/${collectionId}/items/${itemId}`);
        });
    }
    deleteCollectionItem(collectionId, itemId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.DELETE, `/collections/${collectionId}/items/${itemId}`);
        });
    }
    publishCollectionItem(collectionId, itemId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.POST, `/collections/${collectionId}/items/publish`, undefined, { itemIds: [itemId] });
        });
    }
    listCollectionItems(collectionId, page, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.GET, `/collections/${collectionId}/items`, {
                offset: page,
                limit,
            });
        });
    }
    getOrder(siteId, orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.GET, `/sites/${siteId}/orders/${orderId}`);
        });
    }
    fulfillOrder(siteId, orderId, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.POST, `/sites/${siteId}/orders/${orderId}/fulfill`, undefined, request);
        });
    }
    unfulfillOrder(siteId, orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.POST, `/sites/${siteId}/orders/${orderId}/unfulfill`, undefined);
        });
    }
    refundOrder(siteId, orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.POST, `/sites/${siteId}/orders/${orderId}/refund`);
        });
    }
    listOrders(siteId, page, limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.GET, `/sites/${siteId}/orders`, {
                offset: page,
                limit,
            });
        });
    }
    createWebhook(siteId, triggerType, webhookUrl) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.POST, `'/sites/${siteId}/webhooks`, {}, {
                triggerType,
                url: webhookUrl,
            });
        });
    }
    deleteWebhook(webhookId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.DELETE, `/webhooks/${webhookId}`);
        });
    }
}
exports.WebflowApiClient = WebflowApiClient;
//# sourceMappingURL=client.js.map