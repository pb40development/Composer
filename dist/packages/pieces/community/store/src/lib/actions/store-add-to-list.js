"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageAddtoList = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const deep_equal_1 = tslib_1.__importDefault(require("deep-equal"));
const common_1 = require("./common");
exports.storageAddtoList = (0, pieces_framework_1.createAction)({
    name: 'add_to_list',
    displayName: 'Add To List',
    description: 'Add Item to a list',
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
        ignore_if_exists: pieces_framework_1.Property.Checkbox({
            displayName: 'Ignore if value exists',
            required: false,
        }),
        store_scope: common_1.common.store_scope
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            const { key, scope } = (0, common_1.getScopeAndKey)({
                runId: context.run.id,
                key: context.propsValue['key'],
                scope: context.propsValue.store_scope,
            });
            let items = (_a = (yield context.store.get(key, scope))) !== null && _a !== void 0 ? _a : [];
            try {
                if (typeof items === 'string') {
                    items = JSON.parse(items);
                }
                if (!Array.isArray(items)) {
                    throw new Error(`Key ${context.propsValue['key']} is not an array`);
                }
            }
            catch (err) {
                throw new Error(`Key ${context.propsValue['key']} is not an array`);
            }
            if (context.propsValue['ignore_if_exists']) {
                for (const item of items) {
                    if ((0, deep_equal_1.default)(item, context.propsValue['value'])) {
                        return items;
                    }
                }
            }
            items.push(context.propsValue['value']);
            return context.store.put(key, items, scope);
        });
    },
});
//# sourceMappingURL=store-add-to-list.js.map