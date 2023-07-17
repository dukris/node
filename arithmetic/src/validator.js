/**
 * Validator.
 */
export class Validator {

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
     * Check if it is a number.
     */
    check() {
        if (isNaN(this.a) || isNaN(this.b)) {
            throw new TypeError("Parameter is not a number");
        }
    }

}