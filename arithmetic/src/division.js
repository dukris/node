import {Validator} from "./validator.js";
import {Multiplication} from "./multiplication.js";
import {Comparator} from "./comparator.js";
import {Addition} from "./addition.js";
import {Subtraction} from "./subtraction.js";

/**
 * Division.
 */
export class Division {

    /**
     * Constructor.
     *
     * @param a Number as string
     * @param b Number as string
     */
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    /**
     * Calculate the result of division.
     *
     * @returns {string} Result
     */
    calculate = () => {
        new Validator(this.a, this.b).check();
        let comparator = new Comparator();
        if (comparator.compare(this.b, "1") === 0) {
            return this.a;
        }
        let i = "1";
        let value = new Multiplication(this.b, i).calculate();
        while (comparator.compare(value, this.a) === -1) {
            i = new Addition(i, "1").calculate();
            value = new Multiplication(this.b, i).calculate();
        }
        if (comparator.compare(value, this.a) === 1) {
            i = new Subtraction(i, "1").calculate();
        }
        return i;
    }

}