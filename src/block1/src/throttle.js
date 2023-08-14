/**
 * Throttle function.
 *
 * @param func Function to be throttled
 * @param interval Time interval (in milliseconds)
 * @returns {(function(...[*]): (*|undefined))|*} New function that wraps the provided function
 */
export const throttle = (func, interval) => {
    if (typeof func != 'function' || typeof interval != 'number') {
        throw new TypeError("Input format is wrong!");
    }
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > interval) {
            prev = now;
            return func(...args);
        }
    }
}

function onScroll(event) {
    console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);
window.addEventListener("scroll", throttledScrollHandler);