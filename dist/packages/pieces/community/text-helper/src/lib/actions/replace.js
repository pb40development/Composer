"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replace = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
exports.replace = (0, pieces_framework_1.createAction)({
    description: 'Replaces all instances of any word, character or phrase in text, with another.',
    displayName: 'Replace',
    name: 'replace',
    errorHandlingOptions: {
        continueOnFailure: {
            hide: true,
        },
        retryOnFailure: {
            hide: true,
        },
    },
    props: {
        text: pieces_framework_1.Property.ShortText({
            displayName: 'Text',
            required: true,
        }),
        searchValue: pieces_framework_1.Property.ShortText({
            displayName: 'Search Value',
            description: 'Can be plain text or a regex expression.',
            required: true,
            validators: [],
        }),
        replaceValue: pieces_framework_1.Property.ShortText({
            displayName: 'Replace Value',
            required: false,
            description: 'Leave empty to delete found results.',
        }),
        replaceOnlyFirst: pieces_framework_1.Property.Checkbox({
            displayName: 'Replace Only First Match',
            required: false,
            description: 'Only replaces the first instance of the search value.',
        }),
    },
    run: (ctx) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        if (ctx.propsValue.replaceOnlyFirst) {
            const expression = RegExp(ctx.propsValue.searchValue);
            return ctx.propsValue.text.replace(expression, ctx.propsValue.replaceValue || '');
        }
        const expression = RegExp(ctx.propsValue.searchValue, 'g');
        return ctx.propsValue.text.replaceAll(expression, ctx.propsValue.replaceValue || '');
    }),
});
//# sourceMappingURL=replace.js.map