import React, { useRef, useState } from 'react';
import { motion, useViewportScroll } from 'framer-motion';

/**
 *
 * https://www.framer.com/docs/gestures/#viewport
 * https://www.framer.com/docs/motionvalue/##useviewportscroll
 */
export function IntroSection(): React.ReactElement {
  const ref = useRef<HTMLElement>(null);
  const [threshold, setThreshold] = useState<number>(0);
  const { scrollY } = useViewportScroll();

  console.log('IntroSection intersection ratio', threshold);
  return (
    <motion.section
      ref={ref}
      style={{ height: 5000 }}
      whileInView={{ backgroundColor: '#eee' }}
      onViewportEnter={(en) => {
        scrollY.onChange((value) => {
          const { height } = ref.current!.getBoundingClientRect();
          const t = (value - ref.current!.offsetTop) / height;

          if (t < 0) {
            setThreshold(0);
          } else if (t > 1) {
            setThreshold(1);
          } else {
            setThreshold(t);
          }
        });
      }}
      onViewportLeave={(en) => {
        scrollY.clearListeners();
      }}
    />
  );
}
