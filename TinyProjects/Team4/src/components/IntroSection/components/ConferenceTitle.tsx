import styled from '@emotion/styled';
import { motion, useAnimation } from 'framer-motion';
import { useCallback, useEffect } from 'react';

const variants = {
  typing: (i: number) => ({
    y: [3, -5, 0],
    scale: [0.9, 1.1, 1],
    transition: {
      ease: 'easeOut',
      duration: 0.5,
      delay: i * 0.3,
      times: [0, 0.3, 1],
      // repeat: Infinity
    },
  }),
};

export function ConferenceTitle({ threshold }: {threshold: number}) {
  const wrapperCtrl = useAnimation();
  const titleCtrl = useAnimation();

  const typingLoop = useCallback(async () => {
    await titleCtrl.start('typing');
    // typingLoop();
  }, []);

  const startAnimation = useCallback(async () => {
    await wrapperCtrl.start({
      transform: ' translateY(-50%) scale(1)',
      opacity: 1,
      transition: {
        repeat: 0,
        duration: 2,
      },
    });
    await wrapperCtrl.start({
      backgroundPosition: '0%',
    });
    await typingLoop();
  }, [typingLoop]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  return (
    <Wrapper
      initial={{
        backgroundPosition: '200%',
        transform: ' translateY(-50%) scale(0.5)',
        opacity: 0,
      }}
      animate={wrapperCtrl}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
      <ConfTitle>
        2022
        <br />
        {'FE BASE CONF'.split('').map((char, i) => (
          <motion.span
            key={i}
            style={{ display: char !== ' ' ? 'inline-block' : 'inline' }}
            animate={titleCtrl}
            variants={variants}
            custom={i}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 2,
            }}
          >
            {char}
          </motion.span>
        ))}
      </ConfTitle>
      <Date>12.25 토</Date>
      <Description>Frontend Engineer Conference</Description>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  text-align: center;
  position: sticky;
  color: #ffffff;
  top: 50%;
  transform: translateY(-50%);
  color: transparent;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(90deg, #d5d4fa,#3277dd, #d5d4fa);
  background-clip: text;
  background-size: 200%;
  background-repeat: repeat;
`;

const ConfTitle = styled(motion.h1)`

  font-size: 100px;
  margin: 0;
`;

const Date = styled.p`
  padding-top: 12px;
  font-weight: 700;
  font-size: 40px;
  margin: 0;
`;

const Description = styled.p`
  padding-top: 20px;
  font-weight: 700;
  font-size: 30px;
  margin: 0;
`;
