import { globalCss, styled } from '@stitches/react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import TextContainer from './components/TextContainer';
import { leavesContainer } from './variants';
import { motion } from 'framer-motion';
import Leaf from './components/Leaf';
import LeafImage01 from './assets/leaf01.png';
import LeafImage02 from './assets/leaf02.png';
import LeafImage03 from './assets/leaf03.png';
import LeafImage04 from './assets/leaf04.png';
import LeafImage05 from './assets/leaf05.png';

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
  body: { minHeight: '100vh' },
});

function NareumPortflio() {
  globalStyles();
  return (
    <Container>
      {/* <LeftSection></LeftSection>
      <RightSection>
        <IntroSection />
      </RightSection> */}
      <Header />
      <Main>
        <TextContainer />
        <motion.div
          variants={leavesContainer}
          initial='initial'
          animate='animate'
        >
          <Leaf
            css={{ top: '13rem', left: '30%' }}
            animationSpeed={1.8}
            imageUrl={LeafImage01}
          />
          <Leaf
            css={{ top: '50%', right: '18rem' }}
            animationSpeed={1.6}
            imageUrl={LeafImage02}
          />
          <Leaf
            css={{ top: '2.5rem', right: '40%' }}
            animationSpeed={1.5}
            imageUrl={LeafImage03}
          />
          <Leaf
            css={{ top: '36%', right: '33%' }}
            animationSpeed={1.7}
            imageUrl={LeafImage04}
          />
          <Leaf
            css={{ top: '75%', left: '25%' }}
            animationSpeed={1.8}
            imageUrl={LeafImage05}
          />
        </motion.div>
      </Main>
    </Container>
  );
}

export default NareumPortflio;

const Container = styled('div', {
  // display: 'flex',
  minHeight: '100vh',
  wordBreak: 'keep-all',
});
const Main = styled('main', {
  minHeight: '90vh',
});
const LeftSection = styled('section', {
  flex: 1,
  backgroundColor: '#202226',
  padding: '256px 85px 256px 0',
  position: 'relative',
});

const RightSection = styled('section', {
  flex: 1,
  backgroundColor: '#FAF9F5',
  padding: '256px 0 256px 85px',
  position: 'relative',
});
