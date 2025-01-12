"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayProperty = void 0;
const typebox_1 = require("@sinclair/typebox");
const common_1 = require("./common");
const property_type_1 = require("./property-type");
const text_property_1 = require("./text-property");
const static_dropdown_1 = require("./dropdown/static-dropdown");
const dropdown_prop_1 = require("./dropdown/dropdown-prop");
const checkbox_property_1 = require("./checkbox-property");
const number_property_1 = require("./number-property");
exports.ArrayProperty = typebox_1.Type.Composite([
    common_1.BasePropertySchema,
    typebox_1.Type.Object({
        properties: typebox_1.Type.Optional(typebox_1.Type.Record(typebox_1.Type.String(), typebox_1.Type.Union([
            text_property_1.ShortTextProperty,
            text_property_1.LongTextProperty,
            static_dropdown_1.StaticDropdownProperty,
            dropdown_prop_1.MultiSelectDropdownProperty,
            static_dropdown_1.StaticMultiSelectDropdownProperty,
            checkbox_property_1.CheckboxProperty,
            number_property_1.NumberProperty
        ])))
    }),
    (0, common_1.TPropertyValue)(typebox_1.Type.Array(typebox_1.Type.Unknown()), property_type_1.PropertyType.ARRAY)
]);
//# sourceMappingURL=array-property.js.map