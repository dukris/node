import {bankAccount, transfer} from "../src/getters-setters.js";

describe("Object Property Getters and Setters", () => {
    test("Print formatted balance", () => {
        expect(bankAccount.formattedBalance).toBe("$1000");
    });
    test("Set balance", () => {
        bankAccount.balance = 3000;
        expect(bankAccount.balance).toBe(3000);
    });
    test("Set incorrect balance", () => {
        expect(() => bankAccount.balance = "123")
            .toThrow(TypeError);
    });
    test("Transfer correct amount", () => {
        const account = JSON.parse(JSON.stringify(bankAccount));
        bankAccount.balance = 2000;
        account.balance = 3000;
        transfer(bankAccount, account, 500);
        expect(bankAccount.balance).toBe(1500);
        expect(account.balance).toBe(3500);
    });
    test("Transfer incorrect amount", () => {
        const account = JSON.parse(JSON.stringify(bankAccount));
        expect(()=>transfer(bankAccount, account, 10000))
            .toThrow(Error);
    });
});

