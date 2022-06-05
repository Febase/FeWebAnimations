import React, { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    display: "none",
    pathLength: 0,
  },
  visible: (i: number) => ({
    display: "block",
    pathLength: 1,
    transition: {
      delay: i * 0.3,
      duration: 2,
      ease: "easeInOut",
    },
  }),
};

const paths = [
  {
    id: "first",
    stroke: "#ff0000",
  },
  {
    id: "second",
    stroke: "#ffff00",
  },
  {
    id: "thrid",
    stroke: "#000000",
  },
];

const Spin = () => {
  return (
    <div>
      <motion.svg
        style={{
          // stroke: "#000",
          strokeWidth: "10",
          // strokeLinejoin: "round",
          // strokeLinecap: "round",
        }}
        width="80"
        height="100"
        viewBox="0 0 80 100"
        xmlns="http://www.w3.org/2000/svg"
        // variants={svgVaritants}
        initial="hidden"
        animate="visible"
      >
        {paths.map((item, i) => (
          <motion.path
            key={`letter-${i}`}
            custom={i}
            stroke={item.stroke}
            fill="none"
            d="M5,5
          l0,90
          M5,50
          l60,0 0,45 0,-90"
            variants={variants}
          />
        ))}
      </motion.svg>
    </div>
  );
};

export default Spin;
