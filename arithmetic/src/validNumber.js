/**
 * Valid number.
 */
export class ValidNumber {

    /**
     * Constructor.
     *
     * @param number Number as string
     */
    constructor(number) {

        if (isNaN(number)) {
            throw new TypeError("Parameter is not a number");
        }
        this.number = number;
    }

    /**
     * Value.
     *
     * @returns {any} String as number
     */
    value = () => {
        return this.number;
    }

}