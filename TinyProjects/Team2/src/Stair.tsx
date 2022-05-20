import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const names = [
  'BONHAENG LEE',
  'SEOKYOUNG MOON',
  'SOONHO JANG',
  'BYOUNGHERN KIM',
];

const Stair = () => {
  const [scroll, setScroll] = useState<number>(0);
  const wrap = useRef<any>(null);

  const handleScroll = (e: Event) => {
    const st = (e.target as HTMLElement).scrollTop;
		if (window.innerHeight < st) setScroll(st);
  };

  useEffect(() => {
    (() => {
      window.addEventListener('scroll', handleScroll, {
        passive: true,
        capture: true,
      });
    })();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StairSection>
      <StairContainer ref={wrap}>
        <StairLine>
          <span style={{ transform: `translateY(-${scroll}px)` }}> </span>
          <span style={{ transform: `translateY(-${scroll}px)` }}> </span>
          <span style={{ transform: `translateY(-${scroll}px)` }}> </span>
          <span style={{ transform: `translateY(-${scroll}px)` }}> </span>
          <span style={{ transform: `translateY(-${scroll}px)` }}> </span>
          <span style={{ transform: `translateY(-${scroll}px)` }}> </span>
          <span style={{ transform: `translateY(-${scroll}px)` }}>
            {names[0]}
          </span>
        </StairLine>
        <StairLine>
          <span style={{ transform: `translateY(-${scroll}px)` }}></span>
          <span style={{ transform: `translateY(-${scroll}px)` }}></span>
          <span style={{ transform: `translateY(-${scroll}px)` }}></span>
          <span style={{ transform: `translateY(-${scroll}px)` }}></span>
          <span style={{ transform: `translateY(-${scroll}px)` }}></span>
          <span style={{ transform: `translateY(-${scroll}px)` }}>
            {names[0]}
          </span>
          <span style={{ transform: `translateY(-${scroll}px)` }}>
            {names[1]}
          </span>
        </StairLine>
        <StairLine>
          <span style={{ transform: `translateY(-${scroll}px)` }}></span>
          <span style={{ transform: `translateY(-${scroll}px)` }}></span>
          <span style={{ transform: `translateY(-${scroll}px)` }}></span>
          <span style={{ transform: `translateY(-${scroll}px)` }}></span>
          <span style={{ transform: `translateY(-${scroll}px)` }}>
            {names[0]}
          </span>
          <span style={{ transform: `translateY(-${scroll}px)` }}>
            {names[1]}
          </span>
          <span style={{ transform: `translateY(-${scroll}px)` }}>
            {names[2]}
          </span>
        </StairLine>
        <StairLine>
          <span style={{ transform: `translateY(-${scroll}px)` }}></span>
          <span style={{ transform: `translateY(-${scroll}px)` }}></span>
          <span style={{ transform: `translateY(-${scroll}px)` }}></span>
          <span style={{ transform: `translateY(-${scroll}px)` }}>
            {names[0]}
          </span>
          <span style={{ transform: `translateY(-${scroll}px)` }}>
            {names[1]}
          </span>
          <span style={{ transform: `translateY(-${scroll}px)` }}>
            {names[2]}
          </span>
          <span style={{ transform: `translateY(-${scroll}px)` }}>
            {names[3]}
          </span>
        </StairLine>
        <StairLine>
          <span style={{ transform: `translateY(-${scroll}px)` }}></span>
          <span style={{ transform: `translateY(-${scroll}px)` }}></span>
          <span style={{ transform: `translateY(-${scroll}px)` }}>
            {names[0]}
          </span>
          <span style={{ transform: `translateY(-${scroll}px)` }}>
            {names[1]}
          </span>
          <span style={{ transform: `translateY(-${scroll}px)` }}>
            {names[2]}
          </span>
          <span style={{ transform: `translateY(-${scroll}px)` }}>
            {names[3]}
          </span>
        </StairLine>
        <StairLine>
          <span style={{ transform: `translateY(-${scroll}px)` }}></span>
          <span style={{ transform: `translateY(-${scroll}px)` }}>
            {names[0]}
          </span>
          <span style={{ transform: `translateY(-${scroll}px)` }}>
            {names[1]}
          </span>
          <span style={{ transform: `translateY(-${scroll}px)` }}>
            {names[2]}
          </span>
          <span style={{ transform: `translateY(-${scroll}px)` }}>
            {names[3]}
          </span>
        </StairLine>
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
  font-family: 'Lexend Deca', sans-serif;
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
    transform: skew(60deg, -25deg) scaleY(0.6667);
    color: #853e18;
  }

  &:nth-child(even) {
    transform: skew(0deg, -25deg) scaleY(1.333);
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
