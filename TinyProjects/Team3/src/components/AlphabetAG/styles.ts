import styled from 'styled-components';
import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1
  }
};

export const IconStyled = styled(motion.svg)<{color?: string, order?: number}>`
  width: 100px;
  overflow: visible;
  fill: none;

  stroke: ${props => props.color || 'red'};
  stroke-width: 10px;
  ${props => props.order && `
    position: absolute;
  `}
  z-index: ${props => props.order}
`;

export const IconPathStyled = styled(motion.path).attrs(() => ({
  initial: "hidden",
  variants: pathVariants,
  animate: "visible"
}))``;
