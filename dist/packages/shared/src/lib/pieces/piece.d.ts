import { Static } from '@sinclair/typebox';
export declare enum PackageType {
    ARCHIVE = "ARCHIVE",
    REGISTRY = "REGISTRY"
}
export declare enum PieceType {
    CUSTOM = "CUSTOM",
    OFFICIAL = "OFFICIAL"
}
export declare const PrivatePiecePackage: import("@sinclair/typebox").TObject<{
    packageType: import("@sinclair/typebox").TLiteral<PackageType.ARCHIVE>;
    pieceType: import("@sinclair/typebox").TEnum<typeof PieceType>;
    pieceName: import("@sinclair/typebox").TString<string>;
    pieceVersion: import("@sinclair/typebox").TString<string>;
    archiveId: import("@sinclair/typebox").TString<string>;
    archive: import("@sinclair/typebox").TUnknown;
}>;
export type PrivatePiecePackage = Static<typeof PrivatePiecePackage>;
export declare const PublicPiecePackage: import("@sinclair/typebox").TObject<{
    packageType: import("@sinclair/typebox").TLiteral<PackageType.REGISTRY>;
    pieceType: import("@sinclair/typebox").TEnum<typeof PieceType>;
    pieceName: import("@sinclair/typebox").TString<string>;
    pieceVersion: import("@sinclair/typebox").TString<string>;
}>;
export type PublicPiecePackage = Static<typeof PublicPiecePackage>;
export type PiecePackage = PrivatePiecePackage | PublicPiecePackage;
export declare enum PieceCategory {
    ARTIFICIAL_INTELLIGENCE = "ARTIFICIAL_INTELLIGENCE",
    COMMUNICATION = "COMMUNICATION",
    COMMERCE = "COMMERCE",
    CORE = "CORE",
    BUSINESS_INTELLIGENCE = "BUSINESS_INTELLIGENCE",
    ACCOUNTING = "ACCOUNTING",
    PRODUCTIVITY = "PRODUCTIVITY",
    CONTENT_AND_FILES = "CONTENT_AND_FILES",
    DEVELOPER_TOOLS = "DEVELOPER_TOOLS",
    CUSTOMER_SUPPORT = "CUSTOMER_SUPPORT",
    FORMS_AND_SURVEYS = "FORMS_AND_SURVEYS",
    HUMAN_RESOURCES = "HUMAN_RESOURCES",
    PAYMENT_PROCESSING = "PAYMENT_PROCESSING",
    MARKETING = "MARKETING",
    SALES_AND_CRM = "SALES_AND_CRM",
    PREMIUM = "PREMIUM"
}
