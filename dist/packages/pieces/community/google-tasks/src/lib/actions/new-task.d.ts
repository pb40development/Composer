export declare const googleTasksAddNewTaskAction: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").OAuth2Property<import("@activepieces/pieces-framework").OAuth2Props>, {
    tasks_list: import("@activepieces/pieces-framework").DropdownProperty<string, false> | import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    title: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    notes: import("@activepieces/pieces-framework").LongTextProperty<false>;
    completed: import("@activepieces/pieces-framework").CheckboxProperty<false>;
}>;
