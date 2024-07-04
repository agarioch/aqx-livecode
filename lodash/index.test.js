import { memoizeFunc, throttle, debounce } from './index';
import { describe, it, vi, expect } from 'vitest';

// FILEPATH: /home/agarioch/interviews/lodash/index.test.js


describe('memoizeFunc', () => {
  it('should execute the function correctly', () => {
    const add = (a, b) => a + b;
    const memoizedAdd = memoizeFunc(add);

    expect(memoizedAdd(2, 3)).toBe(5);
    expect(memoizedAdd(2, 3)).toBe(5); // Result should be memoized
    expect(memoizedAdd(4, 5)).toBe(9);
  });

  it('should memoize the results', () => {
    const mockFn = vi.fn();
    const memoizedFn = memoizeFunc(mockFn);

    memoizedFn(1, 2);
    memoizedFn(1, 2);
    memoizedFn(1, 2);

    expect(mockFn).toHaveBeenCalledTimes(1); // Function should be called only once
  })
});

describe('throttle', () => {


  it('should execute the original function with the correct arguments', () => {
    vi.useFakeTimers();
    const add = (...args) => args.reduce((acc, val) => acc + val, 0);
    const throttledFn = throttle(add, 1000);
    expect(throttledFn(1, 2, 3)).toBe(6);
    expect(throttledFn(4, 5, 6)).toBeUndefined();
    vi.advanceTimersByTime(1000);
    expect(throttledFn(4,5,6)).toBe(15);
    vi.useRealTimers();
  });

  it('should throttle the execution of a function', () => {
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