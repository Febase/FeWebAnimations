import { useRef, useState } from 'react';
import { motion, useViewportScroll } from 'framer-motion';
import styled from '@emotion/styled';
import { MouseTracking } from './components/MouseTracking';
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
    <Section
      ref={ref}
      style={{ height: 2000 }}
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
    >
      <MoonCircle />
      <MouseTracking threshold={threshold} />
    </Section>
  );
}

const Section = styled(motion.section)`
  position: relative;
  background: linear-gradient(95.06deg, rgb(130, 128, 227) 2.38%, rgb(85, 144, 237) 100.44%);

  &:before {
    background:url(https://2021.feconf.kr/static/noise-c0e6992315ac6e9234d9ee3bb56336b1.png) repeat;
    background-size: 100% 100vh;
    content: "";
    height: 100%;
    mix-blend-mode: soft-light;
    pointer-events: none;
    position: absolute;
    width: 100%;
  }
`;

const MoonCircle = styled.div`
  background: linear-gradient(#8faeff,rgba(116,155,255,0));
  border-radius: 50%;
  height: 80vmax;
  pointer-events: none;
  position: absolute;
  right: -20vmax;
  top: -30vmax;
  width: 80vmax;
  z-index: 0;
`;
