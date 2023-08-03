import {handle, observeObject} from "../src/obj-observation.js";
import {person} from "../src/prop-manipulation.js";

describe("Object Observation", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const proxy = observeObject(person, handle);
    test("Access property", () => {
        proxy.firstName;
        expect(consoleSpy).toHaveBeenCalledWith('Property firstName is accessed');
    });
    test("Modify property", () => {
        const proxy = observeObject(person, handle);
        proxy.age = 10;
        expect(consoleSpy).toHaveBeenCalledWith('Property age is changed from 30 to 10');
    });
});

