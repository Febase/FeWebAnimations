import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  motion,
  motionValue,
  TargetAndTransition,
  useTransform,
  useViewportScroll,
  VariantLabels,
} from "framer-motion";

const names = [
  "BONHAENG LEE",
  "SEOKYOUNG MOON",
  "SOONHO JANG",
  "BYOUNGHERN KIM",
];

interface StairLineProps {
  emptySpan: number;
  filledSpan: number;
  whileHover?: VariantLabels | TargetAndTransition;
}

const stairLines: StairLineProps[] = [
  {
    emptySpan: 6,
    filledSpan: 1,
  },
  {
    //본행
    emptySpan: 5,
    filledSpan: 2,
  },
  {
    //석영
    emptySpan: 4,
    filledSpan: 3,
    whileHover: {},
  },
  {
    //순호
    emptySpan: 3,
    filledSpan: 4,
    whileHover: {
      scale: 1.1,
      textShadow: `-6px -8px 0px ${true ? "#853e18" : "#ffaa22"}`,
    },
  },
  {
    //병헌
    emptySpan: 2,
    filledSpan: 4,
  },
  {
    emptySpan: 1,
    filledSpan: 4,
  },
];

const MAX_SCROLL_TOP = 480; // 6rem * 5

const Stair = () => {
  const { scrollYProgress } = useViewportScroll();
  const scroll = useTransform(scrollYProgress, [0, 1], [0.1, 480]);

  return (
    <StairSection>
      <StairContainer>
        {stairLines.map(({ emptySpan, filledSpan, whileHover }, i) => (
          <StairLine key={i}>
            {Array.from({ length: emptySpan + filledSpan }).map((_, j) => (
              <motion.span
                key={i + "-" + j}
                transformTemplate={({ y }) => {
                  console.log(y);
                  return `translateY(-${y})`;
                }}
                style={{ y: scroll }}
                whileHover={whileHover}
              >
                {j + 1 > emptySpan ? names[j - emptySpan] : " "}
              </motion.span>
            ))}
          </StairLine>
        ))}
      </StairContainer>
    </StairSection>
  );
};

export default Stair;

const StairSection = styled.section`
  padding: 0 1rem;
  height: 200vh;
  padding-top: 50vh;
`;
const StairContainer = styled.div`
  position: sticky;
  top: 1rem;
  height: auto;
`;
const StairLine = styled.div`
  font-family: "Lexend Deca", sans-serif;
  height: 6rem;
  backface-visibility: hidden;
  overflow: hidden;
  white-space: nowrap;
  position: relative;

  > span {
    display: block;
    font-weight: 700;
    font-size: 6rem;
    line-height: 1.2;
    height: 6rem;
    text-transform: uppercase;
    text-rendering: optimizeLegibility;
    width: 100%;
    margin: 0;
    transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  &:nth-child(odd) {
    transform: skew(60deg, -25deg) scaleY(0.58);
    color: #853e18;
  }

  &:nth-child(even) {
    transform: skew(0deg, -25deg) scaleY(1.38);
    color: #ffaa22;
  }

  &:first-child {
    left: 3rem;
  }

  &:nth-child(2) {
    left: 6rem;
  }

  &:nth-child(3) {
    left: 9rem;
  }

  &:nth-child(4) {
    left: 12rem;
  }

  &:nth-child(5) {
    left: 15rem;
  }

  &:last-child {
    left: 18rem;
  }
`;
