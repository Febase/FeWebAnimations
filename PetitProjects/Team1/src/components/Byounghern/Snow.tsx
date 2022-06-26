import { motion } from "framer-motion";
type SnowProp = {
  period: number;
  x: number;
};

function Snow(props: SnowProp) {
  return (
    <motion.div
      style={{ position: "relative", x: props.x, opacity: 0.5, y: -100 }}
      animate={{ y: window.innerHeight * 0.8, opacity: 0.8 }}
      transition={{ default: { duration: props.period } }}>
      <motion.svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M11.6678 22C17.743 22 22.6678 17.0751 22.6678 11C22.6678 4.92487 17.743 0 11.6678 0C5.59271 0 0.667847 4.92487 0.667847 11C0.667847 17.0751 5.59271 22 11.6678 22Z"
          fill="#CFCCE0"
        />
      </motion.svg>
    </motion.div>
  );
}

export default Snow;
