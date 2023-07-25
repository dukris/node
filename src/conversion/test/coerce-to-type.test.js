import {coerceToType} from "../src/utils.js";

describe("Test cases for coerceToType", () => {
    test("Correct String to Number", () => {
        expect(coerceToType("123", "number"))
            .toBe(123);
    });
    test("Incorrect String to Number", () => {
        expect(() => coerceToType("123df", "number"))
            .toThrow(TypeError);
    });
    test("Boolean to String", () => {
        expect(coerceToType(true, "string"))
            .toBe("true");
    });
    test("Correct String to Boolean", () => {
        expect(coerceToType("false", "boolean"))
            .toBe(false);
    });
    test("Correct String to Boolean", () => {
        expect(coerceToType("true", "boolean"))
            .toBe(true);
    });
    test("Number to Boolean", () => {
        expect(coerceToType(0, "boolean"))
            .toBe(false);
    });
    test("Undefined to Boolean", () => {
        expect(() => coerceToType(undefined, "boolean"))
            .toThrow(TypeError)
    });
    test("Null to Boolean", () => {
        expect(() => coerceToType(null, "boolean"))
            .toThrow(TypeError)
    });
    test("String to BigInt", () => {
        expect(coerceToType("45", "bigint"))
            .toBe(45n)
    });
    test("Boolean to BigInt", () => {
        expect(coerceToType(true, "bigint"))
            .toBe(1n)
    });
    test("Null to BigInt", () => {
        expect(() => coerceToType(null, "bigint"))
            .toThrow(TypeError)
    });
    test("Undefined to BigInt", () => {
        expect(() => coerceToType(undefined, "bigint"))
            .toThrow(TypeError)
    });
    test("Incorrect type", () => {
        expect(() => coerceToType("value", "invalid"))
            .toThrow(TypeError)
    });
});