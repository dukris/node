export class Validator {

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    check() {
        if (isNaN(this.a) || isNaN(this.b)) {
            throw new TypeError("Parameter is not a number");
        }
    }

}