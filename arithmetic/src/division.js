import {Validator} from "./validator.js";
import {Multiplication} from "./multiplication.js";
import {Comparator} from "./comparator.js";

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
        // this.a = [...this.a];
        // this.b = [...this.b];
        // let carry = 0;
        // let answer = "";
        // for (let i = 0; i < this.a.length; i++) {
        //     answer = answer + ~~((+this.a[i] + (carry * 10)) / +this.b);
        //     carry = (+this.a[i] + (carry * 10)) % +this.b;
        // }
        // return answer.replace(/^0+(?=\d)/, '');
        let j = 1;
        let value = new Multiplication(this.b, "1").calculate();
        while (comparator.compare(value, this.a) === -1) {
            j++;
            value = new Multiplication(this.b, j.toString()).calculate();
        }
        if(comparator.compare(value, this.a) === 1){
            j--;
        }
        return j.toString();
        // return answer.replace(/^0+(?=\d)/, '');
    }

}

console.log(new Division("500", "1").calculate())