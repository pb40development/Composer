export declare const googleSheetsCommon: {
    baseUrl: string;
    include_team_drives: import("@activepieces/pieces-framework").CheckboxProperty<false>;
    spreadsheet_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    sheet_id: import("@activepieces/pieces-framework").DropdownProperty<number, true>;
    values: import("@activepieces/pieces-framework").DynamicProperties<true>;
    columnName: import("@activepieces/pieces-framework").DropdownProperty<string, true> | import("@activepieces/pieces-framework").DropdownProperty<string, false>;
    getValues: typeof getValues;
    appendGoogleSheetValues: typeof appendGoogleSheetValues;
    updateGoogleSheetRow: typeof updateGoogleSheetRow;
    findSheetName: typeof findSheetName;
    deleteRow: typeof deleteRow;
    clearSheet: typeof clearSheet;
};
type UpdateGoogleSheetRowParams = {
    values: string[];
    spreadSheetId: string;
    valueInputOption: ValueInputOption;
    rowIndex: number;
    accessToken: string;
    sheetName: string;
};
type AppendGoogleSheetValuesParams = {
    values: string[];
    spreadSheetId: string;
    range: string;
    valueInputOption: ValueInputOption;
    majorDimension: Dimension;
    accessToken: string;
};
export declare function findSheetName(access_token: string, spreadsheetId: string, sheetId: number): Promise<string>;
export declare function getGoogleSheetRows(params: {
    accessToken: string;
    sheetName: string;
    spreadSheetId: string;
    rowIndex_s: number;
    rowIndex_e: number;
}): Promise<{
    row: number;
    values: any;
}[]>;
export declare function getAllGoogleSheetRows(params: {
    accessToken: string;
    sheetName: string;
    spreadSheetId: string;
}): Promise<{
    row: number;
    values: any;
}[]>;
declare function updateGoogleSheetRow(params: UpdateGoogleSheetRowParams): Promise<import("@activepieces/pieces-common").HttpResponse<any>>;
declare function appendGoogleSheetValues(params: AppendGoogleSheetValuesParams): Promise<import("@activepieces/pieces-common").HttpResponse<any>>;
declare function getValues(spreadsheetId: string, accessToken: string, sheetId: number): Promise<{
    row: number;
    values: {
        [x: string]: string[];
    }[];
}[]>;
export declare const columnToLabel: (columnIndex: number) => string;
export declare const labelToColumn: (label: string) => number;
export declare function objectToArray(obj: {
    [x: string]: any;
}): any[];
export declare function stringifyArray(object: unknown[]): string[];
declare function deleteRow(spreadsheetId: string, sheetId: number, rowIndex: number, accessToken: string): Promise<void>;
declare function clearSheet(spreadsheetId: string, sheetId: number, accessToken: string, rowIndex: number, numOfRows: number): Promise<void>;
export declare enum ValueInputOption {
    RAW = "RAW",
    USER_ENTERED = "USER_ENTERED"
}
export declare enum Dimension {
    ROWS = "ROWS",
    COLUMNS = "COLUMNS"
}
export {};
