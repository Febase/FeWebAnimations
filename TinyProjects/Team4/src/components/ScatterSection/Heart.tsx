import styled from '@emotion/styled';
import { motion } from 'framer-motion';

/**
 *
 * https://www.framer.com/docs/gestures/#viewport
 * https://www.framer.com/docs/motionvalue/##useviewportscroll
 */
export function Heart(): React.ReactElement {
  return (
    <Wrapper>
      <motion.svg
        animate={{
          scale: [1, 2, 1],
          opacity: [0.8, 0.4, 0.8],
        }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        className="heart"
        style={{ originX: '50%', originY: '50%' }}
        viewBox="0 0 32 32"
      >
        <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
      </motion.svg>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 200px;
  height: 200px;
  .heart {
    fill: rgba(204, 42, 93, 1);
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;
