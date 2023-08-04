/**
 * Filter the array using the callback function to determine uniqueness.
 *
 * @param array Array
 * @param fun Function
 * @returns {*} Filtered array
 */
export const customFilterUnique = (array, fun) => {
    if (typeof array != 'object' || typeof fun != 'function') {
        throw new TypeError("Input format is wrong!");
    }
    return array.filter((...args) => fun(...args));
}
