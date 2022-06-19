import { motion } from "framer-motion";
import "./lbh.css";

const flowerStyles = [
  {
    left: "4%",
    backgroundImage: "linear-gradient(rgba(251, 132, 156, 0.803), rgba(255, 197, 208, 0.422))",
    duration: 13
  },
  { left: "8%", backgroundImage: "linear-gradient(rgba(251, 132, 156, 0.803), rgba(255, 197, 208, 0.9))", duration: 15.5 },
  { left: "12%", backgroundImage: "linear-gradient(rgba(255, 197, 208, 0.422), rgba(255, 166, 184, 0.803))", duration: 8 },
  { left: "16%", backgroundImage: "linear-gradient(rgba(251, 132, 156, 0.803), rgba(255, 197, 208, 0.422))", duration: 14.5 },
  { left: "20%", backgroundImage: "linear-gradient(rgba(255, 197, 208, 0.422), rgba(255, 166, 184, 0.803))", duration: 12 },
  { left: "24%", backgroundImage: "linear-gradient(rgba(251, 132, 156, 0.803), rgba(255, 197, 208, 0.422))", duration: 9 },
  { left: "28%", backgroundImage: "linear-gradient(rgba(255, 197, 208, 0.422), rgba(251, 132, 156, 0.803))", duration: 11 },
  { left: "34%", backgroundImage: "linear-gradient(rgba(255, 183, 197, 0.803), rgba(255, 197, 208, 0.422))", duration: 16 },
  { left: "42%", backgroundImage: "linear-gradient(rgba(255, 197, 208, 0.422), rgba(255, 166, 184, 0.803))", duration: 10 },
  { left: "46%", backgroundImage: "linear-gradient(rgba(255, 183, 197, 0.803), rgba(255, 197, 208, 0.422))", duration: 16.5 },
  { left: "50%", backgroundImage: "linear-gradient(rgba(255, 197, 208, 0.422), rgba(255, 166, 184, 0.803))", duration: 15 },
  { left: "55%", backgroundImage: "linear-gradient(rgba(255, 183, 197, 0.803), rgba(255, 197, 208, 0.422))", duration: 14 },
  { left: "65%", backgroundImage: "linear-gradient(rgba(251, 132, 156, 0.803), rgba(255, 197, 208, 0.422))", duration: 10 },
  { left: "73%", backgroundImage: "linear-gradient(rgba(255, 183, 197, 0.803), rgba(255, 197, 208, 0.422))", duration: 12 },
  { left: "80%", backgroundImage: "linear-gradient(rgba(255, 183, 197, 0.803), rgba(255, 197, 208, 0.422))", duration: 8 },
  { left: "88%", backgroundImage: "linear-gradient(rgba(251, 132, 156, 0.803), rgba(255, 197, 208, 0.422))", duration: 9 },
  { left: "95%", backgroundImage: "linear-gradient(rgba(255, 166, 184, 0.803), rgba(255, 197, 208, 0.422));", duration: 11 }
];

const flowerVariants = (index: number) => ({
  hidden: {
    top: "-40%",
    left: flowerStyles[index].left
  },
  visible: {
    backgroundImage: flowerStyles[index].backgroundImage,
    top: "calc(100vh - 20px)",
    left: flowerStyles[index].left,
    transition: {
      duration: flowerStyles[index].duration,
      repeat: Infinity,
      ease: index % 2 === 0 ? "easeIn" : "easeOut"
    },
    x: [5, 25, 45, 40, 55, 40, 25, 10, 0],
    y: [15, 25, 25, 30, 35, 30, 25, 10, 0],
    z: [5, 35, 5, 5, 5, 5, 5, 5, 5],
    rotate: [0, 0, 165, 145, 85, 195, 75, 225, 260]
  }
});

function BonHaeng() {
  return (
    <section className="spring-container">
      <main className="lbh-profile">
        <motion.div
          initial={{ y: -1500 }}
          animate={{
            y: 0
          }}
          transition={{
            delay: 0.2,
            type: "tween"
          }}
          whileHover={{
            scale: [1, 1.2, 1, 1.1]
          }}>
          <h1 className="lbh">이본행</h1>
        </motion.div>
        <motion.div
          className="company-letter"
          animate={{ x: [-25, 0, -5, 0, 0, 0], rotate: [15, 10, 5, 0, 0, 0] }}
          transition={{ duration: 3, repeat: Infinity }}>
          M
        </motion.div>
        <motion.div
          className="company-letter"
          animate={{ x: [-20, 5, -10, 0, 0, 0], rotate: [5, 10, 15, 0, 0, 0] }}
          transition={{ duration: 3, repeat: Infinity }}>
          O
        </motion.div>
        <motion.div
          className="company-letter"
          animate={{ x: [50, -10, -5, 0, 0, 0], rotate: [20, 10, 0, 0, 0, 0] }}
          transition={{ duration: 3, repeat: Infinity }}>
          A
        </motion.div>
        <motion.div
          className="company-letter"
          animate={{ x: [75, -10, -5, 0, 0, 0], rotate: [0, -10, -20, 0, 0, 0] }}
          transition={{ duration: 3, repeat: Infinity }}>
          I
        </motion.div>
        <motion.div
          className="company-letter"
          animate={{ x: [0, 15, 20, 10, -5, -5, 0, 0, 0], rotate: [10, 5, 15, 0, 0, 0] }}
          transition={{ duration: 3, repeat: Infinity }}>
          S
        </motion.div>
        <motion.div whileHover={{ scale: 1.3 }} transition={{ type: "spring", stiffness: 300 }}>
          <span className="developer">Developer</span>
        </motion.div>
      </main>

      <div className="canvas">
        <motion.div className="flowerA" variants={flowerVariants(0)} animate="visible" initial="hidden" />
        <motion.div className="flowerC" variants={flowerVariants(1)} animate="visible" initial="hidden" />
        <motion.div className="flowerB" variants={flowerVariants(2)} animate="visible" initial="hidden" />
        <motion.div className="flowerC" variants={flowerVariants(3)} animate="visible" initial="hidden" />
        <motion.div className="flowerA" variants={flowerVariants(4)} animate="visible" initial="hidden" />
        <motion.div className="flowerB" variants={flowerVariants(5)} animate="visible" initial="hidden" />
        <motion.div className="flowerA" variants={flowerVariants(6)} animate="visible" initial="hidden" />
        <motion.div className="flowerC" variants={flowerVariants(7)} animate="visible" initial="hidden" />
        <motion.div className="flowerB" variants={flowerVariants(8)} animate="visible" initial="hidden" />
        <motion.div className="flowerA" variants={flowerVariants(9)} animate="visible" initial="hidden" />
        <motion.div className="flowerC" variants={flowerVariants(10)} animate="visible" initial="hidden" />
        <motion.div className="flowerB" variants={flowerVariants(11)} animate="visible" initial="hidden" />
        <motion.div className="flowerA" variants={flowerVariants(12)} animate="visible" initial="hidden" />
        <motion.div className="flowerC" variants={flowerVariants(13)} animate="visible" initial="hidden" />
        <motion.div className="flowerB" variants={flowerVariants(14)} animate="visible" initial="hidden" />
        <motion.div className="flowerA" variants={flowerVariants(15)} animate="visible" initial="hidden" />
        <motion.div className="flowerC" variants={flowerVariants(16)} animate="visible" initial="hidden" />
      </div>
    </section>
  );
}

export default BonHaeng;
