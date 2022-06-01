import * as React from 'react';
import { styled } from '@stitches/react';
import {
  animate,
  motion,
  useAnimation,
  useMotionValue,
  useMotionTemplate,
} from 'framer-motion';
import { delay } from './utils';
import type { HTMLMotionProps } from 'framer-motion';

export interface IconButtonBaseProps
  extends Omit<HTMLMotionProps<'button'>, 'onAnimationComplete'> {
    isAnimate: boolean;
    outlinePath: React.ReactNode;
    filledPath: React.ReactNode;
    onAnimationComplete?: (type: 'active' | 'deactive') => void;
  }

const IconButtonBase: React.FC<IconButtonBaseProps> = ({
  isAnimate,
  outlinePath,
  filledPath,
  onAnimationComplete,
  ...rest
}) => {
  const controls = useAnimation();

  const shapeRadius = useMotionValue(0);
  const iconCircle = useMotionTemplate`${shapeRadius}px`;

  const startActiveAnimation = React.useCallback(
    async () => {
      await controls.start({
        y: 4,
        scale: 0.9,
        transition: {
          duration: 0.2,
        },
      });
      await delay(0.25);
      animate(shapeRadius, 28, {
        duration: 0.2,
      });
      await controls.start({
        y: 0,
        scale: 1,
        transition: {
          duration: 0.2,
        },
      });
      onAnimationComplete?.('active');
    },
    [controls, shapeRadius, onAnimationComplete],
  );

  React.useEffect(() => {
    if (!isAnimate) return;

    startActiveAnimation();
  }, [isAnimate, startActiveAnimation]);

  const startDeactiveAnimation = React.useCallback(
    () => {
      animate(shapeRadius, 0, {
        duration: 0.2,
        onComplete() {
          onAnimationComplete?.('deactive');
        }
      });
    },
    [shapeRadius, onAnimationComplete],
  );

  React.useEffect(() => {
    if (isAnimate) return;

    startDeactiveAnimation();
  }, [isAnimate, startDeactiveAnimation]);

  const style = {
    '--icon-circle': iconCircle,
  } as React.CSSProperties;

  return (
    <Button
      animate={controls}
      style={style}
      onAnimationComplete={() => {
        if (!isAnimate) return;
        onAnimationComplete?.('active');
      }}
      {...rest}
    >
      <SVG viewBox={'0 0 24 24'}>{outlinePath}</SVG>
      <SVG viewBox={'0 0 24 24'}>{filledPath}</SVG>
    </Button>
  );
};

export default IconButtonBase;

const Button = styled(motion.button, {
  display: 'block',
  width: 28,
  height: 28,
  padding: 0,
  margin: 0,
  outline: 'none',
  border: 'none',
  background: 'none',
  position: 'relative',
  appearance: 'none',
  overflow: 'hidden',
  '&::before': {
    content: '',
    position: 'absolute',
    zIndex: 1,
    inset: 0,
    borderRadius: '50%',
    background: '#ffffff',
    clipPath: 'circle(var(--icon-circle) at 50% 100%)',
  },
});

const SVG = styled('svg', {
  fill: '#7f00ff',
  display: 'block',
  overflow: 'visible',
  width: 28,
  height: 28,
  '&:last-of-type': {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
    clipPath: 'circle(var(--icon-circle) at 50% 100%)',
  },
});
