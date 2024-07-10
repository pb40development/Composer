"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropbox = exports.dropboxAuth = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@activepieces/pieces-common");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const shared_1 = require("@activepieces/shared");
const copy_file_1 = require("./lib/actions/copy-file");
const copy_folder_1 = require("./lib/actions/copy-folder");
const create_new_folder_1 = require("./lib/actions/create-new-folder");
const create_new_text_file_1 = require("./lib/actions/create-new-text-file");
const delete_file_1 = require("./lib/actions/delete-file");
const delete_folder_1 = require("./lib/actions/delete-folder");
const get_file_link_1 = require("./lib/actions/get-file-link");
const list_a_folder_1 = require("./lib/actions/list-a-folder");
const move_file_1 = require("./lib/actions/move-file");
const move_folder_1 = require("./lib/actions/move-folder");
const search_1 = require("./lib/actions/search");
const upload_file_1 = require("./lib/actions/upload-file");
exports.dropboxAuth = pieces_framework_1.PieceAuth.OAuth2({
    description: '',
    authUrl: 'https://www.dropbox.com/oauth2/authorize',
    tokenUrl: 'https://api.dropboxapi.com/oauth2/token',
    required: true,
    scope: [
        'files.metadata.write',
        'files.metadata.read',
        'files.content.write',
        'files.content.read',
    ],
});
exports.dropbox = (0, pieces_framework_1.createPiece)({
    minimumSupportedRelease: '0.5.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/dropbox.png',
    actions: [
        search_1.dropboxSearch,
        create_new_text_file_1.dropboxCreateNewTextFile,
        upload_file_1.dropboxUploadFile,
        get_file_link_1.dropboxGetFileLink,
        delete_file_1.dropboxDeleteFile,
        move_file_1.dropboxMoveFile,
        copy_file_1.dropboxCopyFile,
        create_new_folder_1.dropboxCreateNewFolder,
        delete_folder_1.dropboxDeleteFolder,
        move_folder_1.dropboxMoveFolder,
        copy_folder_1.dropboxCopyFolder,
        list_a_folder_1.dropboxListAFolder,
        (0, pieces_common_1.createCustomApiCallAction)({
            baseUrl: () => 'https://api.dropboxapi.com/2',
            auth: exports.dropboxAuth,
            authMapping: (auth) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return ({
                    Authorization: `Bearer ${auth.access_token}`,
                });
            }),
        }),
    ],
    displayName: 'Dropbox',
    description: 'Cloud storage and file synchronization',
    authors: ["BastienMe", "kishanprmr", "MoShizzle", "khaledmashaly", "abuaboud"],
    categories: [shared_1.PieceCategory.CONTENT_AND_FILES],
    triggers: [],
    auth: exports.dropboxAuth,
});
//# sourceMappingURL=index.js.map