import { motion } from "framer-motion";
import Background from "./Backgorund";
import NameCard from "./NameCard";
import "./style.css";

function ByeongHeon() {
  return (
    <section>
      <div style={{ paddingTop: "30vh" }}>
        <Background />
        <NameCard />
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} />
      </div>
    </section>
  );
}

export default ByeongHeon;
