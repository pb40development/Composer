/// <reference types="node" />
import { Static } from '@sinclair/typebox';
import { ApId } from '../common/id-generator';
import { FileCompression } from './file-compression';
import { FileType } from './file-type';
export type FileId = ApId;
export declare const File: import("@sinclair/typebox").TObject<{
    projectId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    platformId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    type: import("@sinclair/typebox").TEnum<typeof FileType>;
    compression: import("@sinclair/typebox").TEnum<typeof FileCompression>;
    data: import("@sinclair/typebox").TUnknown;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
}>;
export type File = Static<typeof File> & {
    data: Buffer;
};
