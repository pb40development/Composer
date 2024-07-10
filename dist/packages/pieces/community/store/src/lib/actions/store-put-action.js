"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storagePutAction = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const common_1 = require("./common");
exports.storagePutAction = (0, pieces_framework_1.createAction)({
    name: 'put',
    displayName: 'Put',
    description: 'Put a value in storage',
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
            const { key, scope } = (0, common_1.getScopeAndKey)({
                runId: context.run.id,
                key: context.propsValue['key'],
                scope: context.propsValue.store_scope,
            });
            return yield context.store.put(key, context.propsValue['value'], scope);
        });
    },
});
//# sourceMappingURL=store-put-action.js.map