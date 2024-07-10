import { ProcessorFn } from './types';
import { ApFile } from '../property/input/file-property';
export declare class Processors {
    static json: ProcessorFn<string | undefined | null, unknown | undefined>;
    static number: ProcessorFn<string | number | undefined | null, number | null | undefined>;
    static string: ProcessorFn<string | number | undefined | null, string | null | undefined>;
    static datetime: ProcessorFn<number | string | undefined | null, string | undefined>;
    static file: ProcessorFn<unknown, Promise<ApFile | null>>;
}
