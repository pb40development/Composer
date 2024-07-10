import { StoreScope } from "@activepieces/pieces-framework";
export declare enum PieceStoreScope {
    PROJECT = "COLLECTION",
    FLOW = "FLOW",
    RUN = "RUN"
}
export declare function getScopeAndKey(params: Params): {
    scope: StoreScope;
    key: string;
};
type Params = {
    runId: string;
    key: string;
    scope: PieceStoreScope;
};
export declare const common: {
    store_scope: import("@activepieces/pieces-framework").StaticDropdownProperty<PieceStoreScope, true>;
};
export {};
