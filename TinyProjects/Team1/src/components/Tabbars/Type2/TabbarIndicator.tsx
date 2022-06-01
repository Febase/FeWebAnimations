import * as React from 'react';
import { styled } from '@stitches/react';
import { motion, useAnimation } from 'framer-motion';
import { delay } from './utils';
import type { Variants } from 'framer-motion';

interface TabbarIndicatorProps {
  x: number;
  onAnimationComplete: () => void;
}

const TabbarIndicator: React.FC<TabbarIndicatorProps> = ({
  x,
  onAnimationComplete,
}) => {
  const pathControls = useAnimation();
  const circleControls = useAnimation();

  const startCircleAnimation = React.useCallback(
    () => new Promise<void>(async (resolve) => {
      await delay(0.05);
      await circleControls.start('circleStart');
      await circleControls.start('circleEnd');
      resolve();
    }),
    [circleControls],
  );

  const startAnimation = React.useCallback(
    async () => {
      await pathControls.start('pathStart');
      await delay(0.25);
      await Promise.all([
        pathControls.start('pathProgress'),
        startCircleAnimation(),
      ]);
      await pathControls.start('pathEnd');
    },
    [pathControls, startCircleAnimation],
  );

  React.useEffect(() => {
    startAnimation()
  }, [startAnimation, x]);

  const [isAnimateCircle, setIsAnimateCircle] = React.useState<boolean>(false);
  const [isAnimatePath, setIsAnimatePath] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isAnimateCircle) return;
    if (isAnimatePath) return;

    onAnimationComplete();
  }, [isAnimateCircle, isAnimatePath, onAnimationComplete]);

  return (
    <SVG 
      width={68}
      height={72}
      viewBox={'0 0 68 72'}
      animate={{ x }}
    >
      <defs>
        <filter
          id={'goo'}
          x={'-50%'}
          width={'200%'}
          y={'-50%'}
          height={'200%'}
          colorInterpolationFilters={'sRGB'}
        >
          <feGaussianBlur
            in={'SourceGraphic'}
            stdDeviation={'1'}
            result={'blur'}
          />
          <feColorMatrix
            in={'blur'}
            mode={'matrix'}
            values={'1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7'}
            result={'cm'}
          />
        </filter>
      </defs>
      <g filter={'url(#goo)'}>
        <Path
          d={'M34 54C45.4078 54 48.3887 66.7534 68 72H0C19.6113 66.7534 22.5922 54 34 54Z'} 
          animate={pathControls}
          variants={pathVariants}
          onAnimationStart={(definition) => {
            if (definition !== 'pathStart') return;
            setIsAnimatePath(true);
          }}
          onAnimationComplete={(definition) => {
            if (definition !== 'pathEnd') return;
            setIsAnimatePath(false);
          }}
        />
        <motion.circle
          cx={34}
          cy={66}
          r={4}
          animate={circleControls}
          variants={circleVariants}
          onAnimationStart={(definition) => {
            if (definition !== 'circleStart') return;
            setIsAnimateCircle(true);
          }}
          onAnimationComplete={(definition) => {
            if (definition !== 'circleEnd') return;
            setIsAnimateCircle(false);
          }}
        />
      </g>
    </SVG>
  );
};

export default TabbarIndicator;

const pathVariants: Variants = {
  pathStart: {
    d: 'M34 58C45.4078 58 48.3887 68.7534 68 72H0C19.6113 68.7534 22.5922 58 34 58Z',
    transition: {
      duration: 0.1,
    },
  },
  pathProgress: {
    d: 'M34 48C41.4078 48 44.3887 66.7534 68 72H0C23.6113 66.7534 26.5922 48 34 48Z',
    transition: {
      duration: 0.25,
    },
  },
  pathEnd: {
    d: 'M34 54C45.4078 54 48.3887 66.7534 68 72H0C19.6113 66.7534 22.5922 54 34 54Z',
    transition: {
      duration: 0.2,
    },
  },
};

const circleVariants: Variants = {
  circleStart: {
    y: [0, -36],
    transition: {
      duration: 0.25,
    },
  },
  circleEnd: {
    opacity: [1, 0],
    transition: {
      duration: 0.1,
    },
  },
};

const SVG = styled(motion.svg, {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  position: 'absolute',
  zIndex: 1,
  left: 0,
  bottom: 0,
  display: 'block',
  fill: '#7f00ff',
});

const Path = styled(motion.path, {
  transform: 'translateY(2px)',
});
