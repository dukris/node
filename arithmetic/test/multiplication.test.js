import {Multiplication} from "../src/multiplication.js";

describe('Multiplication', () => {
    test('0 * 15 = 0', () => {
        expect(new Multiplication("0", "15").calculate())
            .toBe("0");
    });
    test('1 * 3445434343423 = 3445434343423', () => {
        expect(new Multiplication("1", "3445434343423").calculate())
            .toBe("3445434343423");
    });
    test('2222 * 100 = 222200', () => {
        expect(new Multiplication("2222", "100").calculate())
            .toBe("222200");
    });
    test('5000000 * 320000098 = 4900000', () => {
        expect(new Multiplication("5000000", "320000098").calculate())
            .toBe("1600000490000000");
    });
    test('Wrong parameters', () => {
        expect(() => new Multiplication("egrer", "858473").calculate())
            .toThrow(TypeError);
    });
});