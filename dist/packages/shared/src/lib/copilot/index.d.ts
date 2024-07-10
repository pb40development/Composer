import { Static } from '@sinclair/typebox';
export declare const GenerateCodeRequest: import("@sinclair/typebox").TObject<{
    prompt: import("@sinclair/typebox").TString<string>;
}>;
export type GenerateCodeRequest = Static<typeof GenerateCodeRequest>;
export declare const GenerateCodeResponse: import("@sinclair/typebox").TObject<{
    result: import("@sinclair/typebox").TString<string>;
}>;
export type GenerateCodeResponse = Static<typeof GenerateCodeResponse>;
