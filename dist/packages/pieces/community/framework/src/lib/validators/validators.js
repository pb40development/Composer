"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatErrorMessage = exports.Validators = exports.ErrorMessages = void 0;
const tslib_1 = require("tslib");
const dayjs_1 = tslib_1.__importDefault(require("dayjs"));
const errors_1 = require("./errors");
Object.defineProperty(exports, "ErrorMessages", { enumerable: true, get: function () { return errors_1.ErrorMessages; } });
const types_1 = require("./types");
const utils_1 = require("./utils");
Object.defineProperty(exports, "formatErrorMessage", { enumerable: true, get: function () { return utils_1.formatErrorMessage; } });
const shared_1 = require("@activepieces/shared");
class Validators {
    static pattern(regex) {
        return {
            type: types_1.ValidationInputType.STRING,
            fn: (property, processedValue, userInput) => {
                if ((0, shared_1.isEmpty)(processedValue))
                    return null;
                if (typeof regex === 'string') {
                    regex = new RegExp(regex);
                }
                return regex.test(String(processedValue))
                    ? null
                    : (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.REGEX, {
                        property: property === null || property === void 0 ? void 0 : property.displayName,
                    });
            },
        };
    }
    static prohibitPattern(regex) {
        return {
            type: types_1.ValidationInputType.STRING,
            fn: (property, processedValue, userInput) => {
                const patternValidator = Validators.pattern(regex);
                const patternError = patternValidator.fn(property, processedValue, userInput);
                return patternError
                    ? null
                    : (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.PROHIBIT_REGEX, {
                        property: property.displayName,
                    });
            },
        };
    }
    static maxLength(max) {
        return {
            type: types_1.ValidationInputType.STRING,
            fn: (property, processedValue, userInput) => {
                if ((0, shared_1.isEmpty)(processedValue))
                    return null;
                const isValid = processedValue.length <= max;
                if (!isValid) {
                    return (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.MAX_LENGTH, {
                        userInput,
                        length: max.toString(),
                    });
                }
                return null;
            },
        };
    }
    static minLength(min) {
        return {
            type: types_1.ValidationInputType.STRING,
            fn: (property, processedValue, userInput) => {
                if ((0, shared_1.isEmpty)(processedValue))
                    return null;
                const isValid = processedValue.length >= min;
                if (!isValid) {
                    return (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.MIN_LENGTH, {
                        userInput,
                        length: min.toString(),
                    });
                }
                return null;
            },
        };
    }
    static minValue(min) {
        return {
            type: types_1.ValidationInputType.NUMBER,
            fn: (property, processedValue, userInput) => {
                const isValid = Number(processedValue) >= min;
                if (isValid)
                    return null;
                return (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.MIN, { userInput, min });
            },
        };
    }
    static maxValue(max) {
        return {
            type: types_1.ValidationInputType.NUMBER,
            fn: (property, processedValue, userInput) => {
                const isValid = Number(processedValue) <= max;
                if (isValid)
                    return null;
                return (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.MAX, { userInput, max });
            },
        };
    }
    static minDate(min, unit = 'day', includeBounds = false) {
        return {
            type: types_1.ValidationInputType.DATE_TIME,
            fn: (property, processedValue, userInput) => {
                const dateValue = (0, dayjs_1.default)(processedValue);
                const minDate = (0, dayjs_1.default)(min);
                if (!minDate.isValid())
                    return null;
                const isValid = includeBounds
                    ? dateValue.isAfter(minDate, unit)
                    : dateValue.isSame(minDate, unit) && dateValue.isAfter(minDate, unit);
                if (isValid)
                    return null;
                return (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.MIN_DATE, {
                    userInput: dateValue.toISOString(),
                    min: minDate.toISOString(),
                });
            },
        };
    }
    static maxDate(max, unit = 'day', includeBounds = false) {
        return {
            type: types_1.ValidationInputType.DATE_TIME,
            fn: (property, processedValue, userInput) => {
                const dateValue = (0, dayjs_1.default)(processedValue);
                const maxDate = (0, dayjs_1.default)(max);
                if (!maxDate.isValid())
                    return null;
                const isValid = includeBounds
                    ? dateValue.isBefore(maxDate, unit)
                    : dateValue.isSame(maxDate, unit) &&
                        dateValue.isBefore(maxDate, unit);
                if (isValid)
                    return null;
                return (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.MAX_DATE, {
                    userInput: dateValue.toISOString(),
                    max: maxDate.toISOString(),
                });
            },
        };
    }
    static inRange(min, max) {
        return {
            type: types_1.ValidationInputType.NUMBER,
            fn: (property, processedValue, userInput) => {
                const numericValue = Number(processedValue);
                const isValid = numericValue <= max && numericValue >= min;
                if (isValid)
                    return null;
                return (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.IN_RANGE, {
                    userInput,
                    min,
                    max,
                });
            },
        };
    }
    static inDateRange(min, max, unit = 'day', includeBounds = false) {
        return {
            type: types_1.ValidationInputType.DATE_TIME,
            fn: (property, processedValue) => {
                const dateValue = (0, dayjs_1.default)(processedValue);
                const minDate = (0, dayjs_1.default)(min);
                const maxDate = (0, dayjs_1.default)(max);
                const validRanges = minDate.isValid() && maxDate.isValid();
                if (!validRanges)
                    return null;
                const isValid = includeBounds
                    ? (dateValue.isBefore(maxDate, unit) ||
                        dateValue.isSame(maxDate, unit)) &&
                        (dateValue.isAfter(minDate, unit) ||
                            dateValue.isSame(minDate, unit))
                    : dateValue.isBefore(maxDate, unit) &&
                        dateValue.isAfter(minDate, unit);
                if (isValid)
                    return null;
                return (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.IN_RANGE, {
                    userInput: dateValue.toISOString(),
                    min: minDate.toISOString(),
                    max: maxDate.toISOString(),
                });
            },
        };
    }
    static oneOf(values) {
        return {
            type: types_1.ValidationInputType.ANY,
            fn: (property, processedValue, userInput) => {
                if (Array.isArray(values)) {
                    return values.includes(processedValue)
                        ? null
                        : (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.ONE_OF, {
                            userInput,
                            choices: values,
                        });
                }
                return null;
            },
        };
    }
    static requireKeys(values) {
        return {
            type: types_1.ValidationInputType.OBJECT,
            fn: (property, processedValue, userInput) => {
                if (Array.isArray(values)) {
                    const missingKeys = values.filter((key) => !processedValue[key]);
                    return missingKeys.length
                        ? (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.REQUIRE_KEYS, {
                            userInput,
                            keys: missingKeys.join(', '),
                        })
                        : null;
                }
                return null;
            },
        };
    }
}
exports.Validators = Validators;
Validators.number = {
    type: types_1.ValidationInputType.NUMBER,
    fn: (property, processedValue, userInput) => {
        if (isNaN(processedValue)) {
            return (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.NUMBER, { userInput });
        }
        return null;
    },
};
Validators.string = {
    type: types_1.ValidationInputType.STRING,
    fn: (property, processedValue, userInput) => {
        if (!(0, shared_1.isString)(processedValue)) {
            return (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.STRING, { userInput });
        }
        return null;
    }
};
Validators.nonZero = {
    type: types_1.ValidationInputType.NUMBER,
    fn: (property, processedValue, userInput) => {
        if (processedValue === 0) {
            return (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.NON_ZERO, { userInput });
        }
        return null;
    },
};
Validators.integer = {
    type: types_1.ValidationInputType.NUMBER,
    fn: (property, processedValue, userInput) => {
        if (!Number.isInteger(processedValue)) {
            return (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.WHOLE_NUMBER, { userInput });
        }
        return null;
    },
};
Validators.image = {
    type: types_1.ValidationInputType.FILE,
    fn: (property, processedValue, userInput) => {
        const allowedType = ['jpg', 'png', 'gif', 'webp', 'flif', 'cr2', 'tif', 'bmp', 'jxr', 'psd', 'ico', 'bpg', 'jp2', 'jpm', 'jpx', 'heic', 'cur', 'dcm', 'avif'];
        const ext = processedValue.extension;
        return allowedType.includes(ext !== null && ext !== void 0 ? ext : '')
            ? null
            : (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.IMAGE, { property: property });
    },
};
Validators.email = {
    type: types_1.ValidationInputType.STRING,
    fn: (property, processedValue, userInput) => {
        const pattern = new RegExp('^(([^<>()\\[\\].,;:\\s@"]+(\\.[^<>()\\[\\].,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z-0-9]+\\.)+[a-zA-Z]{2,}))$');
        if ((0, shared_1.isEmpty)(processedValue)) {
            return null;
        }
        if ((0, shared_1.isEmpty)(processedValue))
            return null;
        return pattern.test(String(processedValue))
            ? null
            : (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.EMAIL, { userInput });
    },
};
Validators.url = {
    type: types_1.ValidationInputType.STRING,
    fn: (property, processedValue, userInput) => {
        const pattern = new RegExp('^((https?|ftp|file)://)?' + // protocol
            '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-zA-Z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-zA-Z\\d_]*)?$' // fragment locator
        );
        if ((0, shared_1.isEmpty)(processedValue))
            return null;
        return pattern.test(String(processedValue))
            ? null
            : (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.URL, { userInput });
    },
};
Validators.datetimeIso = {
    type: types_1.ValidationInputType.DATE_TIME,
    fn: (property, processedValue, userInput) => {
        if (property.required && (0, shared_1.isNil)(processedValue)) {
            return (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.ISO_DATE, { userInput });
        }
        return null;
    },
};
Validators.file = {
    type: types_1.ValidationInputType.FILE,
    fn: (property, processedValue, userInput) => {
        if (property.required && (0, shared_1.isNil)(processedValue)) {
            return (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.FILE, { userInput });
        }
        return null;
    },
};
Validators.phoneNumber = {
    type: types_1.ValidationInputType.STRING,
    fn: (property, processedValue, userInput) => {
        const pattern = new RegExp('^\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$');
        if ((0, shared_1.isEmpty)(processedValue))
            return null;
        return pattern.test(String(processedValue))
            ? null
            : (0, utils_1.formatErrorMessage)(errors_1.ErrorMessages.PHONE_NUMBER, { userInput });
    },
};
//# sourceMappingURL=validators.js.map