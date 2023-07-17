import {Comparator} from "../comparator.js";

describe('Comparator', () => {
    test('0 = 0', () => {
        expect(new Comparator().compare("0", "0"))
            .toBe(0);
    });
    test('999 < 998', () => {
        expect(new Comparator().compare("15", "34523454656656456"))
            .toBe(-1);
    });
    test('3453485357348998247384 > 2443454343', () => {
        expect(new Comparator().compare("3453485357348998247384", "2443454343"))
            .toBe(1);
    });
    test('101 < 200', () => {
        expect(new Comparator().compare("101", "200"))
            .toBe(-1);
    });
    test('Wrong parameters', () => {
        expect(() => new Comparator().compare("dfge", "36"))
            .toThrow(TypeError);
    });
});