/**
 * Find the most frequent element in array.
 *
 * @param array Array
 * @returns {number} Element
 */
export const find = (array) => {
    if (typeof array != 'object') {
        throw new TypeError("Input format is wrong!");
    }
    let count = 0;
    let result;
    for (let i = 0; i < array.length; i++) {
        if (count === 0) {
            result = array[i];
            count++;
        } else if (result === array[i]) {
            count++;
        } else {
            count--;
        }
    }
    return result;
}