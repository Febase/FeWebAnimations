import * as React from 'react';
import { styled } from '@stitches/react';
import { motion } from 'framer-motion';

interface ClockHandProps {
  time: number;
  min: number;
  max: number;
  size: number;
}

const ClockHand: React.FC<ClockHandProps> = ({
  time,
  min,
  max,
  size,
}) => {
  const _time = React.useRef<number>(0);

  React.useEffect(() => {
    if (_time.current === 0) {
      _time.current = time;
    } else {
      _time.current += 1;
    }
  }, [time]);

  const rotate = 360 * (_time.current / (max - min + 1));

  return (
    <Box animate={{ rotate }}>
      <Hand
        style={{
          '--clock-hand-height': `${size}px`,
          transform: `translateY(-${size / 2}px)`,
        } as React.CSSProperties}
      />
    </Box>
  );
};

export default ClockHand;

const Box = styled(motion.div, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Hand = styled(motion.div, {
  width: 8,
  height: 'var(--clock-hand-height)',
  borderRadius: 8,
  backgroundColor: '#000000',
  border: '2px solid var(--color-white)',
});
