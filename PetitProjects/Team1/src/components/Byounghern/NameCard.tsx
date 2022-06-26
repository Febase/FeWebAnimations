import { motion, useDragControls, Variants } from "framer-motion";
import React, { useState } from "react";
import "./style.css";

function NameCard() {
  const [windowSize] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight
  });

  const cardVariants: Variants = {
    offscreen: {
      y: windowSize.winHeight
    },
    onscreen: {
      y: 0,
      x: windowSize.winWidth / 3,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.4
      }
    }
  };

  return (
    <motion.div
      className="namecard-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 1 }}
      drag="x"
      whileDrag={{ scale: 1.2 }}>
      <div style={{}} />
      <motion.div className="namecard" variants={cardVariants}>
        Byounghern (October 16th){" "}
      </motion.div>
    </motion.div>
  );
}

export default NameCard;
