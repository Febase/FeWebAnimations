import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImageContainer from "./Doho/ImageContainer";
import "./Doho.css";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 }
};

function Doho() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.section className="doho-container" ref={ref} variants={boxVariant} initial="hidden" animate={control}>
      <ImageContainer text="김" />
      <ImageContainer text="도" />
      <ImageContainer text="호" />
    </motion.section>
  );
}

export default Doho;
