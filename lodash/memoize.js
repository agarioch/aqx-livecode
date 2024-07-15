/**
 * Memoizes a function by caching its results based on the arguments passed.
 * If the function is called with the same arguments, the cached result is returned.
 *
 * **Note:** You can assume the function to be memoized will only be called with primitive type arguments
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
export function memoize(func) {
  // TODO - write a memoize function
  // accepts any function as an argument (func) and returns a new function that caches the result of func calls whenever it's called
  // if the function is called again with the same arguments, the argument is returned from the cache.
  // see jsdocs above and throttle.test.js for details
}

// Extra credit:
// 1. Write a test for the `memoizeFunc` function that checks if it works with any primitive arguments.
// 2. Suggest a way to make the `memoizeFunc` function work with any type of arguments not just primitive types.
