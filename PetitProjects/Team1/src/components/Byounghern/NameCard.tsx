import { motion, Variants } from "framer-motion";
import React, { useState } from "react";
import "./style.css";

function NameCard() {
  const [windowSize] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight
  });

  const cardVariants: Variants = {
    offscreen: {
      y: 0
    },
    onscreen: {
      y: -windowSize.winHeight / 2,
      x: (1 * windowSize.winWidth) / 3,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.4
      }
    }
  };

  return (
    <motion.div className="namecard-container" initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
      <div style={{}} />
      <motion.div className="namecard" variants={cardVariants}>
        Byounghern (October 16th){" "}
      </motion.div>
    </motion.div>
  );
}

export default NameCard;
