import { styled } from '@stitches/react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';

const TextContainer = () => {
  return (
    <Container variants={staggerContainer} initial='initial' animate='animate'>
      <ContainerTop>
        <Summary variants={fadeIn()}>FrontEnd Developer</Summary>
        <motion.span variants={fadeIn()}>28 years old</motion.span>
      </ContainerTop>
      <ContainerMid>
        <Title variants={fadeIn()} initial='initial' animate='animate'>
          NAREUM
        </Title>
      </ContainerMid>
      <ContainerBottom>
        <ProjectMoveButton variants={fadeIn()}>
          show all the Project
        </ProjectMoveButton>
        <Nareum variants={fadeIn()}>
          나름 : 각자가 가지고 있는 고유의 방식. 또는 그 자체.
        </Nareum>
      </ContainerBottom>
    </Container>
  );
};

export default TextContainer;

const Container = styled(motion.div, {
  padding: '7rem 13rem',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '70vh',
});

const ContainerTop = styled('div', {
  fontSize: '1.5rem',
  lineHeight: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Summary = styled(motion.span, {
  color: 'rgba(5, 150, 105, 1)',
});

const ContainerMid = styled('div', {
  display: 'grid',
  flex: '1 1 0%',
  placeItems: 'center',
});

const Title = styled(motion.span, {
  fontSize: '8rem',
  fontWeight: 900,
  letterSpacing: '0.05rem',
});

const ContainerBottom = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const ProjectMoveButton = styled(motion.button, {
  padding: '0.75rem 1.5rem',
  borderRadius: '0.5rem',
  backgroundColor: 'rgba(17, 24, 39, 1)',
  color: 'rgba(255, 255, 255, 1)',
  letterSpacing: '0.025rem',
});

const Nareum = styled(motion.p, {
  fontSize: '1.5rem',
  fontWeight: 600,
});
