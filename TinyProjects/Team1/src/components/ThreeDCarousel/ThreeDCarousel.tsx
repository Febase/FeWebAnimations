// https://codepen.io/desandro/pen/wjeBpp

import { styled } from "@stitches/react";
import { motion } from "framer-motion";

const ThreeDCarouselScreen = styled(motion.div, {
  width: "400px",
  height: "140px",
  position: "relative",
  perspective: "1000px"
});

const ThreeDCarouselContainer = styled(motion.div, {
  width: "100%",
  height: "100%",
  position: "absolute",
  transformStyle: "preserve-3d",
  transform: "translateZ(-288px) rotateY(-160deg)",
  transition: "transform 1s",
});

const ThreeDCarouselItem = styled(motion.div, {
  position: "absolute",
  width: "190px",
  height: "120px",
  left: "10px",
  top: "10px",
  border: "2px solid black",
  lineHeight: "116px",
  fontSize: "80px",
  fontWeight: "bold",
  color: "white",
  textAlign: "center",
  "&:nth-child(9n+1)": { background: "hsla(0, 100%, 50%, 0.8)"},
  "&:nth-child(9n+2)": { background: "hsla(40, 100%, 50%, 0.8)"},
  "&:nth-child(9n+3)": { background: "hsla(80, 100%, 50%, 0.8)"},
  "&:nth-child(9n+4)": { background: "hsla(120, 100%, 50%, 0.8)"},
  "&:nth-child(9n+5)": { background: "hsla(160, 100%, 50%, 0.8)"},
  "&:nth-child(9n+6)": { background: "hsla(200, 100%, 50%, 0.8)"},
  "&:nth-child(9n+7)": { background: "hsla(240, 100%, 50%, 0.8)"},
  "&:nth-child(9n+8)": { background: "hsla(280, 100%, 50%, 0.8)"},
  "&:nth-child(9n+0)": { background: "hsla(320, 100%, 50%, 0.8)"},
})

type Props = {
  size: number
}

function ThreeDCarousel ({ size = 9 }: Props) {
  const theta = 360 / size;
  const cellSize = 190;
  const radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / size ) );

  const arrToSize = new Array(size).fill(0).map((arr, i) => i);
  const getTransformsArr = (i: number) => {
    const ratateNum = new Array(size + 1).fill(0).map((arr, i) => i);
    return ratateNum.map(rotate => `rotateY(${theta * (i + rotate)}deg) translateZ(${radius}px)`)
  }

  return (
    <ThreeDCarouselScreen>
      <ThreeDCarouselContainer>
        {arrToSize.map((_, i) =>
          <ThreeDCarouselItem
            animate={{
              transform: getTransformsArr(i)
            }}
            transition={{
              ease: "easeInOut",
              duration: 10,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            {i+1}
          </ThreeDCarouselItem>)
        }
      </ThreeDCarouselContainer>
    </ThreeDCarouselScreen>
  )
};

export default ThreeDCarousel;
