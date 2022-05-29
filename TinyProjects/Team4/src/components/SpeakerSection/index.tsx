import styled from '@emotion/styled';
import { motion, useViewportScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import ChannelInfoSection from './components/ChannelInfoSection';
import SpeakerList from './components/SpeakerList';
import { opacityYVariants } from './variants';

/**
 *
 * https://www.framer.com/docs/gestures/#viewport
 * https://www.framer.com/docs/motionvalue/##useviewportscroll
 */
export function SpeakerSection(): React.ReactElement {
  const ref = useRef<HTMLElement>(null);
  const [threshold, setThreshold] = useState<number>(0);
  const { scrollY } = useViewportScroll();

  return (
    <>
      <ChannelInfoSection />
      <Wrapper
        ref={ref}
        onViewportEnter={(en) => {
          scrollY.onChange((value) => {
            const { height, top } = ref.current!.getBoundingClientRect();

            const t = (value - top) / height;
            if (t > 5) {
              setThreshold(5);
            } else {
              setThreshold(t);
            }
          });
        }}
        onViewportLeave={(en) => {
          scrollY.clearListeners();
        }}
      >
        <SectionHeader initial="hidden" whileInView="show" viewport={{ once: true }} variants={opacityYVariants}>
          <Title>스피커 소개</Title>
          <Description>소중한 경험을 공유해줄 12명의 멋진 스피커를 소개합니다.</Description>
        </SectionHeader>
        <ListWrapper>
          <SpeakerList order={0} threshold={threshold} />
          <SpeakerList order={1} threshold={threshold} />
        </ListWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled(motion.section)`
  background-color: #000;
  position: relative;
  color: #fff;
  height: 1000px;
  overflow: hidden;
  width: 100%;
  & > ul + ul {
    margin-top: 20px;
  }
`;

const SectionHeader = styled(motion.header)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 56px;
  font-weight: 700;
  margin: 0;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 28px;
  margin-top: 32px;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > ul + ul {
    margin-top: 20px;
  }
`;
