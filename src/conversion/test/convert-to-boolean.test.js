import {convertToBoolean} from "../src/utils.js";

describe("Test cases for convertToBoolean", () => {
    test("Number 0", () => {
        expect(convertToBoolean(0))
            .toBe(false);
    });
    test("Number 1", () => {
        expect(convertToBoolean(1))
            .toBe(true);
    });
    test("Incorrect Number", () => {
        expect(() => convertToBoolean(15))
            .toThrow(TypeError);
    });
    test("True String", () => {
        expect(convertToBoolean("true"))
            .toBe(true);
    });
    test("False String", () => {
        expect(convertToBoolean("false"))
            .toBe(false);
    });
    test("Incorrect String", () => {
        expect(() => convertToBoolean("fevv"))
            .toThrow(TypeError);
    });
    test("Boolean", () => {
        expect(convertToBoolean(true))
            .toBe(true);
    });
    test("Null", () => {
        expect(() => convertToBoolean(null))
            .toThrow(TypeError);
    });
    test("Undefined", () => {
        expect(() => convertToBoolean(undefined))
            .toThrow(TypeError)
    });
    test("Correct Symbol", () => {
        expect(convertToBoolean(Symbol("true")))
            .toBe(true);
    });
    test("Incorrect Symbol", () => {
        expect(() => convertToBoolean(Symbol("dfvfv")))
            .toThrow(TypeError)
    });
    test("BigInt 1", () => {
        expect(convertToBoolean(BigInt(1)))
            .toBe(true);
    });
    test("BigInt 0", () => {
        expect(convertToBoolean(BigInt(0)))
            .toBe(false);
    });
    test("Incorrect BigInt", () => {
        expect(() => convertToBoolean(BigInt(15)))
            .toThrow(TypeError);
    });
    test("Object", () => {
        expect(() => convertToBoolean({name: 'Hanna'}))
            .toThrow(TypeError);
    });
    test("Array", () => {
        expect(() => convertToBoolean(Array(1, 2, 3)))
            .toThrow(TypeError)
    });
});