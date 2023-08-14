import {curry} from "../src/currying.js";

describe("Currying Function Implementation", () => {
    function multiply(a, b, c) {
        return a * b * c;
    }

    test("Currying Function 1", () => {
        const curriedMultiply = curry(multiply, 3);
        const step1 = curriedMultiply(2);
        const step2 = step1(3);
        const result = step2(4);
        expect(result).toBe(24);
    });
    test("Currying Function 2", () => {
        const curriedMultiply = curry(multiply, 3);
        const step1 = curriedMultiply(2);
        const step2 = step1(3, 4);
        expect(step2).toBe(24);
    });
});

