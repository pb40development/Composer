"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = exports.InputProperty = void 0;
const typebox_1 = require("@sinclair/typebox");
const text_property_1 = require("./text-property");
const number_property_1 = require("./number-property");
const array_property_1 = require("./array-property");
const object_property_1 = require("./object-property");
const json_property_1 = require("./json-property");
const date_time_property_1 = require("./date-time-property");
const file_property_1 = require("./file-property");
const property_type_1 = require("./property-type");
const markdown_property_1 = require("./markdown-property");
const checkbox_property_1 = require("./checkbox-property");
const static_dropdown_1 = require("./dropdown/static-dropdown");
const processors_1 = require("../../processors/processors");
const validators_1 = require("../../validators/validators");
const dynamic_prop_1 = require("./dynamic-prop");
const dropdown_prop_1 = require("./dropdown/dropdown-prop");
exports.InputProperty = typebox_1.Type.Union([
    text_property_1.ShortTextProperty,
    text_property_1.LongTextProperty,
    markdown_property_1.MarkDownProperty,
    checkbox_property_1.CheckboxProperty,
    static_dropdown_1.StaticDropdownProperty,
    static_dropdown_1.StaticMultiSelectDropdownProperty,
    dropdown_prop_1.DropdownProperty,
    dropdown_prop_1.MultiSelectDropdownProperty,
    dynamic_prop_1.DynamicProperties,
    number_property_1.NumberProperty,
    array_property_1.ArrayProperty,
    object_property_1.ObjectProperty,
    json_property_1.JsonProperty,
    date_time_property_1.DateTimeProperty,
    file_property_1.FileProperty,
]);
exports.Property = {
    ShortText(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.SHORT_TEXT, defaultProcessors: [processors_1.Processors.string], defaultValidators: [validators_1.Validators.string] });
    },
    Checkbox(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.CHECKBOX });
    },
    LongText(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.LONG_TEXT });
    },
    MarkDown(request) {
        return {
            displayName: 'Markdown',
            required: false,
            description: request.value,
            type: property_type_1.PropertyType.MARKDOWN,
            valueSchema: undefined,
        };
    },
    Number(request) {
        return Object.assign(Object.assign({}, request), { defaultProcessors: [processors_1.Processors.number], defaultValidators: [validators_1.Validators.number], valueSchema: undefined, type: property_type_1.PropertyType.NUMBER });
    },
    Json(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.JSON, defaultProcessors: [processors_1.Processors.json] });
    },
    Array(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.ARRAY });
    },
    Object(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.OBJECT });
    },
    Dropdown(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.DROPDOWN });
    },
    StaticDropdown(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.STATIC_DROPDOWN });
    },
    MultiSelectDropdown(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.MULTI_SELECT_DROPDOWN });
    },
    DynamicProperties(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.DYNAMIC });
    },
    StaticMultiSelectDropdown(request) {
        return Object.assign(Object.assign({}, request), { valueSchema: undefined, type: property_type_1.PropertyType.STATIC_MULTI_SELECT_DROPDOWN });
    },
    DateTime(request) {
        return Object.assign(Object.assign({}, request), { defaultProcessors: [processors_1.Processors.datetime], defaultValidators: [validators_1.Validators.datetimeIso], valueSchema: undefined, type: property_type_1.PropertyType.DATE_TIME });
    },
    File(request) {
        return Object.assign(Object.assign({}, request), { defaultProcessors: [processors_1.Processors.file], defaultValidators: [validators_1.Validators.file], valueSchema: undefined, type: property_type_1.PropertyType.FILE });
    },
};
//# sourceMappingURL=index.js.map