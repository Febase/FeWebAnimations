import { styled } from '@stitches/react';
import { motion } from 'framer-motion';
import { leaf, leafWrapper } from '../variants';

const Leaf = ({ css, imageUrl, animationSpeed }: any) => {
  return (
    <LeafContainer variants={leafWrapper} css={{ ...css }}>
      <LeafImage custom={animationSpeed} variants={leaf} src={imageUrl} />
    </LeafContainer>
  );
};

export default Leaf;

const LeafContainer = styled(motion.div, {
  position: 'absolute',
});

const LeafImage = styled(motion.img, {
  height: '7rem',
  width: '5rem',
});
