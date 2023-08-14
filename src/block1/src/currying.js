/**
 * Currying function.
 *
 * @param func Function to be curried
 * @returns {(function(...[*]): (*))|*} New curried function that waits for the remaining arguments
 */
export const curry = (func) => {
    if (typeof func != 'function') {
        throw new TypeError("Input format is wrong!");
    }
    return function curried(...args1) {
        if (args1.join(" ").match(/_/g)) {
            args1 = args1.filter(element => element !== "_");
        }
        if (args1.length >= func.length) {
            return func(...args1);
        }
        return (...args2) => curried(...args1, ...args2);
    }
}