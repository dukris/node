import {deepClone, deepCloneObject} from "../src/deep-cloning.js";
import {person} from "../src/prop-manipulation.js";

describe("Object Deep Cloning", () => {
    test("Recursive deep cloning", () => {
        const clone = deepCloneObject(person);
        expect(clone).toStrictEqual(person);
        clone.firstName = "Jane";
        expect(clone.firstName).toBe("Jane");
        expect(person.firstName).toBe("John");
    });
    test("Deep cloning", () => {
        const obj = {
            firstName: "John",
            lastName: "Doe",
            age: 30,
            email: "john.doe@example.com",
            addresses: [
                {
                    id: 1,
                    value: {
                        name: "Address 1"
                    }
                },
                {
                    id: 2,
                    value: {
                        name: "Address 2"
                    }
                }
            ]
        };
        const clone = deepClone(obj);
        expect(clone).toStrictEqual(obj);
        clone.firstName = "Jane";
        expect(clone.firstName).toBe("Jane");
        expect(obj.firstName).toBe("John");
    });

});

