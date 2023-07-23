import {addValues} from "../src/utils.js";

describe("Test cases for AddValues", () => {
    test("Number and Number", () => {
        expect(addValues(0, 0))
            .toBe(0);
    });
    test("Number and String", () => {
        expect(addValues(15, 'str'))
            .toBe('15str');
    });
    test("String and String", () => {
        expect(addValues('str', 'str'))
            .toBe('strstr');
    });
    test("Number and Boolean", () => {
        expect(() => addValues(2, true))
            .toThrow(TypeError);
    });
    test("Boolean and Boolean", () => {
        expect(addValues(false, true))
            .toBe(false);
    });
    test("Boolean and Boolean", () => {
        expect(addValues(true, true))
            .toBe(true);
    });
    test("Boolean and Boolean", () => {
        expect(addValues(false, false))
            .toBe(false);
    });
    test("Boolean and String", () => {
        expect(addValues(false, 'str'))
            .toBe('falsestr');
    });
    test("Null", () => {
        expect(() => addValues(5, null))
            .toThrow(TypeError);
    });
    test("String and Undefined", () => {
        expect(() => addValues('str', undefined))
            .toThrow(TypeError);
    });
    test("Number and Symbol", () => {
        expect(addValues(2, Symbol("sym")))
            .toBe('2sym')
    });
    test("Number and BigInt", () => {
        expect(() => addValues(34, BigInt(2)))
            .toThrow(TypeError)
    });
    test("String and BigInt", () => {
        expect(addValues('str', BigInt(2)))
            .toBe('str2');
    });
    test("Boolean and BigInt", () => {
        expect(() => addValues(true, BigInt(2)))
            .toThrow(TypeError);
    });
    test("Symbol and BigInt", () => {
        expect(addValues(Symbol("sym"), BigInt(2)))
            .toBe('sym2');
    });
    test("BigInt and BigInt", () => {
        expect(addValues(BigInt(2), BigInt(2)))
            .toBe(4n);
    });
    test("Addition with Object", () => {
        expect(() => addValues(5, {name: 'Hanna'}))
            .toThrow(TypeError);
    });
    test("Addition with Array", () => {
        expect(addValues(5, Array(1, 2, 3)))
            .toBe('51,2,3');
    });
});