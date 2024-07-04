// Lodash type functions

/**
 * Memoizes a function by caching its results based on the arguments passed.
 * 
 * @example
 * const add = (a, b) => a + b;
 * const memoizedAdd = memoizeFunc(add);
 * 
 * memoizedAdd(2, 3); // 5
 * memoizedAdd(2, 3); // 5 (Result should be returned from cache, add not called)
 *
 * @param {Function} func The function to memoize.
 * @returns {Function} Returns the new memoized function.
 */
export function memoizeFunc(func) {

}

/**
 * Creates a throttled function that only invokes `func` at most once per `wait` milliseconds.
 * 
 * @example
 * const add = (...args) => args.reduce((acc, val) => acc + val, 0);
 * const throttledFn = throttle(add, 1000);
 * 
 * throttledFn(1, 2, 3); // 6
 * throttledFn(4, 5, 6); // undefined
 * setTimeout(() => {
 *  throttledFn(4, 5, 6); // 15
 * }, 1000);
 *
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @returns {Function} Returns the new throttled function.
 */
export function throttle(func, wait=0) {

}