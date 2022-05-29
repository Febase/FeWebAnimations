/* eslint-disable no-param-reassign */
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { P5Instance, ReactP5Wrapper, Sketch, SketchProps } from 'react-p5-wrapper';
import feconfCircle from '../assets/feconfCircle.png';
import { opacityYVariants } from '../variants';

const sketch: Sketch<SketchProps> = (p5: P5Instance<SketchProps>) => {
  let i = 0;
  let img: any;
  p5.setup = () => {
    p5.createCanvas(400, 400, p5.WEBGL);
    img = p5.loadImage(feconfCircle);
  };
  p5.draw = () => {
    p5.image(img, -p5.width / 2.45, -p5.height / 2.45, 330, 330);
    p5.rotateX(-0.9);
    p5.rotateZ(-0.2);
    p5.rotateY((i += 0.005));
    p5.stroke(255);
    p5.strokeWeight(0.4);
    p5.noFill();
    p5.sphere(150, 24, 24);
  };
};
export function ChannelInfo(): React.ReactElement {
  return (
    <Wrapper initial="hidden" whileInView="show" viewport={{ once: true }} variants={opacityYVariants}>
      <Rect sketch={sketch} />
      <Background />
    </Wrapper>
  );
}
const Wrapper = styled(motion.div)`
  position: relative;
`;
const Rect = styled(ReactP5Wrapper)`
  overflow: hidden;
`;
const Background = styled.div`
  position: absolute;
  background: radial-gradient(52.56% 52.56% at 50% 50%, #5254b0 0, rgba(154, 156, 255, 0) 100%);
  height: 600px;
  left: 224px;
  position: absolute;
  top: -50px;
  width: 600px;
  z-index: 0;
`;
