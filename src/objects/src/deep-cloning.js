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