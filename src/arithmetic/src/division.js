import {Multiplication} from "./multiplication.js";
import {Comparator} from "./comparator.js";
import {Addition} from "./addition.js";
import {Subtraction} from "./subtraction.js";
import {ValidNumber} from "./validNumber.js";

/**
 * Division.
 */
export class Division {

    /**
     * Constructor.
     *
     * @param a ValidNumber
     * @param b ValidNumber
     */
    constructor(a, b) {
        this.a = a.value();
        this.b = b.value();
    }

    /**
     * Calculate the result of division.
     *
     * @returns {string} Result
     */
    value = () => {
        let comparator = new Comparator();
        if (comparator.compare(this.b, "1") === 0) {
            return this.a;
        }
        let i = "1";
        let value = new Multiplication(
            new ValidNumber(this.b),
            new ValidNumber(i)
        ).value();
        while (comparator.compare(value, this.a) === -1) {
            i = new Addition(
                new ValidNumber(i),
                new ValidNumber("1")
            ).value();
            value = new Multiplication(
                new ValidNumber(this.b),
                new ValidNumber(i)
            ).value();
        }
        if (comparator.compare(value, this.a) === 1) {
            i = new Subtraction(
                new ValidNumber(i),
                new ValidNumber("1")
            ).value();
        }
        return i;
    }

}