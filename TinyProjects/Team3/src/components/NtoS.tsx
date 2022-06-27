import * as React from "react";
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (custom: number) => {
    const delay = 1 + custom * 1;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

const NtoS: React.FC = () => {
  return (
    <div>
      <motion.svg
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
      >
        <motion.line
          x1="40"
          y1="30"
          x2="40"
          y2="100"
          stroke="#A007D9"
          variants={draw}
          custom={2.5}
          strokeWidth="10px"
          strokeLinecap="round"
        />
        <motion.line
          x1="40"
          y1="30"
          x2="110"
          y2="100"
          stroke="#A007D9"
          variants={draw}
          custom={2}
          strokeWidth="10px"
          strokeLinecap="round"
        />
        <motion.line
          x1="110"
          y1="100"
          x2="110"
          y2="30"
          stroke="#A007D9"
          variants={draw}
          custom={2.5}
          strokeWidth="10px"
          strokeLinecap="round"
        />
        <motion.circle
          cx="180"
          cy="66"
          r="36"
          stroke="#FA009B"
          variants={draw}
          custom={1}
          fill="transparent"
          strokeWidth="10px"
        />
        <motion.path
          d="M 250 25 C 319 29 297 67 250 70 L 250 112 z"
          strokeWidth="10px"
          stroke="#73DB96"
          variants={draw}
          custom={2.5}
          fill="transparent"
          strokeLinecap="round"
        />
        <motion.circle
          cx="355"
          cy="70"
          r="36"
          stroke="#FAEAA2"
          variants={draw}
          custom={1}
          fill="transparent"
          strokeWidth="10px"
        />
        <motion.line
          x1="365"
          y1="80"
          x2="395"
          y2="110"
          stroke="#FAEAA2"
          variants={draw}
          custom={2.5}
          strokeWidth="10px"
          strokeLinecap="round"
        />
        <motion.path
          d="M 429.534 32.41 l 0 80 z l 0 0.12 a 10 5 -15 1 1 0 40 l 42.341 40.137"
          strokeWidth="10px"
          stroke="#B8CADB"
          variants={draw}
          custom={2.5}
          fill="transparent"
          strokeLinecap="round"
        />
        <motion.path
          d="M 544.645 49.993 C 507.51 19.112 484.838 66.802 529.791 75.792 C 559.108 83.219 540.345 125.827 502.819 96.901"
          strokeWidth="10px"
          stroke="#5623FC"
          variants={draw}
          custom={1.5}
          fill="transparent"
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
};

export default NtoS;
