"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
const pieces_framework_1 = require("@activepieces/pieces-framework");
const shared_1 = require("@activepieces/shared");
const store_add_to_list_1 = require("./lib/actions/store-add-to-list");
const store_append_action_1 = require("./lib/actions/store-append-action");
const store_get_action_1 = require("./lib/actions/store-get-action");
const store_put_action_1 = require("./lib/actions/store-put-action");
const store_remove_from_list_1 = require("./lib/actions/store-remove-from-list");
const store_remove_value_1 = require("./lib/actions/store-remove-value");
exports.storage = (0, pieces_framework_1.createPiece)({
    displayName: 'Storage',
    description: 'Store or retrieve data from key/value database',
    minimumSupportedRelease: '0.5.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/store.png',
    categories: [shared_1.PieceCategory.CORE],
    auth: pieces_framework_1.PieceAuth.None(),
    authors: ["JanHolger", "fardeenpanjwani-codeglo", "Abdallah-Alwarawreh", "Salem-Alaa", "kishanprmr", "MoShizzle", "khaledmashaly", "abuaboud"],
    actions: [
        store_get_action_1.storageGetAction,
        store_put_action_1.storagePutAction,
        store_append_action_1.storageAppendAction,
        store_remove_value_1.storageRemoveValue,
        store_add_to_list_1.storageAddtoList,
        store_remove_from_list_1.storageRemoveFromList,
    ],
    triggers: [],
});
//# sourceMappingURL=index.js.map