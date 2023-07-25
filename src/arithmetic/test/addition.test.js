import {Addition} from "../src/addition.js";
import {ValidNumber} from "../src/validNumber.js";

describe('Addition', () => {
    test('0 + 0 = 0', () => {
        expect(new Addition(
                new ValidNumber("0"),
                new ValidNumber("0")
            ).value()
        ).toBe("0");
    });
    test('99 + 330 = 429', () => {
        expect(new Addition(
                new ValidNumber("99"),
                new ValidNumber("330")
            ).value()
        ).toBe("429");
    });
    test('1 + 2 = 3', () => {
        expect(new Addition(
                new ValidNumber("1"),
                new ValidNumber("2")
            ).value()
        ).toBe("3");
    });
    test('100 + 2222 = 2322', () => {
        expect(new Addition(
                new ValidNumber("100"),
                new ValidNumber("2222")
            ).value()
        ).toBe("2322");
    });
    test('5768594 + 858473 = 6627067', () => {
        expect(new Addition(
                new ValidNumber("5768594"),
                new ValidNumber("858473")
            ).value()
        ).toBe("6627067");
    });
});