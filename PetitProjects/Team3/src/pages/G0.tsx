import { styled, keyframes } from '@stitches/react';
import { motion } from 'framer-motion';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

const G0 = () => {
  return (
    <Wrapper>
      <Card
        animate={{
          y: [0, 25, 0],
          rotate: [-15, -15, -15],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      >
        <h1>G0</h1>
        <p>Web Frontend Developer</p>
        <ul>
          <li>
            <BsLinkedin />
          </li>
          <li>
            <BsGithub />
          </li>
          <li>
            <BsInstagram />
          </li>
        </ul>
      </Card>
    </Wrapper>
  );
};

const gradient = keyframes({
  '0%': {
    backgroundPosition: '0% 50%',
  },
  '50%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0% 50%',
  },
});

const Wrapper = styled('div', {
  height: '100%',
  width: '100%',
  background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
  backgroundSize: '400% 400%',
  animation: `${gradient} 15s ease infinite`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Card = styled(motion.div, {
  padding: '2rem 3rem',
  background: 'rgba( 255, 255, 255, 0.25 )',
  boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
  backdropFilter: 'blur( 13.5px )',
  borderRadius: '20px',
  border: '1px solid rgba( 255, 255, 255, 0.18 )',

  textAlign: 'center',
  color: 'white',

  '& h1': {
    fontSize: '3rem',
  },

  '& p': {
    fontSize: '2rem',
  },

  '& ul': {
    listStyle: 'none',
    fontSize: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0',
  },

  '& li:hover': {
    opacity: '0.7',
    cursor: 'pointer',
  },
});

export default G0;
