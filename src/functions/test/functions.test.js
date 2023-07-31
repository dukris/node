import {
    calculateDiscountedPrice, calculateFactorial,
    calculateTotalPrice, createCounter, fibonacciGenerator,
    filterUniqueWords,
    getAverageGrade,
    getFullName, lazyMap, power, repeatFunction
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
        expect(filterUniqueWords("How HOw To to make MaKe my My SalaRy salary bigger bigGer?"))
            .toStrictEqual(["bigger", "how", "make", "my", "salary", "to"])
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
    test("Test case for createCounter", () => {
        let counter = createCounter();
        for (let i = 0; i < 5; i++) {
            expect(counter()).toBe(i);
        }
    });
    test("Test case for repeatFunction", () => {
        const consoleSpy = jest.spyOn(console, 'log');
        repeatFunction((a) => console.log('Hello ' + a), 3)('Hanna');
        expect(consoleSpy).toHaveBeenCalledTimes(3);
        expect(consoleSpy).toHaveBeenCalledWith('Hello Hanna');
    });
});
describe("Recursion and Tail Call Optimization", () => {
    test("Test case for calculateFactorial", () => {
        expect(calculateFactorial(3)).toBe(6);
    });
    test("Test case for power", () => {
        expect(power(5, 3)).toBe(125);
    });
});
describe("Lazy Evaluation and Generators", () => {
    test("Test case for lazyMap", () => {
        let array = [1, 2, 3, 4, 5];
        let value = lazyMap(array, (a) => a * a);
        for (let i = 0; i < array.length; i++) {
            expect(value()).toBe(array[i] * array[i]);
        }
    });
    test("Test case for fibonacciGenerator", () => {
        let expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233];
        let value = fibonacciGenerator();
        for (let i = 0; i < expected.length; i++) {
            expect(value()).toBe(expected[i]);
        }
    });
});