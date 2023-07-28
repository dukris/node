import {
    calculateDiscountedPrice,
    calculateTotalPrice, createCounter,
    filterUniqueWords,
    getAverageGrade,
    getFullName
} from "../src/functions.js";

describe("Immutability and Pure Functions", () => {
    let products = [
        {
            name: "apple",
            price: 10,
        },
        {
            name: "orange",
            price: 25,
        },
        {
            name: "watermelon",
            price: 30,
        }
    ];
    test("Test case for calculateDiscountedPrice", () => {
        expect(calculateDiscountedPrice(products, 10))
            .toStrictEqual([
                {
                    name: "apple",
                    price: 9,
                },
                {
                    name: "orange",
                    price: 22.5,
                },
                {
                    name: "watermelon",
                    price: 27,
                }
            ]);
    });
    test("Test case for calculateTotalPrice", () => {
        expect(calculateTotalPrice(products)).toBe(65);
    });
});
describe("Function Composition and Point-Free Style", () => {
    test("Test case for getFullName", () => {
        expect(getFullName({
                firstName: "First",
                lastName: "Last",
            })
        ).toBe("First Last");
    });
    test("Test case for filterUniqueWords", () => {
        expect(filterUniqueWords("dfghs shfjf asasd asasd"))
            .toStrictEqual(['asasd', 'dfghs', 'shfjf'])
    });
    test("Test case for getAverageGrade", () => {
        expect(getAverageGrade([
            {
                name: "Student1",
                grades: [8, 7, 9, 7, 8],
            },
            {
                name: "Student2",
                grades: [7, 5, 6, 10, 10],
            },
            {
                name: "Student3",
                grades: [9, 9, 4, 7, 8],
            }
        ])).toBe(7.6);
    });
});
describe("Closures and Higher-Order Functions", () => {
    test("Test case for createCounter - first call", () => {
        expect(createCounter()).toBe(0);
    });
    test("Test case for createCounter - second call", () => {
        expect(createCounter()).toBe(1);
    });
});