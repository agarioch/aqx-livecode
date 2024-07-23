import { memoize } from "./memoize";
import { describe, it, vi, expect } from "vitest";

describe(memoize.name, () => {
  it("the returned function should execute correctly", () => {
    const add = (a, b) => a + b;
    const memoizedAdd = memoize(add);

    expect(memoizedAdd(2, 3)).toBe(5);
    expect(memoizedAdd(4, 5)).toBe(9);

    const countLetters = (str, letter) =>
      str.split("").filter((char) => char === letter).length;
    const memoizedCountLetters = memoize(countLetters);

    expect(memoizedCountLetters("hello", "l")).toBe(2);
  });

  it("the returned function should cache results and return from cache when same arguments are passed", () => {
    const mockFn = vi.fn();
    mockFn.mockImplementation((...args) =>
      args.reduce((sum, val) => sum + val)
    );
    const memoizedFn = memoize(mockFn);

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

  it.skip("calling the memoized function with different arguments should call the original function", () => {});

  it.skip("the returned function works with any primitive type of arguments", () => {});
});
