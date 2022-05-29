import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Confetti } from './Confetti';

/**
 *
 * https://www.framer.com/docs/gestures/#viewport
 * https://www.framer.com/docs/motionvalue/##useviewportscroll
 */
export function ScatterSection(): React.ReactElement {
  return (
    <Section
      onViewportEnter={(en) => console.log('ScatterSection viewport enter', en)}
      onViewportLeave={(en) => console.log('ScatterSection viewport leave', en)}
    >
      <Confetti />

      <div className="heading--container">
        <motion.h2 whileInView={{ color: '#fff' }}>
          2022를 함께 맞이 할
          <br />
          멋진 파트너를 소개합니다
        </motion.h2>
        <motion.p whileInView={{ color: '#ddd' }}>
          FEConf는 여러분과 후원사의 지원으로 만들어지는 비영리 단체입니다.
        </motion.p>
      </div>
      <div className="thanksto--container">
        <div className="heart-wrapper">
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
            viewBox="0 0 32 32"
          >
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
          </motion.svg>
        </div>
        <div className="content">
          <motion.h3 whileInView={{ color: '#fff' }}>Special Thanks to</motion.h3>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/febase">
            <motion.h1 whileInView={{ color: '#fff' }} className="title">
              FeBase
            </motion.h1>
          </a>
          <motion.p whileInView={{ color: '#ccc' }}>
            Web Frontend Developer 생태계 발전을 위한 FeBase의 노고에 깊이 감사드립니다!
          </motion.p>
        </div>
      </div>
      <div className="members--container">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/walt1992">
          <div className="members--item">
            <p className="name">MS</p>
            <p className="role">Leader · Intro </p>
          </div>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/wooooooood">
          <div className="members--item">
            <p className="name">JH</p>
            <p className="role">Speaker</p>
          </div>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/wooooooood">
          <div className="members--item">
            <p className="name">G0</p>
            <p className="role">Scatter</p>
          </div>
        </a>
      </div>
    </Section>
  );
}

const Section = styled(motion.section)`
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
    'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    sans-serif;
  text-align: center;
  padding: 230px 0;
  background-color: #000;
  position: relative;

  @media (max-width: 1024px) {
    padding: 80px 0;
  }

  .title {
    font-size: 5rem;
    margin: 1.5rem 0 2.25rem;
  }

  h2 {
    font-size: 3.25rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .heading--container p {
    font-size: larger;
  }
  .thanksto--container {
    margin: 120px 0;
    position: relative;
  }
  .thanksto--container .heart-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100px;
    height: 100px;
  }
  .heart {
    fill: rgba(204, 42, 93, 1);
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  .thanksto--container .content {
    position: relative;
  }

  .members--container {
    display: flex;
    gap: 8px;
    justify-content: center;
  }

  .members--item {
    width: 200px;
  }

  .name {
    color: white;
    font-weight: bold;
  }
  .role {
    color: #ccc;
  }

  @keyframes confetti-slow {
    0% {
      transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);
    }
    100% {
      transform: translate3d(25px, 105vh, 0) rotateX(360deg) rotateY(180deg);
    }
  }
  @keyframes confetti-medium {
    0% {
      transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);
    }
    100% {
      transform: translate3d(100px, 105vh, 0) rotateX(100deg) rotateY(360deg);
    }
  }
  @keyframes confetti-fast {
    0% {
      transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);
    }
    100% {
      transform: translate3d(-50px, 105vh, 0) rotateX(10deg) rotateY(250deg);
    }
  }
  .confetti-container {
    perspective: 700px;
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .confetti {
    position: absolute;
    z-index: 1;
    top: -10px;
    border-radius: 0;
  }
  .confetti--animation-slow {
    animation: confetti-slow 2.25s linear 1 forwards;
  }
  .confetti--animation-medium {
    animation: confetti-medium 1.75s linear 1 forwards;
  }
  .confetti--animation-fast {
    animation: confetti-fast 1.25s linear 1 forwards;
  }
`;
