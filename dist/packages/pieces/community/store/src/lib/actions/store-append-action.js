"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageAppendAction = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const common_1 = require("./common");
exports.storageAppendAction = (0, pieces_framework_1.createAction)({
    name: 'append',
    displayName: 'Append',
    description: 'Append to a value in storage',
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
            validators: [pieces_framework_1.Validators.maxLength(128)],
        }),
        value: pieces_framework_1.Property.ShortText({
            displayName: 'Value',
            required: true,
        }),
        separator: pieces_framework_1.Property.ShortText({
            displayName: 'Separator',
            description: 'Separator between added values, use \\n for newlines',
            required: false,
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
            const oldValue = (yield context.store.get(key, scope)) || '';
            if (typeof oldValue !== 'string') {
                throw new Error(`Key ${context.propsValue.key} is not a string`);
            }
            const appendValue = context.propsValue.value;
            let separator = context.propsValue.separator || '';
            separator = separator.replace(/\\n/g, '\n'); // Allow newline escape sequence
            const newValue = oldValue + (oldValue.length > 0 ? separator : '') + appendValue;
            return yield context.store.put(key, newValue, scope);
        });
    },
});
//# sourceMappingURL=store-append-action.js.map