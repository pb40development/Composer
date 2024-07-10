export declare const githubCommon: {
    baseUrl: string;
    repositoryDropdown: import("@activepieces/pieces-framework").DropdownProperty<{
        repo: string;
        owner: string;
    }, false> | import("@activepieces/pieces-framework").DropdownProperty<{
        repo: string;
        owner: string;
    }, true>;
    assigneeDropDown: (required?: boolean) => import("@activepieces/pieces-framework").MultiSelectDropdownProperty<string, false> | import("@activepieces/pieces-framework").MultiSelectDropdownProperty<string, true>;
    labelDropDown: (required?: boolean) => import("@activepieces/pieces-framework").MultiSelectDropdownProperty<string, false> | import("@activepieces/pieces-framework").MultiSelectDropdownProperty<string, true>;
};
export interface GithubRepository {
    name: string;
    owner: {
        login: string;
    };
}
export interface GithubAssignee {
    login: string;
}
export interface GithubIssueLabel {
    id: string;
    name: string;
}
export interface RepositoryProp {
    repo: string;
    owner: string;
}
