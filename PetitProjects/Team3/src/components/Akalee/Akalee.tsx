import * as React from 'react';
import { styled, globalCss } from '@stitches/react';
import Clock from './Clock';
import { useMediaQuery, useMediaValue } from './hooks';

const Akalee: React.FC = () => {
  globalStyles();

  const value = useMediaValue(
    320,
    [320, 360, 480, 560, 720],
    useMediaQuery('(min-width: 320px) and (min-height: 320px)'),
    useMediaQuery('(min-width: 360px) and (min-height: 360px)'),
    useMediaQuery('(min-width: 480px) and (min-height: 480px)'),
    useMediaQuery('(min-width: 560px) and (min-height: 560px)'),
    useMediaQuery('(min-width: 720px) and (min-height: 720px)'),
  );

  return (
    <Box>
      <Clock size={value} />
    </Box>
  );
};

export default Akalee;

const globalStyles = globalCss({
  ':root': {
    '--color-white': '#ffffff',
    '--color-black': '#000000',
    '--color-transparent': 'transparent',
  },
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'html, body': {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: 'var(--color-black)',
  },
  '#root': {
    isolation: 'isolate',
    width: '100%',
    height: '100%',
  },
});

const Box = styled('div', {
  widht: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});
