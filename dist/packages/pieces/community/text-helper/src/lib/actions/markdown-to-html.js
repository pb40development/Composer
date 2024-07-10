"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdownToHTML = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const showdown_1 = require("showdown");
exports.markdownToHTML = (0, pieces_framework_1.createAction)({
    name: 'markdown_to_html',
    displayName: 'Markdown to HTML',
    description: 'Convert markdown to HTML',
    errorHandlingOptions: {
        continueOnFailure: {
            hide: true,
        },
        retryOnFailure: {
            hide: true,
        },
    },
    props: {
        markdown: pieces_framework_1.Property.LongText({
            displayName: 'Markdown Content',
            description: 'The markdown to convert to HTML',
            required: true,
        }),
        flavor: pieces_framework_1.Property.StaticDropdown({
            displayName: 'Flavor of Markdown',
            description: 'The flavor of markdown use during conversion',
            required: true,
            defaultValue: 'github',
            options: {
                options: [
                    { label: 'Default', value: 'vanilla' },
                    { label: 'Original', value: 'original' },
                    { label: 'GitHub', value: 'github' },
                ],
            },
        }),
        headerLevelStart: pieces_framework_1.Property.Number({
            displayName: 'Minimum Header Level',
            description: 'The minimum header level to use during conversion',
            required: true,
            defaultValue: 1,
            validators: [pieces_framework_1.Validators.minValue(1), pieces_framework_1.Validators.maxValue(6)],
        }),
        tables: pieces_framework_1.Property.Checkbox({
            displayName: 'Support Tables',
            description: 'Whether to support tables during conversion',
            required: true,
            defaultValue: true,
        }),
        noHeaderId: pieces_framework_1.Property.Checkbox({
            displayName: 'No Header ID',
            description: 'Whether to add an ID to headers during conversion',
            required: true,
            defaultValue: false,
        }),
        simpleLineBreaks: pieces_framework_1.Property.Checkbox({
            displayName: 'Simple Line Breaks',
            description: 'Parses line breaks as &lt;br&gt;, without needing 2 spaces at the end of the line',
            required: true,
            defaultValue: false,
        }),
        openLinksInNewWindow: pieces_framework_1.Property.Checkbox({
            displayName: 'Open Links in New Window',
            required: true,
            defaultValue: false,
        }),
    },
    run: (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const converter = new showdown_1.Converter({
            headerLevelStart: context.propsValue.headerLevelStart,
            omitExtraWLInCodeBlocks: true,
            noHeaderId: context.propsValue.noHeaderId,
            tables: context.propsValue.tables,
            simpleLineBreaks: context.propsValue.simpleLineBreaks,
            openLinksInNewWindow: context.propsValue.openLinksInNewWindow,
        });
        console.log('noHeaderId', context.propsValue.noHeaderId);
        converter.setFlavor(context.propsValue.flavor);
        return converter.makeHtml(context.propsValue.markdown);
    }),
});
//# sourceMappingURL=markdown-to-html.js.map