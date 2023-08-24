import {find} from "../src/popular-elem.js";

describe("Finding the post popular element", () => {
    test("Find", () => {
        expect(find([1, 1, 1, 1, 1, 3, 3, 4, 2, 5])).toBe(1);
    });
});

