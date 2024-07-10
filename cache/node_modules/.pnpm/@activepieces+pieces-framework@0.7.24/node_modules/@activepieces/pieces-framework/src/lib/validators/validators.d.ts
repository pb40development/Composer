import { OpUnitType } from 'dayjs';
import { ErrorMessages } from './errors';
import { TypedValidatorFn, ValidationErrors, ValidationInputType } from './types';
import { formatErrorMessage } from './utils';
declare class Validators {
    static pattern(regex: string | RegExp): TypedValidatorFn<ValidationInputType.STRING>;
    static prohibitPattern(regex: string | RegExp): TypedValidatorFn<ValidationInputType.STRING>;
    static maxLength(max: number): TypedValidatorFn<ValidationInputType.STRING>;
    static minLength(min: number): TypedValidatorFn<ValidationInputType.STRING>;
    static minValue(min: number): TypedValidatorFn<ValidationInputType.NUMBER>;
    static maxValue(max: number): TypedValidatorFn<ValidationInputType.NUMBER>;
    static minDate(min: string, unit?: OpUnitType, includeBounds?: boolean): TypedValidatorFn<ValidationInputType.DATE_TIME>;
    static maxDate(max: string, unit?: OpUnitType, includeBounds?: boolean): TypedValidatorFn<ValidationInputType.DATE_TIME>;
    static inRange(min: number, max: number): TypedValidatorFn<ValidationInputType.NUMBER>;
    static inDateRange(min: string, max: string, unit?: OpUnitType, includeBounds?: boolean): TypedValidatorFn<ValidationInputType.DATE_TIME>;
    static number: TypedValidatorFn<ValidationInputType.NUMBER>;
    static string: TypedValidatorFn<ValidationInputType.STRING>;
    static nonZero: TypedValidatorFn<ValidationInputType.NUMBER>;
    static integer: TypedValidatorFn<ValidationInputType.NUMBER>;
    static image: TypedValidatorFn<ValidationInputType.FILE>;
    static email: TypedValidatorFn<ValidationInputType.STRING>;
    static url: TypedValidatorFn<ValidationInputType.STRING>;
    static datetimeIso: TypedValidatorFn<ValidationInputType.DATE_TIME>;
    static file: TypedValidatorFn<ValidationInputType.FILE>;
    static phoneNumber: TypedValidatorFn<ValidationInputType.STRING>;
    static oneOf(values: unknown[]): TypedValidatorFn<any>;
    static requireKeys(values: string[]): TypedValidatorFn<ValidationInputType.OBJECT>;
}
export { ErrorMessages, ValidationErrors, Validators, formatErrorMessage };
