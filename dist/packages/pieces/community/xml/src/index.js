"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xml = void 0;
const pieces_framework_1 = require("@activepieces/pieces-framework");
const shared_1 = require("@activepieces/shared");
const convert_json_to_xml_1 = require("./lib/actions/convert-json-to-xml");
exports.xml = (0, pieces_framework_1.createPiece)({
    displayName: 'XML',
    description: 'Extensible Markup Language for storing and transporting data',
    minimumSupportedRelease: '0.5.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/xml.png',
    categories: [shared_1.PieceCategory.CORE],
    auth: pieces_framework_1.PieceAuth.None(),
    authors: ["Willianwg", "kishanprmr", "AbdulTheActivePiecer", "khaledmashaly", "abuaboud"],
    actions: [convert_json_to_xml_1.convertJsonToXml],
    triggers: [],
});
//# sourceMappingURL=index.js.map