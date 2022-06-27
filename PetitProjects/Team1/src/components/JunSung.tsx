import { motion } from "framer-motion";

import "./JunSung.css";

function JunSung() {
  return (
    <section>
      <div className="JunSung">
        <div className="text-container">
          <p>최준성</p>
        </div>
        <motion.div className="ocean">
          <motion.div className="wave" animate={{ marginLeft: [0, -1400] }} transition={{ duration: 7, repeat: Infinity }} />
          <motion.div
            className="wave"
            animate={{ marginLeft: [0, -1400], translateY: [0, 5, -25] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeIn" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default JunSung;
