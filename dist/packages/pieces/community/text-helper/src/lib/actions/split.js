"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.split = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
exports.split = (0, pieces_framework_1.createAction)({
    description: 'Split a text by a delimiter',
    displayName: 'Split',
    name: 'split',
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
        delimiter: pieces_framework_1.Property.ShortText({
            displayName: 'Delimiter',
            required: true,
        }),
    },
    run: (ctx) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        return ctx.propsValue.text.split(ctx.propsValue.delimiter);
    }),
});
//# sourceMappingURL=split.js.map