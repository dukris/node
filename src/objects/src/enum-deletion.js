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
    return calculatePrice(
        retrieveProperty(product, 'price'),
        retrieveProperty(product, 'quantity')
    );
}

/**
 * Retrieve property value.
 *
 * @param obj Object
 * @param property Property name
 * @returns {any} Value
 */
const retrieveProperty = (obj, property) => {
    if (!obj.hasOwnProperty(property)) {
        throw TypeError("The property doesn't exist!");
    }
    return Object.getOwnPropertyDescriptor(product, property).value;
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
    if (!product.hasOwnProperty(property)
        || !Object.getOwnPropertyDescriptor(product, property).configurable) {
        throw TypeError("The property can not be deleted!");
    }
    delete product[property];
}