import {Addition} from "../addition.js";

describe('Addition', () => {
    test('0 + 0 = 0', () => {
        expect(new Addition("0", "0").calculate())
            .toBe("0");
    });
    test('1 + 2 = 3', () => {
        expect(new Addition("1", "2").calculate())
            .toBe("3");
    });
    test('100 + 2222 = 2322', () => {
        expect(new Addition("100", "2222").calculate())
            .toBe("2322");
    });
    test('5768594 + 858473 = 6627067', () => {
        expect(new Addition("5768594", "858473").calculate())
            .toBe("6627067");
    });
    test('Wrong parameters', () => {
        expect(() => new Addition("egrer", "858473").calculate())
            .toThrow(TypeError);
    });
});