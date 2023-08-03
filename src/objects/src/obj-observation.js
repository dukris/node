/**
 * Get a proxy object that wraps the original object.
 *
 * @param obj Object
 * @param fun Function
 * @returns {*} Proxy
 */
export const observeObject = (obj, fun) => {
    if (typeof obj != 'object') {
        throw new TypeError("Input format is wrong!");
    }
    return new Proxy(JSON.parse(JSON.stringify(obj)), fun);
}

export const handle = {

    /**
     * Access property.
     *
     * @param obj Object
     * @param property Property name
     * @returns {*} Value
     */
    get(obj, property) {
        console.log(`Property ${property} is accessed`);
        return obj[property];
    },

    /**
     * Modify property.
     *
     * @param obj Object
     * @param property Property name
     * @param value Value of property
     */
    set(obj, property, value) {
        console.log(`Property ${property} is changed from ${obj[property]} to ${value}`);
        obj[property] = value;
        return true;
    }

};