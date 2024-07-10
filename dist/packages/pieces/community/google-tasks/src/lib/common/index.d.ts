import { OAuth2PropertyValue } from '@activepieces/pieces-framework';
export declare enum TaskStatus {
    NEEDS_ACTION = "needsAction",
    COMPLETED = "completed"
}
/**
 * @see https://developers.google.com/tasks/reference/rest/v1/tasklists/list#response-body
 */
export type TasksListResponse = {
    kind: string;
    etag: string;
    nextPageToken: string;
    items: TasksList[];
};
/**
 * @see https://developers.google.com/tasks/reference/rest/v1/tasklists#resource:-tasklist
 */
export type TasksList = {
    kind: string;
    id: string;
    etag: string;
    title: string;
    updated: string;
    selfLink: string;
};
/**
 * @see https://developers.google.com/tasks/reference/rest/v1/tasks#resource:-task
 */
export type Task = {
    kind: 'tasks#task';
    title: string;
    status: TaskStatus;
    notes?: string;
    /**
     * *Optional* RFC 3339 timestamp of due date of the task
     */
    due?: string;
    /**
     * *Optional* RFC 3339 timestamp of completion.
     * Filled automatically if `status === 'completed'`
     */
    completed?: string;
};
export declare const googleTasksCommon: {
    baseUrl: string;
    /**
     * @property Target task list ID where the new task will be created
     */
    tasksList: import("@activepieces/pieces-framework").DropdownProperty<string, false> | import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    title: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    notes: import("@activepieces/pieces-framework").LongTextProperty<false>;
    completed: import("@activepieces/pieces-framework").CheckboxProperty<false>;
};
export declare function getLists(authProp: OAuth2PropertyValue): Promise<TasksList[]>;
export declare function getTasks(authProp: OAuth2PropertyValue, tasklist: string): Promise<TasksList[]>;
export declare function createTask(authProp: OAuth2PropertyValue, taskListId: string, task: Task): Promise<import("@activepieces/pieces-common").HttpResponse<any>>;
