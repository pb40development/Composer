export declare const slackInfo: import("dist/packages/pieces/community/framework/src/lib/property/input/markdown-property").MarkDownProperty;
export declare const slackChannel: <R extends boolean>(required: R) => R extends true ? import("@activepieces/pieces-framework").DropdownProperty<string, true> : import("@activepieces/pieces-framework").DropdownProperty<string, false>;
export declare const username: import("@activepieces/pieces-framework").ShortTextProperty<false>;
export declare const profilePicture: import("@activepieces/pieces-framework").ShortTextProperty<false>;
export declare const blocks: import("@activepieces/pieces-framework").JsonProperty<false>;
export declare const userId: import("@activepieces/pieces-framework").DropdownProperty<string, false> | import("@activepieces/pieces-framework").DropdownProperty<string, true>;
export declare const text: import("@activepieces/pieces-framework").LongTextProperty<true>;
export declare const actions: import("@activepieces/pieces-framework").ArrayProperty<true>;
