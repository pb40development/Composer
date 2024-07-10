export declare const BasePieceAuthSchema: import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type BasePieceAuthSchema<AuthValueSchema> = {
    displayName: string;
    description?: string;
    validate?: (params: {
        auth: AuthValueSchema;
    }) => Promise<{
        valid: true;
    } | {
        valid: false;
        error: string;
    }>;
};
