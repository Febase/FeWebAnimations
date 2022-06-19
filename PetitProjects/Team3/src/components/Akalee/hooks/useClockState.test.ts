import { renderHook } from '@testing-library/react-hooks';
import {
  it,
  describe,
  expect,
  beforeEach,
  afterEach,
  vi,
} from 'vitest';
import useClockState from './useClockState';

let delta = 0;

describe('useClockState.ts', () => {
  beforeEach(() => {
    vi
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((cb) => {
        setTimeout(() => {
          cb(delta);
          delta += 16;
        }, 16)

        return delta;
      });
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.useRealTimers();
  })

  it('match initial value', () => {
    const { result } = renderHook(() => useClockState());

    expect(result.current.hour).toBe(-1);
    expect(result.current.minute).toBe(-1);
    expect(result.current.second).toBe(-1);
  });

  it('match current hour', () => {
    const date = new Date();

    const { result } = renderHook(() => useClockState());

    vi.advanceTimersByTime(1000);
    expect(result.current.hour).toBe(date.getHours());
  });

  it('match current minute', () => {
    const date = new Date();

    const { result } = renderHook(() => useClockState());

    vi.advanceTimersByTime(1000);
    expect(result.current.minute).toBe(date.getMinutes());
  });

  it('match current second', () => {
    const date = new Date();

    const { result } = renderHook(() => useClockState());

    vi.advanceTimersByTime(1000);
    expect(result.current.second).toBe(date.getSeconds());
  });
});
