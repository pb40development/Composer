"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageGetAction = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const common_1 = require("./common");
exports.storageGetAction = (0, pieces_framework_1.createAction)({
    name: 'get',
    displayName: 'Get',
    description: 'Get a value from storage',
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
        defaultValue: pieces_framework_1.Property.ShortText({
            displayName: 'Default Value',
            required: false,
        }),
        store_scope: pieces_framework_1.Property.StaticDropdown({
            displayName: 'Store Scope',
            description: 'The storage scope of the value.',
            required: true,
            options: {
                options: [
                    {
                        label: 'Project',
                        value: common_1.PieceStoreScope.PROJECT,
                    },
                    {
                        label: 'Flow',
                        value: common_1.PieceStoreScope.FLOW,
                    },
                    {
                        label: 'Run',
                        value: common_1.PieceStoreScope.RUN,
                    },
                ],
            },
            defaultValue: pieces_framework_1.StoreScope.PROJECT,
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            const { key, scope } = (0, common_1.getScopeAndKey)({
                runId: context.run.id,
                key: context.propsValue['key'],
                scope: context.propsValue.store_scope,
            });
            return ((_a = (yield context.store.get(key, scope))) !== null && _a !== void 0 ? _a : context.propsValue['defaultValue']);
        });
    },
});
//# sourceMappingURL=store-get-action.js.map