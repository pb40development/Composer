import { Static } from '@sinclair/typebox';
export declare const SignUpRequest: import("@sinclair/typebox").TObject<{
    email: import("@sinclair/typebox").TString<"email">;
    password: import("@sinclair/typebox").TString<string>;
    firstName: import("@sinclair/typebox").TString<string>;
    lastName: import("@sinclair/typebox").TString<string>;
    trackEvents: import("@sinclair/typebox").TBoolean;
    newsLetter: import("@sinclair/typebox").TBoolean;
    referringUserId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type SignUpRequest = Static<typeof SignUpRequest>;
