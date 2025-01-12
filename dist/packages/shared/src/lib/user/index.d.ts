import { Static } from '@sinclair/typebox';
import { PlatformRole, UserStatus } from './user';
export * from './user-dto';
export * from './user';
export declare const UpdateUserRequestBody: import("@sinclair/typebox").TObject<{
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof UserStatus>>;
    platformRole: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof PlatformRole>>;
}>;
export type UpdateUserRequestBody = Static<typeof UpdateUserRequestBody>;
