"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertJsonToXml = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const json2xml_1 = tslib_1.__importDefault(require("json2xml"));
exports.convertJsonToXml = (0, pieces_framework_1.createAction)({
    name: 'convert-json-to-xml',
    displayName: 'Convert JSON to XML',
    description: 'Convert JSON to XML',
    props: {
        json: pieces_framework_1.Property.Json({
            displayName: 'JSON',
            required: true,
        }),
        attributes_key: pieces_framework_1.Property.ShortText({
            displayName: 'Attribute field',
            description: "Field to add your tag's attributes",
            required: false,
        }),
        header: pieces_framework_1.Property.Checkbox({
            displayName: 'Header',
            description: 'Add XML header',
            required: false,
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { json } = context.propsValue;
            const attributes_key = context.propsValue.attributes_key
                ? context.propsValue.attributes_key
                : 'attr';
            const header = context.propsValue.header
                ? context.propsValue.header
                : false;
            return (0, json2xml_1.default)(JSON.parse(JSON.stringify(json)), { attributes_key, header });
        });
    },
});
//# sourceMappingURL=convert-json-to-xml.js.map