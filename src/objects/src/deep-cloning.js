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
    const result = {};
    Object.keys(obj).forEach(key => result[key] = obj[key]);
    return result;
}
