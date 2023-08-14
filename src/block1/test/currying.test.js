import {curry} from "../src/currying.js";

describe("Currying Function Implementation", () => {
    function multiply(a, b, c) {
        return a * b * c;
    }

    test("Currying Function 1", () => {
        const curriedMultiply = curry(multiply);
        expect(curriedMultiply(2)(3)(4)).toBe(24);
    });
    test("Currying Function 2", () => {
        const curriedMultiply = curry(multiply);
        expect(curriedMultiply(2)(3,4)).toBe(24);
    });
    test("Currying Function with _", () => {
        const curriedMultiply = curry(multiply);
        expect(curriedMultiply(2)("_", 3)("_")("_")(4)).toBe(24);
    });
});

