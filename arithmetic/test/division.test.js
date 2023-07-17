import {Division} from "../src/division.js";

describe('Division', () => {
    test('0 / 15 = 0', () => {
        expect(new Division("0", "15").calculate())
            .toBe("0");
    });
    test('1 / 3445434343423 = 0', () => {
        expect(new Division("1", "3445434343423").calculate())
            .toBe("0");
    });
    test('2222 / 100 = 22', () => {
        expect(new Division("2222", "100").calculate())
            .toBe("22");
    });
    test('500000000 / 320000098 = 1', () => {
        expect(new Division("500000000", "320000098").calculate())
            .toBe("1");
    });
    test('Wrong parameters', () => {
        expect(() => new Division("egrer", "858473").calculate())
            .toThrow(TypeError);
    });
});