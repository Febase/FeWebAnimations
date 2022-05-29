import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children?: JSX.Element[];
}
interface IConfetti {
  style: object;
  shape: string;
}

export function Confetti(): React.ReactElement {
  const elRef = useRef<HTMLDivElement>(null);
  const confettiColors = ['#ffc400', '#ff726d', '#b48def', '#f4306d', '#007bff'];
  const [confetties, setConfetties] = useState<Array<IConfetti>>([]);

  useEffect(() => {
    setInterval(() => {
      if (!elRef.current) return;

      const confettiSize = `${Math.floor(Math.random() * 4) + 10}px`;
      const confettiBackground = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      const confettiLeft = `${Math.floor(Math.random() * elRef.current.offsetWidth)}px`;
      const confettiShape = Math.floor(Math.random() * 10) / 2 === 0 ? 'confetti' : 'confetti-round';

      const inlineStyles = {
        left: confettiLeft,
        width: confettiSize,
        height: confettiSize,
        backgroundColor: confettiBackground,
      };

      setConfetties((confetties) => {
        console.log([...confetties, { style: inlineStyles, shape: confettiShape }]);
        return [...confetties, { style: inlineStyles, shape: confettiShape }];
      });
    }, 4000);
  }, []);

  return (
    <Wrapper ref={elRef}>
      <div id="confetti-container">
        {confetties.map((item, key) => (
          <motion.div
            key={key}
            // animate={{
            //   rotateX: [0, 360],
            //   rotateY: [0, 180],
            //   translateX: [0, 0],
            //   translateY: [0, 100],
            // }}
            transition={{
              duration: 2.5,
              ease: 'linear',
              repeat: Infinity,
            }}
            style={item.style}
            className={`confetti--animation-slow ${item.shape}`}
          />
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @keyframes confetti-slow {
    0% {
      transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);
    }

    100% {
      transform: translate3d(0px, 100vh, 0) rotateX(360deg) rotateY(180deg);
    }
  }

  width: 100%;
  height: 100%;

  #confetti-container {
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .confetti {
    position: absolute;
    z-index: 1;
    top: -10px;
    border-radius: 0%;

    &--animation-slow {
      animation: confetti-slow 2.25s linear 1 forwards;
      animation-iteration-count: infinite;
    }
  }

  .confetti-round {
    position: absolute;
    z-index: 1;
    top: -10px;
    border-radius: 50%;

    &--animation-slow {
      animation: confetti-slow 2.25s linear 1 forwards;
      animation-iteration-count: infinite;
    }
  }
`;
