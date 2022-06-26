import { motion } from "framer-motion";

function JunSung() {
  return (
    <>
      <div className="JunSung">최준성</div>
      <motion.div className="ocean">
        <motion.div className="wave" animate={{ marginLeft: [0, -1400] }} transition={{ duration: 7, repeat: Infinity }} />
        <motion.div
          className="wave"
          animate={{ marginLeft: [0, -1400], translateY: [0, 5, -25] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeIn" }}
        />
      </motion.div>
    </>
  );
}

export default JunSung;
