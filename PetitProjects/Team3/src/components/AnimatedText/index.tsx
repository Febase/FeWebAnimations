import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import * as $ from './styles';

const item = {
  hidden: {
    y: '200%',
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};
// Word wrapper
const Wrapper = ({ children }: { children: ReactNode }) => {
  // We'll do this to prevent wrapping of words using CSS
  return <motion.span className='word-wrapper'>{children}</motion.span>;
};

const AnimatedText = ({ text }: { text: string }) => {
  const words: string[][] = text.split(' ')
    .map((el) => el.split(''))
    .map((el) => [...el, '\u00A0']);

  return (
    <$.H1Container style={{ 'bottom': `${Number(text) * 0.8}%` }}>
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: 'hidden',
                    display: 'inline-block',
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: 'inline-block' }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
      {/* {} */}
    </$.H1Container>
  );
};

export default AnimatedText;
