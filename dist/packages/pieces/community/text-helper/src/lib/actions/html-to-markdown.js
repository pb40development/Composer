"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToMarkdown = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const showdown_1 = require("showdown");
const jsdom_1 = require("jsdom");
exports.htmlToMarkdown = (0, pieces_framework_1.createAction)({
    name: 'html_to_markdown',
    displayName: 'HTML to Markdown',
    description: 'Convert HTML to Markdown',
    errorHandlingOptions: {
        continueOnFailure: {
            hide: true,
        },
        retryOnFailure: {
            hide: true,
        },
    },
    props: {
        html: pieces_framework_1.Property.LongText({
            displayName: 'HTML Content',
            description: 'The HTML to convert to markdown',
            required: true,
        }),
        flavor: pieces_framework_1.Property.StaticDropdown({
            displayName: 'Flavor of Markdown',
            description: 'The flavor of markdown use during conversion',
            required: true,
            defaultValue: 'vanilla',
            options: {
                options: [
                    { label: 'Default', value: 'vanilla' },
                    { label: 'Original', value: 'original' },
                    { label: 'GitHub', value: 'github' },
                ],
            },
        }),
    },
    run: (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const html = context.propsValue.html;
        const doc = new jsdom_1.JSDOM(html);
        const converter = new showdown_1.Converter();
        converter.setFlavor(context.propsValue.flavor);
        return converter.makeMarkdown(html, doc.window.document);
    }),
});
//# sourceMappingURL=html-to-markdown.js.map