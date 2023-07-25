import {Comparator} from "./comparator.js";

/**
 * Subtraction.
 */
export class Subtraction {

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
     * Calculate the result of subtraction.
     *
     * @returns {string} Result
     */
    value = () => {
        this.a = [...this.a];
        this.b = [...this.b];
        let negative = false;
        let answer = [];
        let carry = 0;
        if (new Comparator().compare(this.a, this.b) === -1) {
            const temp = this.b;
            this.b = this.a;
            this.a = temp;
            negative = true;
        }
        for (let i = 0; i < this.a.length; i++) {
            let first = ~~this.a[this.a.length - 1 - i] - carry;
            let second = ~~this.b[this.b.length - 1 - i];
            if (first < second) {
                carry = 1;
                answer[i] = first - second + 10;
            } else {
                carry = 0;
                answer[i] = first - second;
            }
        }
        answer = answer.reverse().join("").replace(/^0+(?=\d)/, '');
        return negative ? "-" + answer : answer;
    }

}