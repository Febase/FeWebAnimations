import * as React from 'react';
import { styled } from '@stitches/react';
import ClockCore from './ClockCore';
import ClockCoreFrame from './ClockCoreFrame';
import { useClockState } from './hooks';

interface ClockProps {
  size: number;
}

const Clock: React.FC<ClockProps> = ({ size }) => {
  const { hour, minute, second } = useClockState();

  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (el === null) return;

    const listener = (e: PointerEvent) => {
      const offsetWidth = window.document.body.offsetWidth;
      const offsetHeight = window.document.body.offsetHeight;

      const x = e.pageX - (offsetWidth - size) / 2;
      const y = e.pageY - (offsetHeight - size) / 2;

      el.style.setProperty('--x', `${x}px`);
      el.style.setProperty('--y', `${y}px`);
    };

    el.addEventListener('pointermove', listener, {
      passive: true,
    });

    return () => {
      el.removeEventListener('pointermove', listener);
    };
  }, [size]);

  return (
    <AspectRatioBox style={{ width: size, paddingTop: size }}>
      <ClockBox
        style={{
          '--size-pos': `${size * 0.375}px`,
          '--size-neg': `-${size * 0.375}px`,
        } as React.CSSProperties}
        ref={ref}
      >
        <ClockCore
          size={size}
          hour={hour}
          minute={minute}
          second={second}
        />
        <ClockCoreFrame />
      </ClockBox>
    </AspectRatioBox>
  );
};

export default Clock;

const AspectRatioBox = styled('div', {
  position: 'relative',
  margin: 'auto',
});

const ClockBox = styled('div', {
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
