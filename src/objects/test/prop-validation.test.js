import {validateObject} from "../src/prop-validation.js";

describe("Object Property Validation", () => {
    test("Validate object", () => {
        const schema = {
            name: String,
            age: Number,
            addresses: {
                id: Number,
                value: String
            }
        };
        const obj = {
            name: "Hanna",
            age: 21,
            addresses: {
                id: 1,
                value: "First address"
            }
        }
        expect(validateObject(obj, schema)).toBe(true);
        obj.age = "21";
        expect(validateObject(obj, schema)).toBe(false);
    });
});

