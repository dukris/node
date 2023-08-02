export const product = {
    name: "Laptop",
    price: 1000,
    quantity: 5
};

Object.defineProperties(product, {
    price: {
        writable: false,
        enumerable: false
    },
    quantity: {
        writable: false,
        enumerable: false
    }
});

/**
 * Calculate total price.
 *
 * @param product Product object
 * @returns {number} Total price
 */
export const getTotalPrice = (product) => {
    if (typeof product != 'object') {
        throw new TypeError("Input format is wrong!")
    }
    return calculatePrice(
        retrieveProperty(product, 'price').value,
        retrieveProperty(product, 'quantity').value
    );
}

/**
 * Retrieve property.
 *
 * @param obj Object
 * @param property Property name
 * @returns {any} Property
 */
export const retrieveProperty = (obj, property) => {
    if (typeof obj != 'object' || typeof property != 'string') {
        throw new TypeError("Input format is wrong!")
    }
    if (!obj.hasOwnProperty(property)) {
        throw Error("The property doesn't exist!");
    }
    return Object.getOwnPropertyDescriptor(product, property);
}

/**
 * Calculate total price.
 *
 * @param price Price
 * @param quantity Quantity
 * @returns {number} Total price
 */
const calculatePrice = (price, quantity) => price * quantity;

/**
 * Delete the specified property from the object if it exists.
 *
 * @param product Product object
 * @param property Property name
 */
export const deleteNonConfigurable = (product, property) => {
    if (typeof product != 'object' || typeof property != 'string') {
        throw new TypeError("Input format is wrong!")
    }
    if (!product.hasOwnProperty(property)
        || !Object.getOwnPropertyDescriptor(product, property).configurable) {
        throw TypeError("The property can not be deleted!");
    }
    delete product[property];
}