"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPieceRequestBody = exports.PieceScope = exports.PieceOptionRequest = exports.ListVersionsResponse = exports.GetPieceRequestQuery = exports.ListVersionRequestQuery = exports.ListPiecesRequestQuery = exports.GetPieceRequestParams = exports.GetPieceRequestWithScopeParams = exports.PieceOrderBy = exports.PieceSortBy = exports.SuggestionType = exports.VersionType = exports.ExactVersionType = exports.VERSION_PATTERN = exports.EXACT_VERSION_PATTERN = void 0;
const typebox_1 = require("@sinclair/typebox");
const flag_1 = require("../../flag/flag");
const piece_1 = require("../piece");
exports.EXACT_VERSION_PATTERN = /^[0-9]+\.[0-9]+\.[0-9]+$/;
exports.VERSION_PATTERN = /^([~^])?[0-9]+\.[0-9]+\.[0-9]+$/;
exports.ExactVersionType = typebox_1.Type.RegEx(exports.EXACT_VERSION_PATTERN);
exports.VersionType = typebox_1.Type.RegEx(exports.VERSION_PATTERN);
var SuggestionType;
(function (SuggestionType) {
    SuggestionType["ACTION"] = "ACTION";
    SuggestionType["TRIGGER"] = "TRIGGER";
    SuggestionType["ACTION_AND_TRIGGER"] = "ACTION_AND_TRIGGER";
})(SuggestionType || (exports.SuggestionType = SuggestionType = {}));
var PieceSortBy;
(function (PieceSortBy) {
    PieceSortBy["NAME"] = "NAME";
    PieceSortBy["UPDATED"] = "UPDATED";
    PieceSortBy["CREATED"] = "CREATED";
    PieceSortBy["POPULARITY"] = "POPULARITY";
})(PieceSortBy || (exports.PieceSortBy = PieceSortBy = {}));
var PieceOrderBy;
(function (PieceOrderBy) {
    PieceOrderBy["ASC"] = "ASC";
    PieceOrderBy["DESC"] = "DESC";
})(PieceOrderBy || (exports.PieceOrderBy = PieceOrderBy = {}));
exports.GetPieceRequestWithScopeParams = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    scope: typebox_1.Type.String(),
});
exports.GetPieceRequestParams = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
});
exports.ListPiecesRequestQuery = typebox_1.Type.Object({
    release: typebox_1.Type.Optional(exports.ExactVersionType),
    includeTags: typebox_1.Type.Optional(typebox_1.Type.Boolean()),
    includeHidden: typebox_1.Type.Optional(typebox_1.Type.Boolean()),
    edition: typebox_1.Type.Optional(typebox_1.Type.Enum(flag_1.ApEdition)),
    searchQuery: typebox_1.Type.Optional(typebox_1.Type.String()),
    sortBy: typebox_1.Type.Optional(typebox_1.Type.Enum(PieceSortBy)),
    orderBy: typebox_1.Type.Optional(typebox_1.Type.Enum(PieceOrderBy)),
    categories: typebox_1.Type.Optional(typebox_1.Type.Array(typebox_1.Type.Enum(piece_1.PieceCategory))),
    suggestionType: typebox_1.Type.Optional(typebox_1.Type.Enum(SuggestionType)),
});
exports.ListVersionRequestQuery = typebox_1.Type.Object({
    release: exports.ExactVersionType,
    name: typebox_1.Type.String(),
    edition: typebox_1.Type.Optional(typebox_1.Type.Enum(flag_1.ApEdition)),
});
exports.GetPieceRequestQuery = typebox_1.Type.Object({
    version: typebox_1.Type.Optional(exports.VersionType),
});
exports.ListVersionsResponse = typebox_1.Type.Record(exports.ExactVersionType, typebox_1.Type.Object({}));
exports.PieceOptionRequest = typebox_1.Type.Object({
    packageType: typebox_1.Type.Enum(piece_1.PackageType),
    pieceType: typebox_1.Type.Enum(piece_1.PieceType),
    pieceName: typebox_1.Type.String({}),
    pieceVersion: exports.VersionType,
    stepName: typebox_1.Type.String({}),
    propertyName: typebox_1.Type.String({}),
    flowId: typebox_1.Type.String(),
    flowVersionId: typebox_1.Type.String(),
    input: typebox_1.Type.Any({}),
    searchValue: typebox_1.Type.Optional(typebox_1.Type.String()),
});
var PieceScope;
(function (PieceScope) {
    PieceScope["PROJECT"] = "PROJECT";
    PieceScope["PLATFORM"] = "PLATFORM";
})(PieceScope || (exports.PieceScope = PieceScope = {}));
exports.AddPieceRequestBody = typebox_1.Type.Union([
    typebox_1.Type.Object({
        packageType: typebox_1.Type.Literal(piece_1.PackageType.ARCHIVE),
        scope: typebox_1.Type.Enum(PieceScope),
        pieceName: typebox_1.Type.String(),
        pieceVersion: exports.ExactVersionType,
        pieceArchive: typebox_1.Type.Unknown(),
    }, {
        title: 'Private Piece',
    }),
    typebox_1.Type.Object({
        packageType: typebox_1.Type.Literal(piece_1.PackageType.REGISTRY),
        scope: typebox_1.Type.Enum(PieceScope),
        pieceName: typebox_1.Type.String(),
        pieceVersion: exports.ExactVersionType,
    }, {
        title: 'NPM Piece',
    }),
]);
//# sourceMappingURL=piece-requests.js.map