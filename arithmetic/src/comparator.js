import {Validator} from "./validator.js";

/**
 * Comparator.
 */
export class Comparator {

    /**
     * Compare numbers.
     */
    compare(a, b) {
        new Validator(a, b).check();
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