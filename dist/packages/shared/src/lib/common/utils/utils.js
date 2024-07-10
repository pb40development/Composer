"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickBy = exports.camelCase = exports.startCase = exports.isEmpty = exports.kebabCase = exports.isNil = exports.isString = void 0;
function isString(str) {
    return str != null && typeof str === 'string';
}
exports.isString = isString;
function isNil(value) {
    return value === null || value === undefined;
}
exports.isNil = isNil;
function kebabCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Handle camelCase by adding hyphen between lowercase and uppercase letters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/_/g, '-') // Replace underscores with hyphens
        .toLowerCase() // Convert to lowercase
        .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
}
exports.kebabCase = kebabCase;
function isEmpty(value) {
    if (value == null) {
        return true;
    }
    if (typeof value === 'string' || Array.isArray(value)) {
        return value.length === 0;
    }
    if (typeof value === 'object') {
        return Object.keys(value).length === 0;
    }
    return false;
}
exports.isEmpty = isEmpty;
function startCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/[_-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/^[a-z]/, match => match.toUpperCase())
        .replace(/\b[a-z]/g, match => match.toUpperCase());
}
exports.startCase = startCase;
function camelCase(str) {
    return str
        .replace(/([-_][a-z])/g, group => group.toUpperCase()
        .replace('-', '')
        .replace('_', ''));
}
exports.camelCase = camelCase;
function pickBy(object, predicate) {
    return Object.keys(object).reduce((result, key) => {
        if (predicate(object[key], key)) {
            result[key] = object[key];
        }
        return result;
    }, {});
}
exports.pickBy = pickBy;
//# sourceMappingURL=utils.js.map