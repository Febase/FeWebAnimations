import { styled } from "@stitches/react";
import { AnimationControls, motion } from "framer-motion";

const boxVar = {
  moveBox: {
    opacity: 1,
    x: 30,
    transition: { bounce: 0 },
  },
  putInTrunk: { opacity: 0, x: 100 },
};

export default function Box({ controls }: boxProps) {
  return (
    <>
      <BoxContainer
        className="box"
        variants={boxVar}
        animate={controls}
      ></BoxContainer>
    </>
  );
}

const BoxContainer = styled(motion.div, {
  "&": {
    opacity: 0,
    width: "21px",
    height: "21px",
    background: "linear-gradient($sandLight, $sand)",
    borderRadius: "2px",
    position: "absolute",
    zIndex: 1,
    top: "21px",

    "&:before, &:after": {
      content: "",
      top: "10px",
      position: "absolute",
      left: "0",
      right: "0",
    },
    "&:before": {
      height: "3px",
      marginTop: "-1px",
      background: "rgba(0, 0, 0, .1)",
    },
    "&:after": {
      height: "1px",
      background: "rgba(0, 0, 0, .15)",
    },
  },
});

interface boxProps {
  controls: AnimationControls;
}
