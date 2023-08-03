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
    test("Check address property", () => {
        expect(Object.getOwnPropertyDescriptor(person, 'address').value)
            .toStrictEqual({});
    });
    test("Update person with address", () => {
        const expected = {
            firstName: "Jane",
            lastName: "Doe",
            age: 32,
            email: "john.doe@example.com",
            address: {
                id: 1
            }
        }
        expect(person.updateInfo(person.updateInfo({firstName: "Jane", age: 32, address: {id: 1}})))
            .toStrictEqual(expected);
    });
});

