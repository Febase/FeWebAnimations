import styled from '@emotion/styled';
import { motion, useAnimation } from 'framer-motion';

const variants = {
  hidden: {
    opacity: 0,
    transform: 'translate(-50%, -30%)',
  },
  fadeIn: {
    opacity: 1,
    transform: 'translate(-50%, -50%)',
    transition: {
      ease: 'easeIn',
      duration: 1,
      staggerChildren: 0.5,
    },
  },
  typing: (i: number) => ({
    opacity: [0, 1],
    y: [3, -5, 0],
    scale: [0.9, 1.1, 1],
    transition: {
      ease: 'easeOut',
      duration: 0.5,
      delay: i * 0.3,
      times: [0, 0.3, 1],
      // repeat: Infinity,
    },
  }),
};

export function ConferenceDescription() {
  const wrapperCtrl = useAnimation();
  const textCtrl = useAnimation();

  return (
    <Wrapper
      animate={wrapperCtrl}
      variants={variants}
      initial="hidden"
      whileInView="fadeIn"
      onViewportEnter={async () => {
        await wrapperCtrl.start('fadeIn');
        textCtrl.start('typing');
      }}
      viewport={{ once: true }}
    >
      <Theme key={0}>
        {
        '2022 FEBase Conference Theme'.split('').map((char, index) => (
          <Char
            custom={index}
            animate={textCtrl}
            variants={variants}
            key={index}
            style={{
              opacity: 0,
              display: char !== ' ' ? 'inline-block' : 'inline',
            }}
          >
            {char}
          </Char>
        ))
        }
      </Theme>
      <Description key={1}>
        프론트엔드 개발의
        <br />
        소중한 경험을
        <br />
        공유합니다!
      </Description>
      <Footer key={2}>
        BROADEN YOUR EXPERIENCE
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  text-align: center;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  color: #ffffff;
`;

const Theme = styled(motion.p)`
  font-size: 24px;
`;

const Description = styled(motion.h2)`
  font-size: 60px;
  margin: 0
`;

const Footer = styled(motion.p)`
  font-size: 16px
`;

const Char = styled(motion.span)`
  display:inline-block
`;
