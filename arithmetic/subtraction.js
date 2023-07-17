import {Validator} from "./validator.js";

/**
 * Subtraction.
 */
export class Subtraction {

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
     * Calculate the result of subtraction.
     *
     * @returns {string} Result
     */
    calculate = () => {
        new Validator(this.a, this.b).check();
        this.a = [...this.a];
        this.b = [...this.b];
        let negative = false;
        let answer = [];
        let carry = 0;
        if (this.b.length > this.a.length) {
            const temp = this.b;
            this.b = this.a;
            this.a = temp;
            negative = true;
        } else if (this.b.length === this.a.length) {
            for (let i = 0; i < this.a.length; i++) {
                if (+this.b[i] > +this.a[i]) {
                    const temp = this.b;
                    this.b = this.a;
                    this.a = temp;
                    negative = true;
                    break;
                } else if (+this.b[i] < +this.a[i]) {
                    break;
                }
            }
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
        return negative ? "-" + answer.reverse().join("") : answer.reverse().join("");
    }

}