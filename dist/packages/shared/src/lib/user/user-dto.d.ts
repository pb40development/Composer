import { Static } from '@sinclair/typebox';
export declare const UserResponse: import("@sinclair/typebox").TObject<{
    email: import("@sinclair/typebox").TString<string>;
    platformId: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TNull]>;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
    status: import("@sinclair/typebox").TEnum<typeof import("./user").UserStatus>;
    firstName: import("@sinclair/typebox").TString<string>;
    lastName: import("@sinclair/typebox").TString<string>;
    trackEvents: import("@sinclair/typebox").TBoolean;
    newsLetter: import("@sinclair/typebox").TBoolean;
    verified: import("@sinclair/typebox").TBoolean;
    platformRole: import("@sinclair/typebox").TEnum<typeof import("./user").PlatformRole>;
    externalId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type UserResponse = Static<typeof UserResponse>;
