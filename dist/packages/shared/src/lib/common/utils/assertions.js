"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotUndefined = exports.assertNotEqual = exports.assertNotNullOrUndefined = exports.assertEqual = void 0;
function assertEqual(actual, expected, fieldName1, fieldName2) {
    if (actual !== expected) {
        throw new Error(`${fieldName1} and ${fieldName2} should be equal`);
    }
}
exports.assertEqual = assertEqual;
function assertNotNullOrUndefined(value, fieldName) {
    if (value === null || value === undefined) {
        throw new Error(`${fieldName} is null or undefined`);
    }
}
exports.assertNotNullOrUndefined = assertNotNullOrUndefined;
function assertNotEqual(value1, value2, fieldName1, fieldName2) {
    if (value1 === value2) {
        throw new Error(`${fieldName1} and ${fieldName2} should not be equal`);
    }
}
exports.assertNotEqual = assertNotEqual;
const isNotUndefined = (value) => {
    return value !== undefined;
};
exports.isNotUndefined = isNotUndefined;
//# sourceMappingURL=assertions.js.map