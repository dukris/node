/**
 * Add values.
 *
 * @param a First value
 * @param b Second value
 * @returns {*} Result
 */
export function addValues(a, b) {
    a = validateValue(a);
    b = validateValue(b)
    if (typeof a === "boolean" && typeof b === "boolean") {
        return a && b;
    }
    if ((typeof a === "boolean" && typeof b === "number")
        || (typeof b === "boolean" && typeof a === "number")) {
        throw new TypeError("The operation is not possible!");
    }
    return a + b;
}

/**
 * Return inverted boolean value.
 *
 * @param value Boolean value
 * @returns {boolean} Result
 */
export function invertBoolean(value) {
    return !(validateBoolean(value));
}

/**
 * Convert value to string.
 *
 * @param value Value
 * @returns {string} Result
 */
export function stringifyValue(value) {
    return validateString(value).toString();
}

/**
 * Convert value to number.
 *
 * @param value Value
 * @returns {number} Result
 */
export function convertToNumber(value) {
    return Number(validateNumber(value));
}

/**
 * Convert value to the specified type.
 *
 * @param value Value
 * @param type Type
 * @returns {*} Coerced value
 */
export function coerceToType(value, type) {
    switch (type) {
        case 'number':
            return convertToNumber(value);
        case 'string':
            return stringifyValue(value);
        case 'boolean':
            return convertToBoolean(value);
        case 'symbol':
            return Symbol(value);
        case 'bigint':
            return BigInt(value);
        default:
            throw new TypeError("Incorrect type!");
    }
}

/**
 * Convert value to boolean.
 *
 * @param value Value
 * @returns {boolean} Result
 */
export function convertToBoolean(value) {
    return !!(validateBoolean(value));
}

/**
 * Validate number.
 *
 * @param a Value
 * @returns {string} Validated string to convert to number.
 */
function validateNumber(a) {
    if (typeof a === "symbol") {
        a = a.description;
    }
    if (typeof a != "bigint" && isNaN(a)) {
        throw new TypeError("The conversion is not possible!");
    }
    return a;
}

/**
 * Validate string.
 *
 * @param a Value
 * @returns {string} Validated string
 */
function validateString(a) {
    if (a === undefined) {
        a = "undefined";
    }
    if (typeof a === "object") {
        a = JSON.stringify(a);
    }
    if (typeof a === "symbol") {
        a = a.description;
    }
    return a;
}

/**
 * Validate boolean.
 *
 * @param a Value
 * @returns {number|boolean} Validated value
 */
function validateBoolean(a) {
    if (a === undefined || a === null || typeof a === "object") {
        throw new TypeError("The operation is not possible!");
    }
    if (typeof a === "symbol") {
        a = a.description;
    }
    if (typeof a === "bigint") {
        a = Number(a);
    }
    if (typeof a === "number" && a !== 0 && a !== 1) {
        throw new TypeError("The operation is not possible!");
    }
    if (typeof a === "string") {
        if (a === "true") {
            return true;
        }
        if (a === "false") {
            return false;
        } else {
            throw new TypeError("The operation is not possible!");
        }
    }
    return a;
}

/**
 * Validate value.
 *
 * @param a Value
 * @returns {string} Validated value
 */
function validateValue(a) {
    if (a === undefined || a === null
        || ((typeof a === "object" && !Array.isArray(a)))) {
        throw new TypeError("The operation is not possible!");
    }
    if (typeof a === "symbol") {
        a = a.description;
    }
    return a;
}








