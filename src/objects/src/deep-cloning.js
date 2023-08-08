/**
 * Retrieve deep copy of the object.
 *
 * @param obj Object
 * @returns {{}|*} Clone
 */
export const deepCloneObject = (obj) => {
    if (typeof obj != 'object' || obj == null) {
        return obj;
    }
    const result = {};
    const keys = Object.keys(obj);
    for (let key in keys) {
        result[keys[key]] = deepCloneObject(obj[keys[key]]);
    }
    return result;
}

/**
 * Retrieve deep copy of the object without recursion.
 *
 * @param obj Object
 * @returns {{}|*} Clone
 */
export const deepClone = (obj) => {
    if (typeof obj != 'object' || obj == null) {
        throw new TypeError("Input format is wrong!");
    }
    let result = Array.isArray(obj) ? [] : {};
    const properties = [];
    Object.getOwnPropertyNames(obj)
        .forEach(property => properties.push(property));
    while (properties.length !== 0) {
        const key = properties.shift();
        if (typeof getValue(obj, key) === 'object') {
            if (Array.isArray(getValue(obj, key))) {
                result[key] = [];
            }
            Object.getOwnPropertyNames(getValue(obj, key))
                .map(property => key + "." + property)
                .forEach(property => properties.push(property));
        } else {
            setValue(key, result, getValue(obj, key));
        }

    }
    return result;
}

/**
 * Set value to the object.
 *
 * @param path Path
 * @param obj Object
 * @param value Value
 */
const setValue = (path, obj, value) => {
    let schema = obj;
    const keys = path.split('.');
    for (let i = 0; i < keys.length - 1; i++) {
        if (!schema[keys[i]]) {
            schema[keys[i]] = {};
        }
        schema = schema[keys[i]];
    }
    schema[keys[keys.length - 1]] = value;
}

/**
 * Get value from the object.
 *
 * @param obj Object
 * @param path Path
 * @returns {*} Value
 */
const getValue = (obj, path) => path.split('.').reduce((a, v) => a[v], obj);