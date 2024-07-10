import { S3 } from '@aws-sdk/client-s3';
export declare function createS3(auth: {
    accessKeyId: string;
    secretAccessKey: string;
    region: string | undefined;
    endpoint: string | undefined;
}): S3;
