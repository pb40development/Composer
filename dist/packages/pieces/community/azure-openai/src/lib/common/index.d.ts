export declare const calculateTokensFromString: (string: string, model: string) => number;
export declare const calculateMessagesTokenSize: (messages: string[], model: string) => Promise<number>;
export declare const reduceContextSize: (messages: string[], model: string, maxTokens: number) => Promise<string[]>;
export declare const exceedsHistoryLimit: (tokenLength: number, model: string, maxTokens: number) => boolean;
export declare const tokenLimit = 32000;
export declare const modelTokenLimit: (model: string) => number;
