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
        const a = {
            b: {
                c: 42
            }
        };
        const clone = deepClone(obj);
        const aClone = deepClone(a);
        expect(aClone).toStrictEqual(a);
        expect(clone).toStrictEqual(obj);
        aClone.b.c = 2;
        clone.addresses[0].id = 3;
        expect(clone.addresses[0].id).toBe(3);
        expect(obj.addresses[0].id).toBe(1);
        expect(aClone.b.c).toBe(2);
        expect(a.b.c).toBe(42);
    });

});

