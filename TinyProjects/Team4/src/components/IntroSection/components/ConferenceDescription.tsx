import styled from '@emotion/styled';
import { motion, useAnimation } from 'framer-motion';

const variants = {
  moveUp: {
    transform: 'translate(-50%, -60%)',
  },
  fadeIn: (i: number) => ({
    opacity: [0, 1],
    transition: {
      ease: 'easeOut',
      duration: 1,
      delay: i * 0.3,
    },
  }),
};

export function ConferenceDescription() {
  const WrapperCtrl = useAnimation();
  const textCtrl = useAnimation();
  return (
    <Wrapper
      initial={{
        transform: 'translate(-50%, -10%)',
      }}
      animate={WrapperCtrl}
      variants={variants}
      onViewportEnter={() => {
        WrapperCtrl.start('moveUp');
        setTimeout(() => {
          textCtrl.start('fadeIn');
        }, 1500);
      }}
      transition={{
        ease: 'linear',
        delay: 1,
        duration: 1,
      }}
    >
      {[
        <Theme key={0}>2022 FEBase Conference Theme</Theme>,
        <Description key={1}>
          프론트엔드 개발의
          <br />
          소중한 경험을
          <br />
          공유합니다!
        </Description>,
        <Footer key={2}>
          BROADEN YOUR EXPERIENCE
        </Footer>,
      ].map((components, i) => (
        <motion.div custom={i} key={i} variants={variants} animate={textCtrl} initial={{ opacity: 0 }}>
          {components}
        </motion.div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  color: #ffffff;
`;

const Theme = styled.p`
  font-size: 24px;
`;

const Description = styled.h2`
  font-size: 40px;
  margin: 0
`;

const Footer = styled.p`
  font-size: 16px
`;
