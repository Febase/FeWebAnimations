import * as React from 'react';

type ReturnRAF = ReturnType<typeof window.requestAnimationFrame>;

const useClockState = () => {
  const [hour, setHour] = React.useState<number>(-1);
  const [minute, setMinute] = React.useState<number>(-1);
  const [second, setSecond] = React.useState<number>(-1);

  const date = React.useRef<Date>(new Date());
  const delta = React.useRef<number | null>(null);
  const rAF = React.useRef<ReturnRAF | null>(null);

  const setTime = React.useCallback(
    () => {
      date.current.setTime(Date.now());
      setHour(date.current.getHours());
      setMinute(date.current.getMinutes());
      setSecond(date.current.getSeconds());
    },
    [],
  );

  const rAFCallback = React.useCallback(
    (ms: number) => {
      rAF.current = window.requestAnimationFrame(rAFCallback);

      if (delta.current === null) {
        delta.current = ms;
        setTime();
        return;
      }

      if (ms - delta.current < 1000) return;

      delta.current = ms;
      setTime();
    },
    [setTime],
  );

  React.useEffect(() => {
    rAF.current = window.requestAnimationFrame(rAFCallback);

    return () => {
      if (rAF.current === null) return;
      window.cancelAnimationFrame(rAF.current);
    };
  }, []);

  return {
    hour,
    minute,
    second,
  };
};

export default useClockState;
