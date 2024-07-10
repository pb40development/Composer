"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpRequest = void 0;
const typebox_1 = require("@sinclair/typebox");
const id_generator_1 = require("../../common/id-generator");
const user_1 = require("../../user/user");
exports.SignUpRequest = typebox_1.Type.Object({
    email: user_1.EmailType,
    password: user_1.PasswordType,
    firstName: typebox_1.Type.String(),
    lastName: typebox_1.Type.String(),
    trackEvents: typebox_1.Type.Boolean(),
    newsLetter: typebox_1.Type.Boolean(),
    referringUserId: typebox_1.Type.Optional(id_generator_1.ApId),
});
//# sourceMappingURL=sign-up-request.js.map