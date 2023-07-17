import {Validator} from "./validator.js";

export class Addition {

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    calculate = () => {
        new Validator(this.a, this.b).check();
        this.a = [...this.a];
        this.b = [...this.b];
        let answer = [];
        let carry = 0;
        let length = this.a.length > this.b.length
            ? this.a.length
            : this.b.length;
        for (let i = 0; i < length; i++) {
            let result = (carry + ~~this.a[this.a.length - 1 - i]
                + ~~this.b[this.b.length - 1 - i]).toString();
            let digit = result.charAt(result.length - 1);
            carry = ~~(result.substring(0, result.length - 1));
            answer[i] = (i === this.a.length - 1) ? result : digit;
        }
        return answer.reverse().join("");
    }

}