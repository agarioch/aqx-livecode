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

export function throttle(func, wait = 0) {
  // TODO - write a throttle function
  // accepts any function as an argument (func)
  // returns a new function that will only call the original function once per `wait` ms
  // see jsdocs above and throttle.test.js for details
}
