import * as React from 'react';
import { styled } from '@stitches/react';
import ClockHand from './ClockHand';

interface ClockCoreProps {
  hour: number;
  minute: number;
  second: number;
  size: number;
}

const ClockCore: React.FC<ClockCoreProps> = ({
  hour,
  minute,
  second,
  size,
}) => {
  return (
    <Box
      style={{
        '--clock-size': `${size}px`,
      } as React.CSSProperties}
    >
      <ClockHand
        time={second}
        min={0}
        max={59}
        size={size * RELATIVE_SECOND_HAND_SIZE}
      />
      <ClockHand
        time={minute}
        min={0}
        max={59}
        size={size * RELATIVE_MINUTE_HAND_SIZE}
      />
      <ClockHand
        time={hour}
        min={0}
        max={23}
        size={size * RELATIVE_HOUR_HAND_SIZE}
      />
      <HandDot />
    </Box>
  );
};

export default ClockCore;

const RELATIVE_HOUR_HAND_SIZE = 0.1875;
const RELATIVE_MINUTE_HAND_SIZE = 0.25;
const RELATIVE_SECOND_HAND_SIZE = 0.375;

const Box = styled('div', {
  position: 'relative',
  width: 'var(--clock-size)',
  height: 'var(--clock-size)',
  borderRadius: '50%',
});

const HandDot = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 16,
  height: 16,
  borderRadius: 8,
  background: '#000000',
  border: '2px solid var(--color-white)',
});
