import {Subtraction} from "../subtraction.js";

describe('Subtraction', () => {
    test('15 - 15 = 0', () => {
        expect(new Subtraction("15", "15").calculate())
            .toBe("0");
    });
    test('1 - 2 = -1', () => {
        expect(new Subtraction("1", "2").calculate())
            .toBe("-1");
    });
    test('2222 - 100 = 2122', () => {
        expect(new Subtraction("2222", "100").calculate())
            .toBe("2122");
    });
    test('5000000 - 100000 = 4900000', () => {
        expect(new Subtraction("5000000", "100000").calculate())
            .toBe("4900000");
    });
    test('Wrong parameters', () => {
        expect(() => new Subtraction("egrer", "858473").calculate())
            .toThrow(TypeError);
    });
});