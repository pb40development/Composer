"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concat = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
exports.concat = (0, pieces_framework_1.createAction)({
    description: 'Concatenate two or more texts',
    displayName: 'Concatenate',
    name: 'concat',
    errorHandlingOptions: {
        continueOnFailure: {
            hide: true,
        },
        retryOnFailure: {
            hide: true,
        },
    },
    props: {
        texts: pieces_framework_1.Property.Array({
            displayName: 'Texts',
            required: true,
        }),
        separator: pieces_framework_1.Property.ShortText({
            displayName: 'Separator',
            description: 'The text that separates the texts you want to concatenate',
            required: false,
        }),
    },
    run: (ctx) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        var _a;
        return ctx.propsValue.texts.join((_a = ctx.propsValue.separator) !== null && _a !== void 0 ? _a : '');
    }),
});
//# sourceMappingURL=concat.js.map