import * as React from 'react';
import { styled } from '@stitches/react';
import MakerLabel from './MakerLabel';

const ClockCoreFrame: React.FC = () => {
  return (
    <Box>
      <ClockFrame>
        {TIME_PIVOT_ITEMS.map(({ text, deg }) => (
          <TimePivot
            style={{
              transform: `rotate(${deg}deg)`,
            }}
            key={text}
          >
            <TimePivotText>{text}</TimePivotText>
          </TimePivot>
        ))}
      </ClockFrame>
      <MakerLabel />
    </Box>
  );
};

export default ClockCoreFrame;

const TIME_PIVOT_ITEMS = [
  { text: 'I', deg: 30 },
  { text: 'II', deg: 60 },
  { text: 'III', deg: 90 },
  { text: 'IV', deg: 120 },
  { text: 'V', deg: 150 },
  { text: 'VI', deg: 180 },
  { text: 'VII', deg: 210 },
  { text: 'VIII', deg: 240 },
  { text: 'IX', deg: 270 },
  { text: 'X', deg: 300 },
  { text: 'XI', deg: 330 },
  { text: 'XII', deg: 360 },
] as const;

const Box = styled('div', {
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  border: '2px dashed rgba(255, 255, 255, 0.48)',
  overflow: 'hidden',
  '-webkit-mask-image': `radial-gradient(
    circle var(--size-pos) at var(--x, var(--size-neg)) var(--y, var(--size-neg)),
    black 36%,
    transparent
  )`,
});

const ClockFrame = styled('div', {
  width: '100%',
  height: '100%',
  position: 'relative',
});

const TimePivot = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  paddingTop: 16,
});

const TimePivotText = styled('span', {
  fontSize: '1.25rem',
  fontWeight: 700,
  color: 'rgba(255, 255, 255, 0.48)',
});
