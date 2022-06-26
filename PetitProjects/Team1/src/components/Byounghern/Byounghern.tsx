import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Background from "./Backgorund";
import NameCard from "./NameCard";
import Snow from "./Snow";
import "./style.css";

function ByeongHeon() {
  const [snows, setSnows] = useState([100]);
  const [visible, setVisible] = useState(true);

  const resetSnow = () => {
    setSnows([]);
    setVisible(true);
    const cy = window.innerWidth / 2;
    const temp = [];
    for (let i = 0; i < 500; i++) {
      temp.push(Math.random() * 2 * cy) + cy;
    }
    setSnows(temp);
  };
  useEffect(() => {
    resetSnow();
    return () => {};
  }, []);

  return (
    <section className="container">
      <div style={{ height: "100%", width: "100%", overflowY: "clip" }}>
        <Background />
        <NameCard />
        <motion.div onViewportEnter={resetSnow} onViewportLeave={() => setVisible(false)}>
          {visible &&
            snows.map((v, idx) => {
              return <Snow key={idx} x={v} period={10} />;
            })}
        </motion.div>
      </div>
    </section>
  );
}

export default ByeongHeon;
