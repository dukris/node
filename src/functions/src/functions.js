/**
 * Calculate discounted price.
 *
 * @param products Array of products
 * @param percentage Discount percentage
 * @returns {*[]} New array of products
 */
export const calculateDiscountedPrice = (products, percentage) => {
    return JSON.parse(JSON.stringify(products))
        .map(product => {
            product.price = product.price - product.price * percentage / 100;
            return product;
        });
}

/**
 * Calculate total price of products.
 *
 * @param products Array of products
 * @returns {number} Total price of all products
 */
export const calculateTotalPrice = (products) => {
    return [...products]
        .map(product => product.price)
        .reduce((a, b) => a + b, 0);
}

/**
 * Get person's full name.
 *
 * @param person Person
 * @returns {string} Full name
 */
export const getFullName = (person) => concat(person.firstName)(person.lastName);

/**
 * Concatenation.
 *
 * @param first String
 * @returns {function(string): string} Result
 */
const concat = first => second => first + " " + second;

/**
 * Filter unique words from string.
 *
 * @param text String
 * @returns {any[]} Array of unique words sorted in alphabetical order
 */
export const filterUniqueWords = (text) => [...new Set(toSortedArray(text))];

/**
 * Convert string to sorted array.
 *
 * @param text String
 * @returns {*} Array sorted in alphabetical order
 */
const toSortedArray = (text) => text.split(' ').sort();
