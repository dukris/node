/**
 * Addition.
 */
export class Addition {

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
     * Calculate the result of addition.
     *
     * @returns {string} Result
     */
    value = () => {
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
            answer[i] = (i === length - 1) ? result : digit;
        }
        return answer.reverse().join("");
    }

}