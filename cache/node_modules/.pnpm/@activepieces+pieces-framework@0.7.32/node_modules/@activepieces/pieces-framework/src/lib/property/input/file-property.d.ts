/// <reference types="node" />
import { ValidationInputType } from "../../validators/types";
import { BasePropertySchema, TPropertyValue } from "./common";
import { PropertyType } from "./property-type";
export declare class ApFile {
    filename: string;
    data: Buffer;
    extension?: string | undefined;
    constructor(filename: string, data: Buffer, extension?: string | undefined);
    get base64(): string;
}
export declare const FileProperty: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>;
export type FileProperty<R extends boolean> = BasePropertySchema & TPropertyValue<ApFile, PropertyType.FILE, ValidationInputType.FILE, R>;
