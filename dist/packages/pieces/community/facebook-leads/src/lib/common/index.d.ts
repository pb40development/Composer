export declare const facebookLeadsCommon: {
    baseUrl: string;
    page: import("@activepieces/pieces-framework").DropdownProperty<unknown, true>;
    form: import("@activepieces/pieces-framework").DropdownProperty<unknown, false>;
    subscribePageToApp: (pageId: any, accessToken: string) => Promise<void>;
    getPages: (accessToken: string) => Promise<any>;
    getPageForms: (pageId: string, accessToken: string) => Promise<any>;
    getLeadDetails: (leadId: string, accessToken: string) => Promise<any>;
    loadSampleData: (formId: string, accessToken: string) => Promise<any>;
};
export interface FacebookOAuth2 {
    access_token: string;
    expires_in: number;
    claimed_at: number;
    scope: string;
    client_id: string;
    token_type: string;
    data: object;
    authorization_method: string;
    code: string;
    type: string;
    redirect_url: string;
    token_url: string;
}
export interface FacebookPage {
    id: string;
    name: string;
    category: string;
    category_list: string[];
    access_token: string;
    tasks: string[];
}
export interface FacebookPageDropdown {
    id: string;
    accessToken: string;
}
export interface FacebookForm {
    id: string;
    locale: string;
    name: string;
    status: string;
}
