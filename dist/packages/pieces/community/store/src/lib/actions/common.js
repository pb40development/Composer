"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.common = exports.getScopeAndKey = exports.PieceStoreScope = void 0;
const pieces_framework_1 = require("@activepieces/pieces-framework");
var PieceStoreScope;
(function (PieceStoreScope) {
    PieceStoreScope["PROJECT"] = "COLLECTION";
    PieceStoreScope["FLOW"] = "FLOW";
    PieceStoreScope["RUN"] = "RUN";
})(PieceStoreScope || (exports.PieceStoreScope = PieceStoreScope = {}));
function getScopeAndKey(params) {
    switch (params.scope) {
        case PieceStoreScope.PROJECT:
            return { scope: pieces_framework_1.StoreScope.PROJECT, key: params.key };
        case PieceStoreScope.FLOW:
            return { scope: pieces_framework_1.StoreScope.FLOW, key: params.key };
        case PieceStoreScope.RUN:
            return { scope: pieces_framework_1.StoreScope.FLOW, key: `run_${params.runId}/${params.key}` };
    }
}
exports.getScopeAndKey = getScopeAndKey;
exports.common = {
    store_scope: pieces_framework_1.Property.StaticDropdown({
        displayName: 'Store Scope',
        description: 'The storage scope of the value.',
        required: true,
        options: {
            options: [
                {
                    label: 'Project',
                    value: PieceStoreScope.PROJECT,
                },
                {
                    label: 'Flow',
                    value: PieceStoreScope.FLOW,
                },
                {
                    label: 'Run',
                    value: PieceStoreScope.RUN,
                },
            ],
        },
        defaultValue: PieceStoreScope.PROJECT,
    })
};
//# sourceMappingURL=common.js.map