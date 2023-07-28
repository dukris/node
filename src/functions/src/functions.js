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