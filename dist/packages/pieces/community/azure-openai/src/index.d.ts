export declare const azureOpenaiAuth: import("@activepieces/pieces-framework").CustomAuthProperty<{
    endpoint: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@activepieces/pieces-framework").SecretTextProperty<true>;
}>;
export type AzureOpenAIAuth = {
    endpoint: string;
    apiKey: string;
    deploymentId: string;
};
export declare const azureOpenai: import("@activepieces/pieces-framework").Piece<import("@activepieces/pieces-framework").PieceAuthProperty>;
