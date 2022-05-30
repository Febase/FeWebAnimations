import React, { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    rotate: 360,
    transition: {
      delay: i * 0.3,
    },
  }),
  hidden: {
    opacity: 1,
    rotate: 0,
    transition: {
      when: "afterChildren",
      duration: 2,
    },
  },
};

const Spin = () => {
  const [text, setText] = useState("Loading");
  const [replay, setReplay] = useState(true);
  const handleClickReplay = () => {
    console.log("click replay");
    setReplay((prev) => !prev);
    setTimeout(() => {
      setReplay(true);
    }, 600);
  };
  return (
    <div>
      {replay &&
        text.split("").map((item, i) => (
          <motion.span
            className="spin"
            key={`letter-${i}`}
            custom={i}
            variants={variants}
            initial="hidden"
            animate="visible"
            // animate={replay ? "visible" : "hidden"}
          >
            {item}
          </motion.span>
        ))}
      <div>
        <button onClick={handleClickReplay}>Replay</button>
      </div>
    </div>
  );
};

export default Spin;

// string 받아서 1개씩 분리
// rotate 돌리기
