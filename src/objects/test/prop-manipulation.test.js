import {person} from "../src/prop-manipulation.js";

describe("Object Property Manipulation", () => {
    test("Update person", () => {
        const source = {
            firstName: "John",
            lastName: "Doe",
            age: 30,
            email: "john.doe@example.com"
        }
        const expected = {
            firstName: "Jane",
            lastName: "Doe",
            age: 32,
            email: "john.doe@example.com"
        }
        expect(person.updateInfo({firstName: "Jane", age: 32}))
            .toStrictEqual(expected);
        expect(JSON.stringify(person)).toBe(JSON.stringify(source));
    });
});

