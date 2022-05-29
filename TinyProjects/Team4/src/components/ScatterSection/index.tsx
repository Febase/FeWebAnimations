import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Confetti } from './Confetti';
import { Heart } from './Heart';

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
        <Heart />
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
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/na-reum">
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
  .thanksto--container .content {
    position: relative;
  }

  .members--container {
    position: relative;
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
`;
