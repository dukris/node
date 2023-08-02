import {createImmutableObject} from "../src/prop-descriptors.js";
import {person} from "../src/prop-manipulation.js";

describe("Advanced Property Descriptors", () => {
    test("Create immutable object", () => {
        const immutablePerson = createImmutableObject(person);
        expect(JSON.stringify(immutablePerson)).toBe(JSON.stringify(person));
        const check = (obj) => {
            Object.entries(obj)
                .forEach(([key, value]) => {
                    if (typeof value === 'object') {
                        check(value);
                    }
                    expect(Object.getOwnPropertyDescriptor(obj, key).writable)
                        .toBe(false);
                })
        }
        check(immutablePerson);
    });
});

