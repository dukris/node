import {deleteNonConfigurable, getTotalPrice, product} from "../src/enum-deletion.js";

describe("Object Property Enumeration and Deletion", () => {
    test("Calculate total price", () => {
        expect(getTotalPrice(product)).toBe(5000);
    });
    test("Delete correct property", () => {
        deleteNonConfigurable(product, 'price');
        expect(product.hasOwnProperty('price')).toBe(false);
    });
    test("Delete incorrect property", () => {
        expect(() => deleteNonConfigurable(product, 'prop'))
            .toThrow(TypeError);
    });
});

