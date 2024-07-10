import { Static } from '@sinclair/typebox';
import { ApId } from '../common/id-generator';
export type UserId = ApId;
export declare enum PlatformRole {
    ADMIN = "ADMIN",
    MEMBER = "MEMBER"
}
export declare enum UserStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}
export declare const EmailType: import("@sinclair/typebox").TString<"email">;
export declare const PasswordType: import("@sinclair/typebox").TString<string>;
export declare const User: import("@sinclair/typebox").TObject<{
    email: import("@sinclair/typebox").TString<string>;
    firstName: import("@sinclair/typebox").TString<string>;
    lastName: import("@sinclair/typebox").TString<string>;
    trackEvents: import("@sinclair/typebox").TBoolean;
    newsLetter: import("@sinclair/typebox").TBoolean;
    password: import("@sinclair/typebox").TString<string>;
    verified: import("@sinclair/typebox").TBoolean;
    platformRole: import("@sinclair/typebox").TEnum<typeof PlatformRole>;
    status: import("@sinclair/typebox").TEnum<typeof UserStatus>;
    externalId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    platformId: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TNull]>;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
}>;
export type User = Static<typeof User>;
export declare const UserMeta: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    email: import("@sinclair/typebox").TString<string>;
    firstName: import("@sinclair/typebox").TString<string>;
    platformId: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TNull]>;
    platformRole: import("@sinclair/typebox").TEnum<typeof PlatformRole>;
    lastName: import("@sinclair/typebox").TString<string>;
}>;
export type UserMeta = Static<typeof UserMeta>;
