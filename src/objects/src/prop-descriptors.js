/**
 * Create immutable object.
 *
 * @param obj Object
 * @returns {any} New object
 */
export const createImmutableObject = (obj) => {
    if (typeof obj != 'object') {
        throw new TypeError("Input format is wrong!");
    }
    const copied = JSON.parse(JSON.stringify(obj));
    setUpProperties(copied);
    return copied;
}

/**
 * Make property read-only.
 *
 * @param obj Object
 * @param property Property name
 */
const setReadOnly = (obj, property) => {
    if (typeof obj != 'object' || typeof property != 'string') {
        throw new TypeError("Input format is wrong!");
    }
    Object.defineProperty(obj, property, {
        writable: false
    });
}

/**
 * Set up read-only properties.
 *
 * @param obj Object
 */
const setUpProperties = (obj) => {
    Object.entries(obj)
        .forEach(([key, value]) => {
            if (typeof value === 'object') {
                setUpProperties(value);
            }
            setReadOnly(obj, key);
        })
}
