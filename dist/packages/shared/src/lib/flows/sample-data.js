"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_SAMPLE_DATA_SETTINGS = exports.SampleDataSettingsObject = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.SampleDataSettingsObject = typebox_1.Type.Object({
    currentSelectedData: typebox_1.Type.Optional(typebox_1.Type.Unknown()),
    customizedInputs: typebox_1.Type.Optional(typebox_1.Type.Record(typebox_1.Type.String(), typebox_1.Type.Unknown())),
    lastTestDate: typebox_1.Type.Optional(typebox_1.Type.String()),
}, {
    additionalProperties: true,
});
exports.DEFAULT_SAMPLE_DATA_SETTINGS = {
    currentSelectedData: undefined,
    customizedInputs: undefined,
    lastTestDate: undefined,
};
//# sourceMappingURL=sample-data.js.map