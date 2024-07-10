export declare const baseUrl = "https://api.openai.com/v1";
export declare const Languages: {
    value: string;
    label: string;
}[];
export declare const billingIssueMessage = "Error Occurred: 429 \n\n1. Ensure that billing is enabled on your OpenAI platform. \n\n2. Generate a new API key. \n\n3. Attempt the process again. \n\nFor guidance, visit: https://beta.openai.com/account/billing";
export declare const unauthorizedMessage = "Error Occurred: 401 \n\nEnsure that your API key is valid. \n";
export declare const sleep: (ms: number) => Promise<unknown>;
export declare const streamToBuffer: (stream: any) => Promise<unknown>;
export declare const calculateTokensFromString: (string: string, model: string) => number;
export declare const calculateMessagesTokenSize: (messages: any[], model: string) => Promise<number>;
export declare const reduceContextSize: (messages: any[], model: string, maxTokens: number) => Promise<any[]>;
export declare const exceedsHistoryLimit: (tokenLength: number, model: string, maxTokens: number) => boolean;
export declare const tokenLimit = 32000;
export declare const modelTokenLimit: (model: string) => 128000 | 8192 | 32768 | 16385 | 4096 | 8001 | 2048;
export declare const notLLMs: string[];
