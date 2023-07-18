import {Subtraction} from "../src/subtraction.js";
import {ValidNumber} from "../src/validNumber.js";

describe('Subtraction', () => {
    test('15 - 15 = 0', () => {
        expect(new Subtraction(
                new ValidNumber("15"),
                new ValidNumber("15")
            ).value()
        ).toBe("0");
    });
    test('1 - 2 = -1', () => {
        expect(new Subtraction(
                new ValidNumber("1"),
                new ValidNumber("2")
            ).value()
        ).toBe("-1");
    });
    test('2222 - 100 = 2122', () => {
        expect(new Subtraction(
                new ValidNumber("2222"),
                new ValidNumber("100")
            ).value()
        ).toBe("2122");
    });
    test('5000000 - 100000 = 4900000', () => {
        expect(new Subtraction(
                new ValidNumber("5000000"),
                new ValidNumber("100000")
            ).value()
        ).toBe("4900000");
    });
});