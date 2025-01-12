"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trigger = exports.PieceTrigger = exports.PieceTriggerSettings = exports.EmptyTrigger = exports.TriggerType = exports.AUTHENTICATION_PROPERTY_NAME = void 0;
const typebox_1 = require("@sinclair/typebox");
const pieces_1 = require("../../pieces");
const sample_data_1 = require("../sample-data");
exports.AUTHENTICATION_PROPERTY_NAME = 'auth';
var TriggerType;
(function (TriggerType) {
    TriggerType["EMPTY"] = "EMPTY";
    TriggerType["PIECE"] = "PIECE_TRIGGER";
})(TriggerType || (exports.TriggerType = TriggerType = {}));
const commonProps = {
    name: typebox_1.Type.String({}),
    valid: typebox_1.Type.Boolean({}),
    displayName: typebox_1.Type.String({}),
    nextAction: typebox_1.Type.Optional(typebox_1.Type.Any()),
};
exports.EmptyTrigger = typebox_1.Type.Object(Object.assign(Object.assign({}, commonProps), { type: typebox_1.Type.Literal(TriggerType.EMPTY), settings: typebox_1.Type.Any() }));
exports.PieceTriggerSettings = typebox_1.Type.Object({
    pieceName: typebox_1.Type.String({}),
    pieceVersion: pieces_1.VersionType,
    pieceType: typebox_1.Type.Enum(pieces_1.PieceType),
    packageType: typebox_1.Type.Enum(pieces_1.PackageType),
    triggerName: typebox_1.Type.String({}),
    input: typebox_1.Type.Record(typebox_1.Type.String({}), typebox_1.Type.Any()),
    inputUiInfo: sample_data_1.SampleDataSettingsObject,
});
exports.PieceTrigger = typebox_1.Type.Object(Object.assign(Object.assign({}, commonProps), { type: typebox_1.Type.Literal(TriggerType.PIECE), settings: exports.PieceTriggerSettings }));
exports.Trigger = typebox_1.Type.Union([
    exports.PieceTrigger,
    exports.EmptyTrigger,
]);
//# sourceMappingURL=trigger.js.map