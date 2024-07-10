import { HttpMethod } from '@activepieces/pieces-common';
export declare class WebflowApiClient {
    private accessToken;
    constructor(accessToken: string);
    makeRequest(method: HttpMethod, resourceUri: string, query?: Record<string, string | number | string[] | undefined>, body?: any | undefined): Promise<any>;
    listSites(): Promise<any>;
    listCollections(siteId: string): Promise<any>;
    getCollection(collectionId: string): Promise<any>;
    createCollectionItem(collectionId: string, request: Record<string, any>): Promise<any>;
    updateCollectionItem(collectionId: string, itemId: string, request: Record<string, any>): Promise<any>;
    getCollectionItem(collectionId: string, itemId: string): Promise<any>;
    deleteCollectionItem(collectionId: string, itemId: string): Promise<any>;
    publishCollectionItem(collectionId: string, itemId: string): Promise<any>;
    listCollectionItems(collectionId: string, page: number, limit: number): Promise<any>;
    getOrder(siteId: string, orderId: string): Promise<any>;
    fulfillOrder(siteId: string, orderId: string, request: Record<string, any>): Promise<any>;
    unfulfillOrder(siteId: string, orderId: string): Promise<any>;
    refundOrder(siteId: string, orderId: string): Promise<any>;
    listOrders(siteId: string, page: number, limit: number): Promise<any>;
    createWebhook(siteId: string, triggerType: string, webhookUrl: string): Promise<any>;
    deleteWebhook(webhookId: string): Promise<any>;
}
