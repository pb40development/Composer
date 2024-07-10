import { Static } from '@sinclair/typebox';
export declare const FileResponseInterface: import("@sinclair/typebox").TObject<{
    base64Url: import("@sinclair/typebox").TString<string>;
    fileName: import("@sinclair/typebox").TString<string>;
    extension: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type FileResponseInterface = Static<typeof FileResponseInterface>;
