import {ValidNumber} from "../src/validNumber.js";

describe('ValidNumber', () => {
    test('Correct parameters', () => {
        expect(new ValidNumber("12376438543874").value())
            .toBe("12376438543874");
    });
    test('Wrong parameters', () => {
        expect(() => new ValidNumber("246gfhge3").value())
            .toThrow(TypeError);
    });
});