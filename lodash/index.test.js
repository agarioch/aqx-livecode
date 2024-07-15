import { memoizeFunc, throttle } from "./index";
import { describe, it, vi, expect } from "vitest";

// FILEPATH: /home/agarioch/interviews/lodash/index.test.js

describe("memoizeFunc", () => {
  it("the returned function should execute correctly", () => {
    const add = (a, b) => a + b;
    const memoizedAdd = memoizeFunc(add);

    expect(memoizedAdd(2, 3)).toBe(5);
    expect(memoizedAdd(4, 5)).toBe(9);

    const countLetters = (str, letter) =>
      str.split("").filter((char) => char === letter).length;
    const memoizedCountLetters = memoizeFunc(countLetters);

    expect(memoizedCountLetters("hello", "l")).toBe(2);
  });

  it("the returned function should cache results and return from cache when same arguments are passed", () => {
    const mockFn = vi.fn();
    const memoizedFn = memoizeFunc(mockFn);

    // Basic test
    memoizedFn(1, 2);
    memoizedFn(1, 2);
    memoizedFn(1, 2);

    expect(mockFn).toHaveBeenCalledTimes(1); // Function should be called only once

    // Test with falsy value
    memoizedFn(2, -2);
    memoizedFn(2, -2);

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it.todo(
    "calling the memoized function with different arguments should call the original function",
    () => {}
  );

  it.todo(
    "the returned function works with any primitive type of arguments",
    () => {}
  );
});

describe("throttle", () => {
  it("should execute the original function with the correct arguments", () => {
    vi.useFakeTimers();
    const add = (...args) => args.reduce((acc, val) => acc + val, 0);
    const throttledFn = throttle(add, 1000);
    expect(throttledFn(1, 2, 3)).toBe(6);
    expect(throttledFn(4, 5, 6)).toBeUndefined();
    vi.advanceTimersByTime(1000);
    expect(throttledFn(4, 5, 6)).toBe(15);
    vi.useRealTimers();
  });

  it("should throttle the execution of a function", () => {
    vi.useFakeTimers();

    const mockFn = vi.fn();
    const throttledFn = throttle(mockFn, 1000);

    throttledFn();
    throttledFn();
    throttledFn();

    expect(mockFn).toHaveBeenCalledTimes(1); // Function should be called only once

    vi.advanceTimersByTime(1000);

    throttledFn();
    throttledFn();

    expect(mockFn).toHaveBeenCalledTimes(2); // Function should be called again after delay

    vi.useRealTimers();
  });
});
