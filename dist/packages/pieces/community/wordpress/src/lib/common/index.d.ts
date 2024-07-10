export type WordPressMedia = {
    id: string;
    title: {
        rendered: string;
    };
};
export declare const wordpressCommon: {
    featured_media_file: import("@activepieces/pieces-framework").FileProperty<false>;
    authors: import("@activepieces/pieces-framework").DropdownProperty<string, false>;
    tags: import("@activepieces/pieces-framework").MultiSelectDropdownProperty<string, false>;
    categories: import("@activepieces/pieces-framework").MultiSelectDropdownProperty<string, false>;
    featured_media: import("@activepieces/pieces-framework").DropdownProperty<string, false>;
    status: import("@activepieces/pieces-framework").StaticDropdownProperty<string, false>;
    post: import("@activepieces/pieces-framework").DropdownProperty<number, true>;
    getPosts(params: {
        websiteUrl: string;
        username: string;
        password: string;
        authors: string | undefined;
        afterDate: string;
        page: number;
    }): Promise<{
        posts: {
            date: string;
        }[];
        totalPages: number;
    }>;
    getMedia(params: {
        websiteUrl: string;
        username: string;
        password: string;
        page: number;
    }): Promise<{
        media: WordPressMedia[];
        totalPages: number;
    }>;
    getTags(params: {
        websiteUrl: string;
        username: string;
        password: string;
        page: number;
    }): Promise<{
        tags: {
            id: string;
            name: string;
        }[];
        totalPages: number;
    }>;
    getCategories(params: {
        websiteUrl: string;
        username: string;
        password: string;
        page: number;
    }): Promise<{
        categories: {
            id: string;
            name: string;
        }[];
        totalPages: number;
    }>;
    urlExists(url: string): Promise<boolean>;
    isBaseUrl(urlString: string): Promise<boolean>;
};
