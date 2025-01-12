import { Static } from '@sinclair/typebox';
export declare const SignInRequest: import("@sinclair/typebox").TObject<{
    email: import("@sinclair/typebox").TString<"email">;
    password: import("@sinclair/typebox").TString<string>;
}>;
export type SignInRequest = Static<typeof SignInRequest>;
