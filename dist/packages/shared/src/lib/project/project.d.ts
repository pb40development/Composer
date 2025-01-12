import { Static } from '@sinclair/typebox';
import { ApId } from '../common/id-generator';
export declare const ListProjectRequestForUserQueryParams: import("@sinclair/typebox").TObject<{
    cursor: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export type ListProjectRequestForUserQueryParams = Static<typeof ListProjectRequestForUserQueryParams>;
export type ProjectId = ApId;
export declare enum PiecesFilterType {
    NONE = "NONE",
    ALLOWED = "ALLOWED"
}
export declare enum NotificationStatus {
    NEVER = "NEVER",
    ALWAYS = "ALWAYS",
    NEW_ISSUE = "NEW_ISSUE"
}
export declare const ProjectUsage: import("@sinclair/typebox").TObject<{
    tasks: import("@sinclair/typebox").TNumber;
    teamMembers: import("@sinclair/typebox").TNumber;
}>;
export type ProjectUsage = Static<typeof ProjectUsage>;
export type ProjectPlanId = string;
export declare const ProjectPlan: import("@sinclair/typebox").TObject<{
    projectId: import("@sinclair/typebox").TString<string>;
    name: import("@sinclair/typebox").TString<string>;
    minimumPollingInterval: import("@sinclair/typebox").TNumber;
    piecesFilterType: import("@sinclair/typebox").TEnum<typeof PiecesFilterType>;
    pieces: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    connections: import("@sinclair/typebox").TNumber;
    teamMembers: import("@sinclair/typebox").TNumber;
    tasks: import("@sinclair/typebox").TNumber;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
}>;
export type ProjectPlan = Static<typeof ProjectPlan>;
export declare const Project: import("@sinclair/typebox").TObject<{
    deleted: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<string | null>>;
    ownerId: import("@sinclair/typebox").TString<string>;
    displayName: import("@sinclair/typebox").TString<string>;
    notifyStatus: import("@sinclair/typebox").TEnum<typeof NotificationStatus>;
    platformId: import("@sinclair/typebox").TString<string>;
    externalId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
}>;
export type Project = Static<typeof Project>;
export declare const ProjectWithLimits: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    platformId: import("@sinclair/typebox").TString<string>;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
    externalId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    displayName: import("@sinclair/typebox").TString<string>;
    ownerId: import("@sinclair/typebox").TString<string>;
    notifyStatus: import("@sinclair/typebox").TEnum<typeof NotificationStatus>;
}>, import("@sinclair/typebox").TObject<{
    usage: import("@sinclair/typebox").TObject<{
        tasks: import("@sinclair/typebox").TNumber;
        teamMembers: import("@sinclair/typebox").TNumber;
    }>;
    plan: import("@sinclair/typebox").TObject<{
        projectId: import("@sinclair/typebox").TString<string>;
        name: import("@sinclair/typebox").TString<string>;
        minimumPollingInterval: import("@sinclair/typebox").TNumber;
        piecesFilterType: import("@sinclair/typebox").TEnum<typeof PiecesFilterType>;
        pieces: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        connections: import("@sinclair/typebox").TNumber;
        teamMembers: import("@sinclair/typebox").TNumber;
        tasks: import("@sinclair/typebox").TNumber;
        id: import("@sinclair/typebox").TString<string>;
        created: import("@sinclair/typebox").TString<string>;
        updated: import("@sinclair/typebox").TString<string>;
    }>;
}>]>;
export declare const UpdateProjectRequestInCommunity: import("@sinclair/typebox").TObject<{
    notifyStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof NotificationStatus>>;
    displayName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type UpdateProjectRequestInCommunity = Static<typeof UpdateProjectRequestInCommunity>;
export type ProjectWithLimits = Static<typeof ProjectWithLimits>;
