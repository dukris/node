/**
 * Currying function.
 *
 * @param func Function to be curried
 * @param arity Number of arguments the original function takes
 * @returns {(function(...[*]): (*))|*} New curried function that waits for the remaining arguments
 */
export const curry = (func, arity) => {
    if (typeof func != 'function' || typeof arity != 'number') {
        throw new TypeError("Input format is wrong!");
    }
    return function curried(...args1) {
        if (args1.length >= func.length) {
            return func(...args1);
        }
        return (...args2) => curried(...args1, ...args2);
    }
}