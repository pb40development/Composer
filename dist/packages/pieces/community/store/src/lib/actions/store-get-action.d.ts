import { PieceStoreScope } from './common';
export declare const storageGetAction: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").PieceAuthProperty, {
    key: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    defaultValue: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    store_scope: import("@activepieces/pieces-framework").StaticDropdownProperty<PieceStoreScope, true>;
}>;
