import { googleSheetsAuth } from '../..';
import { PiecePropValueSchema } from '@activepieces/pieces-framework';
export declare function getWorkSheetName(auth: PiecePropValueSchema<typeof googleSheetsAuth>, spreadSheetId: string, sheetId: number): Promise<string>;
export declare function getWorkSheetValues(auth: PiecePropValueSchema<typeof googleSheetsAuth>, spreadsheetId: string, range?: string): Promise<any[][]>;
export declare function createFileNotification(auth: PiecePropValueSchema<typeof googleSheetsAuth>, fileId: string, url: string): Promise<import("googleapis-common").GaxiosResponse<import("googleapis").drive_v3.Schema$Channel>>;
export declare function deleteFileNotification(auth: PiecePropValueSchema<typeof googleSheetsAuth>, channelId: string, resourceId: string): Promise<import("googleapis-common").GaxiosResponse<void>>;
export declare function isSyncMessage(headers: Record<string, string>): boolean;
export declare function isChangeContentMessage(headers: Record<string, string>): boolean;
export declare function hashObject(obj: Record<string, unknown>): string;
export declare function transformWorkSheetValues(rowValues: any[][], oldRowCount: number): {
    row: number;
    values: any;
}[];
export interface WebhookInformation {
    kind?: string | null;
    id?: string | null;
    resourceId?: string | null;
    resourceUri?: string | null;
    expiration?: string | null;
}
