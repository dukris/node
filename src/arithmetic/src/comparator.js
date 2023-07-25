/**
 * Comparator.
 */
export class Comparator {

    /**
     * Compare numbers.
     *
     * @param a Number as string
     * @param b Number as string
     * @returns {number} Result (-1, 0 or 1)
     */
    compare = (a, b) => {
        a = [...a];
        b = [...b];
        let result = 0;
        if (a.length > b.length) {
            result = 1;
        } else if (a.length < b.length) {
            result = -1;
        } else {
            for (let i = 0; i < a.length; i++) {
                if (+a[i] > +b[i]) {
                    result = 1;
                    break;
                } else if (+a[i] < +b[i]) {
                    result = -1;
                    break;
                }
            }
        }
        return result;
    }

}