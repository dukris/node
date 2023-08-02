import {deepCloneObject} from "../src/deep-cloning.js";
import {person} from "../src/prop-manipulation.js";

describe("Object Deep Cloning", () => {
    test("Deep cloning", () => {
        const clone = deepCloneObject(person);
        expect(clone).toStrictEqual(person);
        clone.firstName = "Jane";
        expect(clone.firstName).toBe("Jane");
        expect(person.firstName).toBe("John");
    });
});

