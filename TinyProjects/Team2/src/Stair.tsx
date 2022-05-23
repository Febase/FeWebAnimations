import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const names = [
  "BONHAENG LEE",
  "SEOKYOUNG MOON",
  "SOONHO JANG",
  "BYOUNGHERN KIM",
];

const stairLineCount = [
  {
    emptySpan: 6,
    filledSpan: 1,
  },
  {
    emptySpan: 5,
    filledSpan: 2,
  },
  {
    emptySpan: 4,
    filledSpan: 3,
  },
  {
    emptySpan: 3,
    filledSpan: 4,
  },
  {
    emptySpan: 2,
    filledSpan: 4,
  },
  {
    emptySpan: 1,
    filledSpan: 4,
  },
];

const Stair = () => {
  const [scroll, setScroll] = useState<number>(0);
  const wrap = useRef<any>(null);

  const handleScroll = (e: Event) => {
    const st = (e.target as HTMLElement).scrollTop;
    setScroll(st);
  };

  useEffect(() => {
    (() => {
      window.addEventListener("scroll", handleScroll, {
        passive: true,
        capture: true,
      });
    })();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StairSection>
      <StairContainer ref={wrap}>
        {stairLineCount.map(({ emptySpan, filledSpan }, i) => (
          <StairLine key={i}>
            {Array.from({ length: emptySpan + filledSpan }).map((_, j) => (
              <motion.span
                key={i + "-" + j}
                transformTemplate={({ y }) => `translateY(-${y})`}
                style={{ y: scroll }}
                whileHover={{
                  scale: 1.1,
                  textShadow: `-6px -8px 0px ${true ? "#853e18" : "#ffaa22"}`,
                }}
              >
                {/* <motion.div whileHover={{}}> " asdfasdfasd"</motion.div> */}
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
