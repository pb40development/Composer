"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageRemoveFromList = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const deep_equal_1 = tslib_1.__importDefault(require("deep-equal"));
const common_1 = require("./common");
exports.storageRemoveFromList = (0, pieces_framework_1.createAction)({
    name: 'remove_from_list',
    displayName: 'Remove from List',
    description: 'Remove Item from a list',
    errorHandlingOptions: {
        continueOnFailure: {
            hide: true,
        },
        retryOnFailure: {
            hide: true,
        },
    },
    props: {
        key: pieces_framework_1.Property.ShortText({
            displayName: 'Key',
            required: true,
            validators: [pieces_framework_1.Validators.maxLength(128)]
        }),
        value: pieces_framework_1.Property.ShortText({
            displayName: 'Value',
            required: true,
        }),
        store_scope: common_1.common.store_scope,
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            const { key, scope } = (0, common_1.getScopeAndKey)({
                runId: context.run.id,
                key: context.propsValue['key'],
                scope: context.propsValue.store_scope,
            });
            const items = (_a = (yield context.store.get(key, scope))) !== null && _a !== void 0 ? _a : [];
            if (!Array.isArray(items)) {
                throw new Error(`Key ${context.propsValue['key']} is not an array`);
            }
            for (let i = 0; i < items.length; i++) {
                if ((0, deep_equal_1.default)(items[i], context.propsValue['value'])) {
                    items.splice(i, 1);
                    return yield context.store.put(key, items, scope);
                }
            }
            if (items.includes(context.propsValue['value'])) {
                items.splice(items.indexOf(context.propsValue['value']), 1);
            }
            return yield context.store.put(key, items, scope);
        });
    },
});
//# sourceMappingURL=store-remove-from-list.js.map