/**
 * Debounce function.
 *
 * @param func Function to be debounced
 * @param delay Delay time (in milliseconds)
 * @returns {function(...[*]): *} New function that wraps the provided function
 */
export const debounce = (func, delay) => {
    if (typeof func != 'function' || typeof delay != 'number') {
        throw new TypeError("Input format is wrong!");
    }
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(func(...args), delay);
    }
}

function debouncedSearch(query) {
    console.log("Searching for:", query);
}

const debouncedSearchHandler = debounce(debouncedSearch, 300);
const inputElement = document.getElementById("search-input");
inputElement.addEventListener("input", event => {
    debouncedSearchHandler(event.target.value);
});