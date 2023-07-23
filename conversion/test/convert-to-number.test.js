import {convertToNumber} from "../src/utils.js";

describe("Test cases for convertToNumber", () => {
    test("Number", () => {
        expect(convertToNumber(5))
            .toBe(5);
    });
    test("Correct String", () => {
        expect(convertToNumber('123'))
            .toBe(123);
    });
    test("Incorrect String", () => {
        expect(() => convertToNumber('fevv'))
            .toThrow(TypeError);
    });
    test("Boolean", () => {
        expect(convertToNumber(true))
            .toBe(1);
    });
    test("Null", () => {
        expect(convertToNumber(null))
            .toBe(0);
    });
    test("Undefined", () => {
        expect(() => convertToNumber(undefined))
            .toThrow(TypeError)
    });
    test("Correct Symbol", () => {
        expect(convertToNumber(Symbol("123")))
            .toBe(123);
    });
    test("Incorrect Symbol", () => {
        expect(() => convertToNumber(Symbol("dfvfv")))
            .toThrow(TypeError)
    });
    test("BigInt", () => {
        expect(convertToNumber(BigInt(5)))
            .toBe(5);
    });
    test("Object", () => {
        expect(() => convertToNumber({name: 'Hanna'}))
            .toThrow(TypeError);
    });
    test("Array", () => {
        expect(() => convertToNumber(Array(1, 2, 3)))
            .toThrow(TypeError)
    });
});