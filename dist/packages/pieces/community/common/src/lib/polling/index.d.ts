import { Store } from '@activepieces/pieces-framework';
interface TimebasedPolling<AuthValue, PropsValue> {
    strategy: DedupeStrategy.TIMEBASED;
    items: (params: {
        auth: AuthValue;
        store: Store;
        propsValue: PropsValue;
        lastFetchEpochMS: number;
    }) => Promise<{
        epochMilliSeconds: number;
        data: unknown;
    }[]>;
}
interface LastItemPolling<AuthValue, PropsValue> {
    strategy: DedupeStrategy.LAST_ITEM;
    items: (params: {
        auth: AuthValue;
        store: Store;
        propsValue: PropsValue;
        lastItemId: unknown;
    }) => Promise<{
        id: unknown;
        data: unknown;
    }[]>;
}
export declare enum DedupeStrategy {
    TIMEBASED = 0,
    LAST_ITEM = 1
}
export type Polling<AuthValue, PropsValue> = TimebasedPolling<AuthValue, PropsValue> | LastItemPolling<AuthValue, PropsValue>;
export declare const pollingHelper: {
    poll<AuthValue, PropsValue>(polling: Polling<AuthValue, PropsValue>, { store, auth, propsValue, maxItemsToPoll, }: {
        store: Store;
        auth: AuthValue;
        propsValue: PropsValue;
        maxItemsToPoll?: number;
    }): Promise<unknown[]>;
    onEnable<AuthValue_1, PropsValue_1>(polling: Polling<AuthValue_1, PropsValue_1>, { store, auth, propsValue, }: {
        store: Store;
        auth: AuthValue_1;
        propsValue: PropsValue_1;
    }): Promise<void>;
    onDisable<AuthValue_2, PropsValue_2>(polling: Polling<AuthValue_2, PropsValue_2>, params: {
        store: Store;
        auth: AuthValue_2;
        propsValue: PropsValue_2;
    }): Promise<void>;
    test<AuthValue_3, PropsValue_3>(polling: Polling<AuthValue_3, PropsValue_3>, { auth, propsValue, store, }: {
        store: Store;
        auth: AuthValue_3;
        propsValue: PropsValue_3;
    }): Promise<unknown[]>;
};
export {};
