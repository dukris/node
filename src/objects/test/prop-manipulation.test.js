import {person} from "../src/prop-manipulation.js";

describe("Object Property Manipulation", () => {
    test("Update person", () => {
        const expected = {
            firstName: "John",
            lastName: "Doe",
            age: 30,
            email: "john.doe@example.com"
        }
        expect(JSON.stringify(person.updateInfo({
            firstName: "Jane",
            age: 32
        }))).toBe(JSON.stringify(expected));
        expect(JSON.stringify(person)).toBe(JSON.stringify(expected));
    });
    test("Check address property", () => {
        expect(Object.getOwnPropertyDescriptor(person, 'address').value)
            .toStrictEqual({});
    });
    test("Update person with address", () => {
        const expected = {
            address: {
                id: 1
            }
        }
        person.updateInfo(person.updateInfo({address: {id: 1}}));
        expect(Object.getOwnPropertyDescriptors(person).address.value)
            .toStrictEqual(expected.address);
    });
});

