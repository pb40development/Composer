export declare function isString(str: unknown): str is string;
export declare function isNil<T>(value: T | null | undefined): value is null | undefined;
export declare function kebabCase(str: string): string;
export declare function isEmpty<T>(value: T | null | undefined): boolean;
export declare function startCase(str: string): string;
export declare function camelCase(str: string): string;
export declare function pickBy<T extends Record<string, unknown>>(object: T, predicate: (value: T[keyof T], key: keyof T) => boolean): Partial<T>;
