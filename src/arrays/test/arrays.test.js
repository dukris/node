import {chunkArray, customFilterUnique} from "../src/arrays.js";

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

