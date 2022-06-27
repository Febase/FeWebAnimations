import React, { useEffect, useState } from 'react';
import * as $ from './styles';
import { motion } from 'framer-motion';
import AnimatedText from '../AnimatedText';

const Wonjong = () => {
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  useEffect(() => {
    const number1 = Math.floor(Math.random() * 30);
    const number2 = Math.floor(Math.random() * 20 + 40);
    const number3 = Math.floor(Math.random() * 20 + 80);
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
          hidden: { color: '#ffffff' },
          visible: {
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
      >
        <AnimatedText text={String(randomNumbers[0])} />
        <AnimatedText text={String(randomNumbers[1])} />
        <AnimatedText text={String(randomNumbers[2])} />
      </motion.div>
    </$.Wrapper>
  );
};

export default Wonjong;
