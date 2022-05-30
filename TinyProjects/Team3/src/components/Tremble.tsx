import * as React from "react";
import { motion } from "framer-motion";

interface Props {
  word: string;
}


const Tremble: React.FC<Props> = ({
  word,
}: Props) => {
  return (
    <div style={{  }}>
      {word.split('').map(char => (
        <motion.span
          style={{ fontSize: "50px", letterSpacing: "6px", display: "inline-block" }}
          initial={{ scale: 0.3 }}
          animate={{ scale: [0.9, 0.85, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.5,
            type: "spring",
            stiffness: 10,
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default Tremble;
