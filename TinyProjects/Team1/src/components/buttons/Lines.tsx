import { styled } from "style/theme";
import { AnimationControls, motion } from "framer-motion";

const lineVar = {
  visibleLines: {
    opacity: 1,
    x: -400,
    transition: { duration: 5 },
  },
  hidden: {
    opacity: 0,
    transition: { duration: 0.5, delay: 3 },
  },
};

export default function Lines({ controls }: linesProps) {
  return (
    <LineContainer
      className="lines"
      variants={lineVar}
      animate={controls}
    ></LineContainer>
  );
}

const LineContainer = styled(motion.div, {
  // opacity: 0,
  position: "absolute",
  width: "6px",
  height: "2px",
  background: "#fff",
  borderRadius: "2px",
  top: "30px",
  left: "100%",
  boxShadow:
    "15px 0 0 #fff, 30px 0 0 #fff, 45px 0 0 #fff, 60px 0 0 #fff, 75px 0 0 #fff, 90px 0 0 #fff, 105px 0 0 #fff, 120px 0 0 #fff, 135px 0 0 #fff, 150px 0 0 #fff, 165px 0 0 #fff, 180px 0 0 #fff, 195px 0 0 #fff, 210px 0 0 #fff, 225px 0 0 #fff, 240px 0 0 #fff, 255px 0 0 #fff, 270px 0 0 #fff, 285px 0 0 #fff, 300px 0 0 #fff, 315px 0 0 #fff, 330px 0 0 #fff, 345px 0 0 #fff, 360px 0 0 #fff, 375px 0 0 #fff",
});

interface linesProps {
  controls: AnimationControls;
}
