import * as React from 'react';
import { styled } from '@stitches/react';
import { motion, useAnimation } from 'framer-motion';
import type { SVGMotionProps } from 'framer-motion';

export interface IconBaseProps extends SVGMotionProps<SVGSVGElement> {
  isAnimate: boolean;
  children: React.ReactNode;
}

const IconBase: React.FC<IconBaseProps> = ({
  isAnimate,
  children,
  ...rest
}) => {
  const controls = useAnimation();

  React.useEffect(() => {
    if (!isAnimate) return;

    controls.start({
      strokeDashoffset: [400, 0],
      transition: {
        duration: 1.5,
      },
    });

  }, [isAnimate, controls]);

  return (
    <SVG
      width={56}
      height={56}
      viewBox={'0 0 24 24'}
      animate={controls}
      {...rest}
    >
      {children}
    </SVG>
  );
};

export default IconBase;

const SVG = styled(motion.svg, {
  stroke: '#ffffff',
  fill: 'transparent',
  strokeWidth: '1pt',
  strokeMiterlimit: 10,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeDasharray: 400,
});
