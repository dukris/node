/**
 * Validate object using schema.
 *
 * @param obj Object
 * @param schema Schema
 * @returns {boolean} Result
 */
export const validateObject = (obj, schema) => {
    if (typeof obj === 'object') {
        return Object.keys(schema)
            .every(key => validateObject(obj[key], schema[key]));
    } else {
        return obj?.constructor === schema;
    }
}