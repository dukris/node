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

/**
 * Divide the array into smaller arrays, each containing elements of the specified chunk size.
 *
 * @param array Array
 * @param size Chunk size
 * @returns {*[]} Array of arrays
 */
export const chunkArray = (array, size) => {
    if (typeof array != 'object' || typeof size != 'number' || size < 1) {
        throw new TypeError("Input format is wrong!");
    }
    const arrays = [];
    for (let i = 0; i < array.length; i += size) {
        arrays.push(array.slice(i, i + size));
    }
    return arrays;
}
