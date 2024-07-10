import { AxiosError } from 'axios';
export declare class HttpError extends Error {
    private readonly _requestBody;
    private readonly _err;
    constructor(_requestBody: unknown, _err: AxiosError);
    errorMessage(): {
        response: {
            status: number;
            body: unknown;
        };
        request: {
            body: unknown;
        };
    };
    get response(): {
        status: number;
        body: unknown;
    };
    get request(): {
        body: unknown;
    };
}
