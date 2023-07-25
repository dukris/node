import {Division} from "../src/division.js";
import {ValidNumber} from "../src/validNumber.js";

describe('Division', () => {
    test('0 / 15 = 0', () => {
        expect(new Division(
                new ValidNumber("0"),
                new ValidNumber("15")
            ).value()
        ).toBe("0");
    });
    test('1 / 3445434343423 = 0', () => {
        expect(new Division(
                new ValidNumber("1"),
                new ValidNumber("3445434343423")
            ).value()
        ).toBe("0");
    });
    test('2222 / 100 = 22', () => {
        expect(new Division(
                new ValidNumber("2222"),
                new ValidNumber("100")
            ).value()
        ).toBe("22");
    });
    test('500000000 / 320000098 = 1', () => {
        expect(new Division(
                new ValidNumber("500000000"),
                new ValidNumber("320000098")
            ).value()
        ).toBe("1");
    });
    test('2568 / 22 = 116', () => {
        expect(new Division(
                new ValidNumber("2568"),
                new ValidNumber("22")
            ).value()
        ).toBe("116");
    });
    test('256800000 / 1 = 256800000', () => {
        expect(new Division(
                new ValidNumber("256800000"),
                new ValidNumber("1")
            ).value()
        ).toBe("256800000");
    });
});