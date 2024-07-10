"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textHelper = void 0;
const pieces_framework_1 = require("@activepieces/pieces-framework");
const shared_1 = require("@activepieces/shared");
const concat_1 = require("./lib/actions/concat");
const find_1 = require("./lib/actions/find");
const html_to_markdown_1 = require("./lib/actions/html-to-markdown");
const markdown_to_html_1 = require("./lib/actions/markdown-to-html");
const replace_1 = require("./lib/actions/replace");
const split_1 = require("./lib/actions/split");
exports.textHelper = (0, pieces_framework_1.createPiece)({
    displayName: 'Text Helper',
    description: 'Tools for text processing',
    auth: pieces_framework_1.PieceAuth.None(),
    logoUrl: 'https://cdn.activepieces.com/pieces/text-helper.svg',
    authors: ["joeworkman", "kishanprmr", "MoShizzle", "AbdulTheActivePiecer", "abuaboud"],
    categories: [shared_1.PieceCategory.CORE],
    actions: [concat_1.concat, replace_1.replace, split_1.split, find_1.find, markdown_to_html_1.markdownToHTML, html_to_markdown_1.htmlToMarkdown],
    triggers: [],
});
//# sourceMappingURL=index.js.map