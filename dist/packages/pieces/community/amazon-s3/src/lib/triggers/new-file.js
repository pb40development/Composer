"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newFile = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_framework_2 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../..");
const common_1 = require("../common");
const polling = {
    strategy: pieces_common_1.DedupeStrategy.LAST_ITEM,
    items: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ auth, lastItemId, propsValue }) {
        var _b;
        const s3 = (0, common_1.createS3)(auth);
        const params = {
            Bucket: auth.bucket,
            MaxKeys: 100,
            StartAfter: lastItemId,
        };
        if (propsValue.folderPath)
            params.Prefix = `${propsValue.folderPath.endsWith('/')
                ? propsValue.folderPath.slice(0, -1)
                : propsValue.folderPath}`;
        const currentValues = (_b = (yield s3.listObjectsV2(params)).Contents) !== null && _b !== void 0 ? _b : [];
        const items = currentValues.map((item) => ({
            id: item.Key,
            data: item,
        }));
        return items;
    }),
};
exports.newFile = (0, pieces_framework_1.createTrigger)({
    auth: __1.amazonS3Auth,
    name: 'new_file',
    displayName: 'New File',
    description: 'Trigger when a new file is uploaded.',
    props: {
        folderPath: pieces_framework_1.Property.ShortText({
            displayName: 'Folder Path',
            required: false,
        }),
    },
    type: pieces_framework_2.TriggerStrategy.POLLING,
    onEnable: (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield pieces_common_1.pollingHelper.onEnable(polling, {
            auth: context.auth,
            store: context.store,
            propsValue: context.propsValue,
        });
    }),
    onDisable: (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield pieces_common_1.pollingHelper.onDisable(polling, {
            auth: context.auth,
            store: context.store,
            propsValue: context.propsValue,
        });
    }),
    run: (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        return yield pieces_common_1.pollingHelper.poll(polling, {
            auth: context.auth,
            store: context.store,
            propsValue: context.propsValue,
        });
    }),
    test: (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        return yield pieces_common_1.pollingHelper.test(polling, {
            auth: context.auth,
            store: context.store,
            propsValue: context.propsValue,
        });
    }),
    sampleData: {
        Key: 'myfolder/100-3.png',
        LastModified: '2023-08-04T13:51:26.000Z',
        ETag: '"e9f16cce12352322272525f5af65a2e"',
        Size: 40239,
        StorageClass: 'STANDARD',
    },
});
//# sourceMappingURL=new-file.js.map