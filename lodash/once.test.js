import { describe, it, expect, vi } from "vitest";
import { once } from "./once";

describe(once.name, () => {
  it("should only call the original function once", () => {
    const mockFn = vi.fn();
    const wrappedFn = once(mockFn);

    wrappedFn();
    wrappedFn();
    wrappedFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should pass arguments to the original function", () => {
    const mockFn = vi.fn();
    const wrappedFn = once(mockFn);

    wrappedFn(1, 2, 3);

    expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
  });

  it("should return the result of the original function", () => {
    const add = (a, b) => a + b;
    const onceAdd = once(add);

    const result = onceAdd(2, 3);

    expect(result).toBe(5);
  });
});
