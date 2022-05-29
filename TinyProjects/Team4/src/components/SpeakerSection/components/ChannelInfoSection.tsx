import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { opacityYVariants } from '../variants';
import { ChannelInfo } from './ChannelInfo';

function ChannelInfoSection(): React.ReactElement {
  return (
    <Wrapper>
      <DescriptionPart initial="hidden" whileInView="show" viewport={{ once: true }} variants={opacityYVariants}>
        <Title variants={opacityYVariants}>
          온라인에서
          <br />
          생생한 경험을
        </Title>
        <Description variants={opacityYVariants}>
          유튜브로 공개하는 FEConf2021은 어디서든
          <br />
          만나볼 수 있어요.
          <br />
          FEConf 유투브 채널 구독 이벤트에 참여해보세요
        </Description>
        <Anchor href="https://youtube.com" target="_blank" rel="noreferrer" variants={opacityYVariants}>
          유튜브 구독하기
        </Anchor>
      </DescriptionPart>
      <ChannelInfo />
    </Wrapper>
  );
}

export default ChannelInfoSection;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  background-color: #000;
  flex-wrap: wrap;
  color: #fff;
  padding: 180px 50px;
  overflow: hidden;
`;

const DescriptionPart = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled(motion.h2)`
  font-size: 56px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
`;
const Description = styled(motion.p)`
  color: #c0c9db;
  font-size: 18px;
  line-height: 1.6;
  margin: 36px 0 0 0;
`;

const Anchor = styled(motion.a)`
  background-color: #fff;
  border-radius: 100px;
  color: #000;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.6;
  margin-top: 40px;
  padding: 16px 28px 16px 36px;
  text-decoration: none;
`;
