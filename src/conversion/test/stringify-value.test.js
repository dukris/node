import {stringifyValue} from "../src/utils.js";

describe("Test cases for stringifyValue", () => {
    test("Number", () => {
        expect(stringifyValue(5))
            .toBe('5');
    });
    test("String", () => {
        expect(stringifyValue('str'))
            .toBe('str');
    });
    test("Boolean", () => {
        expect(stringifyValue(true))
            .toBe('true');
    });
    test("Null", () => {
        expect(stringifyValue(null))
            .toBe('null');
    });
    test("Undefined", () => {
        expect(stringifyValue(undefined))
            .toBe('undefined');
    });
    test("Symbol", () => {
        expect(stringifyValue(Symbol("sym")))
            .toBe('sym');
    });
    test("BigInt", () => {
        expect(stringifyValue(BigInt(5)))
            .toBe('5');
    });
    test("Object", () => {
        expect(stringifyValue({name: 'Hanna'}))
            .toBe('{\"name\":\"Hanna\"}');
    });
    test("Array", () => {
        expect(stringifyValue(Array(1,2,3)))
            .toBe('[1,2,3]');
    });
});