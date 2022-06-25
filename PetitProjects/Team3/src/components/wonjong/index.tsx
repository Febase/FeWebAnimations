import React, { useEffect, useState } from 'react';
import * as $ from './styles';
import { motion } from 'framer-motion';
import AnimatedText from '../AnimatedText';

const Wonjong = () => {
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  useEffect(() => {
    const number1 = Math.floor(Math.random() * 30 + 10);
    const number2 = Math.floor(Math.random() * 30 + 40);
    const number3 = Math.floor(Math.random() * 30 + 70);
    setRandomNumbers([number1, number2, number3]);
  }, []);

  return (
    <$.Wrapper>
      <$.LeftTitleContainer>
        Wonjong Oh <br />
        Frontend Web Developer
      </$.LeftTitleContainer>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.025,
            },
          },
        }}
      >
        <AnimatedText text={String(randomNumbers[2])}
                      style={{ fontSize: '60px', fontWeight: '900', textAlign: 'right', margin: '0 40px 0 0' }} />
        <AnimatedText text={String(randomNumbers[1])}
                      style={{ fontSize: '60px', fontWeight: '900', textAlign: 'right', margin: '0 40px 0 0' }} />
        <AnimatedText text={String(randomNumbers[0])}
                      style={{ fontSize: '60px', fontWeight: '900', textAlign: 'right', margin: '0 40px 0 0' }} />
      </motion.div>
    </$.Wrapper>
  );
};

export default Wonjong;
