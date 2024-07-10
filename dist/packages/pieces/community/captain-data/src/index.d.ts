export declare const CAPTAIN_DATA_BASE_URL = "https://api.captaindata.co/v3";
export declare const captainDataAuth: import("@activepieces/pieces-framework").CustomAuthProperty<{
    apiKey: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    projectId: import("@activepieces/pieces-framework").ShortTextProperty<true>;
}>;
export type CaptainDataAuthType = {
    apiKey: string;
    projectId: string;
};
export declare const captainData: import("@activepieces/pieces-framework").Piece<import("@activepieces/pieces-framework").CustomAuthProperty<{
    apiKey: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    projectId: import("@activepieces/pieces-framework").ShortTextProperty<true>;
}>>;
