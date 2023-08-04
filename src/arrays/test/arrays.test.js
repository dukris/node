import {
    chunkArray,
    customFilterUnique,
    getArrayIntersection,
    getArrayUnion,
    measureArrayPerformance
} from "../src/arrays.js";

describe("Advanced Array Filtering", () => {
    test("Filter array", () => {
        const array = [
            {
                id: 1,
                name: 'First'
            },
            {
                id: 2,
                name: 'Second'
            },
            {
                id: 1,
                name: 'Third'
            }
        ];
        const expected = [
            {
                id: 1,
                name: 'First'
            },
            {
                id: 2,
                name: 'Second'
            }
        ]
        expect(customFilterUnique(array, (value, index, self) =>
            self.findIndex(item => item.id === value.id) === index)).toStrictEqual(expected);
    });
});
describe("Array Chunking", () => {
    const array = [
        {
            id: 1,
            name: 'First'
        },
        {
            id: 2,
            name: 'Second'
        },
        {
            id: 1,
            name: 'Third'
        }
    ];
    test("Chunk array with correct size", () => {
        const expected = [
            [{
                id: 1,
                name: 'First'
            }],
            [{
                id: 2,
                name: 'Second'
            }],
            [{
                id: 1,
                name: 'Third'
            }]
        ];
        expect(chunkArray(array, 1)).toStrictEqual(expected);
    });
    test("Chunk array with incorrect size", () => {
        expect(() => chunkArray(array, 0)).toThrow(TypeError);
    });
});

describe("Array Intersection and Union", () => {
    const first = [1, 2, 3, 4, 5, 6];
    const second = [1, 2, 3, 8, 9];
    test("Array Intersection", () => {
        expect(getArrayIntersection(first, second)).toStrictEqual([1, 2, 3]);
    });
    test("Array Union", () => {
        expect(getArrayUnion(first, second)).toStrictEqual([1, 2, 3, 4, 5, 6, 8, 9]);
    });
});
describe("Array Performance Analysis", () => {
    const array = [
        {
            id: 1,
            name: 'First'
        },
        {
            id: 2,
            name: 'Second'
        },
        {
            id: 1,
            name: 'Third'
        }
    ];
    test("Measure array performance", () => {
        expect(measureArrayPerformance(customFilterUnique, array, (value, index, self) =>
            self.findIndex(item => item.id === value.id) === index)).toBeDefined();
    });
});