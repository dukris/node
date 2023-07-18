import {Multiplication} from "../src/multiplication.js";
import {ValidNumber} from "../src/validNumber.js";

describe('Multiplication', () => {
    test('0 * 15 = 0', () => {
        expect(new Multiplication(
                new ValidNumber("0"),
                new ValidNumber("15")
            ).value()
        ).toBe("0");
    });
    test('1 * 3445434343423 = 3445434343423', () => {
        expect(new Multiplication(
                new ValidNumber("1"),
                new ValidNumber("3445434343423")
            ).value()
        ).toBe("3445434343423");
    });
    test('2222 * 100 = 222200', () => {
        expect(new Multiplication(
                new ValidNumber("2222"),
                new ValidNumber("100")
            ).value()
        ).toBe("222200");
    });
    test('33 * 13 = 429', () => {
        expect(new Multiplication(
                new ValidNumber("33"),
                new ValidNumber("13")
            ).value()
        ).toBe("429");
    });
    test('5000000 * 320000098 = 1600000490000000', () => {
        expect(new Multiplication(
                new ValidNumber("5000000"),
                new ValidNumber("320000098")
            ).value()
        ).toBe("1600000490000000");
    });
});