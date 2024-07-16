import { throttle } from "./throttle";
import { describe, it, vi, expect, beforeEach } from "vitest";

describe.todo(throttle.name, () => {
  let add;

  beforeEach(() => {
    add = (...args) => args.reduce((acc, val) => acc + val, 0);
  });

  it("throttled function should execute the original function with the correct arguments", () => {
    vi.useFakeTimers();

    const throttledFn = throttle(add, 1000);
    expect(throttledFn(1, 2, 3)).toBe(6);

    expect(throttledFn(4, 5, 6)).toBe(15);
    vi.useRealTimers();
  });
  it("throttled function should return undefined if called again within the wait period since the last call", () => {
    vi.useFakeTimers();
    const add = (...args) => args.reduce((acc, val) => acc + val, 0);
    const throttledFn = throttle(add, 1000);
    expect(throttledFn(1, 2, 3)).toBe(6);
    expect(throttledFn(1, 2)).toBeUndefined();
    expect(throttledFn(4, 5, 6)).toBeUndefined();
    vi.advanceTimersByTime(1000);
    expect(throttledFn(4, 5, 6)).toBe(15);
    vi.useRealTimers();
  });
  it("throttled function should not be run if called again within the wait period since the last call", () => {
    vi.useFakeTimers();

    const mockFn = vi.fn();
    const throttledFn = throttle(mockFn, 1000);

    throttledFn();
    throttledFn();
    throttledFn();

    expect(mockFn).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(1000);

    throttledFn();
    throttledFn();

    expect(mockFn).toHaveBeenCalledTimes(2);

    vi.useRealTimers();
  });
  it.skip("should allow the the wait time to be configured when creating the throttled function", () => {
    // TODO
  });
});
