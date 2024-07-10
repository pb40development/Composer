"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
exports.find = (0, pieces_framework_1.createAction)({
    description: 'Find substring (Regex or Text).',
    displayName: 'Find',
    name: 'find',
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
            displayName: 'text',
            required: true,
        }),
        expression: pieces_framework_1.Property.ShortText({
            displayName: 'Expression',
            description: 'Regex or text to search for.',
            required: true,
        }),
    },
    run: (ctx) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const expression = RegExp(ctx.propsValue.expression);
        return ctx.propsValue.text.match(expression);
    }),
});
//# sourceMappingURL=find.js.map