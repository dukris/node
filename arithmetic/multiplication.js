import {Validator} from "./validator.js";
import {Addition} from "./addition.js";

/**
 * Multiplication.
 */
export class Multiplication {

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
     * Calculate the result of multiplication.
     *
     * @returns {string} Result
     */
    calculate = () => {
        new Validator(this.a, this.b).check();
        this.a = [...this.a];
        this.b = [...this.b];
        let answer = [];
        for (let i = 0; i < this.b.length; i++) {
            let sum = "";
            let carry = 0;
            let second = ~~this.b[this.b.length - 1 - i];
            for (let j = 0; j < this.a.length; j++) {
                let first = ~~this.a[this.a.length - 1 - j];
                let result = (carry + first * second).toString();
                let digit = result.charAt(result.length - 1);
                carry = ~~(result.substring(0, result.length - 1));
                sum = (j === this.a.length - 1) ? result + sum : digit + sum;
            }
            for (let j = 0; j < i; j++) {
                sum += "0";
            }
            answer.push(sum);
        }
        return answer.reduce((a, b) => new Addition(a, b).calculate(), "0")
            .replace(/^0+(?=\d)/, '');;
    }

}