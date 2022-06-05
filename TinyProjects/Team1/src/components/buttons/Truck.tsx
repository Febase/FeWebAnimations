import { styled } from "@stitches/react";
import { AnimationControls, motion } from "framer-motion";

const truckVar = {
  initial: { opacity: 0, x: "250%" },
  moveTruck: {
    opacity: [0, 0.5, 0.8, 0.8, 1],
    x: 80,
    transition: { duration: 0.3 },
  },
  driveTruck: {
    x: [80, 120, 30, 80, 100, 120],
    transition: {
      duration: 4,
    },
  },
  hidden: {
    opacity: 0,
    transition: { duration: 0.5, delay: 3 },
  },
};

const lightVar = {
  lightOn: {
    opacity: 1,
    transition: { duration: 3 },
    transitionEnd: { opacity: 0 },
  },
  // lightOff: {
  //   // opacity: 0,
  //   backgroundColor: "red",
  //   transition: { delay: 3 },
  // },
};

const leftTrunkVar = {
  openLeftTrunk: { rotate: "90deg" },
  closeLeftTrunk: { rotate: "-45deg" },
};

const rightTrunkVar = {
  openRightTrunk: { rotate: "-90deg" },
  closeRightTrunk: { rotate: "45deg" },
};

export default function Truck({ controls }: truckProps) {
  return (
    <TruckContainer
      className="truck"
      variants={truckVar}
      initial="initial"
      animate={controls}
    >
      {/* 트렁크 */}
      <motion.div
        className="leftTrunk"
        variants={leftTrunkVar}
        animate={controls}
      ></motion.div>
      <motion.div
        className="rightTrunk"
        variants={rightTrunkVar}
        animate={controls}
      ></motion.div>
      {/* 트럭 화물칸 */}
      <div className="back"></div>
      {/* 트럭 전면부 */}
      <div className="front">
        {/* 트럭 앞유리, 운전석 */}
        <div className="window"></div>
      </div>
      {/* 전조등 */}
      <div className="light top">
        <motion.div
          className="lightTop"
          variants={lightVar}
          animate={controls}
        ></motion.div>
      </div>
      <div className="light bottom">
        <motion.div
          className="lightBottom"
          variants={lightVar}
          animate={controls}
        ></motion.div>
      </div>
    </TruckContainer>
  );
}

const TruckContainer = styled(motion.div, {
  "&": {
    width: "60px",
    height: "41px",
    top: "11px",
    zIndex: "1",
    position: "absolute",

    // 트렁크
    ".leftTrunk, .rightTrunk": {
      position: "absolute",
      width: "2px",
      height: "20px",
      background: "$white",
      borderRadius: "1px",
    },
    // 트렁크 좌측문
    ".leftTrunk": {
      transformOrigin: "left top",
    },
    // 트렁크 우측문
    ".rightTrunk": {
      transformOrigin: "left bottom",
      left: 0,
      bottom: 0,
    },
    // 트럭 화물칸
    ".back": {
      position: "absolute",
      left: "0",
      top: "0",
      borderRadius: "2px",
      background: "linear-gradient($white, $greyLight)",
      width: "60px",
      height: "41px",
      zIndex: 10,
    },

    // 트럭 전면부
    ".front": {
      overflow: "hidden",
      position: "absolute",
      borderRadius: "2px 9px 9px 2px",
      width: "26px",
      height: "41px",
      left: "60px",

      "&:before, &:after": {
        content: "",
        position: "absolute",
        display: "block",
      },

      "&:before": {
        height: "13px",
        width: "2px;",
        left: "0",
        top: "14px",
        background: "linear-gradient($grey, $greyDark)",
      },

      "&:after": {
        borderRadius: "2px 9px 9px 2px",
        background: "$primary",
        width: "24px",
        height: "41px",
        right: "0",
      },
      // 앞유리
      ".window": {
        overflow: "hidden",
        borderRadius: "2px 8px 8px 2px",
        background: "$primaryLight",
        transform: "perspective(4px) rotateY(3deg)",
        width: "22px",
        height: "41px",
        position: "absolute",
        left: "2px",
        top: "0",
        zIndex: "1",
        transformOrigin: "0 50%",

        "&:before, &:after": {
          content: "",
          position: "absolute",
          right: "0",
        },
        "&:before": {
          top: "0",
          bottom: "0",
          width: "14px",
          background: "$dark",
        },
        "&:after": {
          width: "14px",
          top: "7px",
          height: "4px",
          position: "absolute",
          background: "rgba(255, 255, 255, .14)",
          transform: "skewY(14deg)",
          boxShadow: "0 7px 0 rgba(255, 255, 255, .14)",
        },
      },
    },
    // 전조등
    ".light": {
      width: "3px",
      height: "8px",
      left: "83px",
      transformOrigin: "100% 50%",
      position: "absolute",
      borderRadius: "2px",
      // transform: "scaleX(.8)",
      background: "rgba(240, 220, 95, 1)",

      "& div": {
        opacity: "0",
        width: "7px",
        height: "4px",
        transform: "perspective(2px) rotateY(-15deg) scaleX(.94)",
        position: "absolute",
        transformOrigin: "0 50%",
        top: "50%",
        left: "3px",
        marginTop: "-2px",
        background:
          "linear-gradient(90deg, rgba(240, 220, 95, 1), rgba(240, 220, 95, .7), rgba(240, 220, 95, 0))",
      },
      "&.top": {
        top: "4px",
      },
      "&.bottom": {
        bottom: "4px",
      },
    },
  },
});

interface truckProps {
  controls: AnimationControls;
}
