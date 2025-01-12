import { Static } from '@sinclair/typebox';
import { ProjectMemberRole } from '../project';
import { PlatformRole } from '../user/index';
export declare enum InvitationType {
    PLATFORM = "PLATFORM",
    PROJECT = "PROJECT"
}
export declare enum InvitationStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED"
}
export declare const UserInvitation: import("@sinclair/typebox").TObject<{
    email: import("@sinclair/typebox").TString<string>;
    status: import("@sinclair/typebox").TEnum<typeof InvitationStatus>;
    type: import("@sinclair/typebox").TEnum<typeof InvitationType>;
    platformId: import("@sinclair/typebox").TString<string>;
    platformRole: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TEnum<typeof PlatformRole>, import("@sinclair/typebox").TNull]>>;
    projectId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<string | null>>;
    projectRole: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TEnum<typeof ProjectMemberRole>, import("@sinclair/typebox").TNull]>>;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
}>;
export type UserInvitation = Static<typeof UserInvitation>;
export declare const UserInvitationWithLink: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    email: import("@sinclair/typebox").TString<string>;
    status: import("@sinclair/typebox").TEnum<typeof InvitationStatus>;
    type: import("@sinclair/typebox").TEnum<typeof InvitationType>;
    platformId: import("@sinclair/typebox").TString<string>;
    platformRole: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TEnum<typeof PlatformRole>, import("@sinclair/typebox").TNull]>>;
    projectId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<string | null>>;
    projectRole: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TEnum<typeof ProjectMemberRole>, import("@sinclair/typebox").TNull]>>;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
}>, import("@sinclair/typebox").TObject<{
    link: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>]>;
export type UserInvitationWithLink = Static<typeof UserInvitationWithLink>;
export declare const SendUserInvitationRequest: import("@sinclair/typebox").TObject<{
    email: import("@sinclair/typebox").TString<string>;
    type: import("@sinclair/typebox").TEnum<typeof InvitationType>;
    platformRole: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof PlatformRole>>;
    projectId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<string | null>>;
    projectRole: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof ProjectMemberRole>>;
}>;
export type SendUserInvitationRequest = Static<typeof SendUserInvitationRequest>;
export declare const AcceptUserInvitationRequest: import("@sinclair/typebox").TObject<{
    invitationToken: import("@sinclair/typebox").TString<string>;
}>;
export type AcceptUserInvitationRequest = Static<typeof AcceptUserInvitationRequest>;
export declare const ListUserInvitationsRequest: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    cursor: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    type: import("@sinclair/typebox").TEnum<typeof InvitationType>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof InvitationStatus>>;
}>;
export type ListUserInvitationsRequest = Static<typeof ListUserInvitationsRequest>;
