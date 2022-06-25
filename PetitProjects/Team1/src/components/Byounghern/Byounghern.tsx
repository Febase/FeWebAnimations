import { motion } from "framer-motion";
import Background from "./Backgorund";
import NameCard from "./NameCard";
import "./style.css";

function ByeongHeon() {
  return (
    <section>
      <Background />
      <NameCard />
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} />
    </section>
  );
}

export default ByeongHeon;
