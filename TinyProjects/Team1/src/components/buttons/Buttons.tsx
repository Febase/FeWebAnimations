import { styled } from "style/theme";
import { motion, useAnimation } from "framer-motion";
import Box from "./Box";
import Truck from "./Truck";
import Lines from "./Lines";

const completeVar = {
  init: { opacity: 1, transition: { duration: 0.5 } },
  textHidden: { opacity: 0, transition: { duration: 0.5 } },
};

const successVar = {
  init: { opacity: 0, transition: { duration: 0.5 } },
  textVisible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};

const successIconVar = {
  init: { opacity: 0, transition: { duration: 0.5 } },
  iconVisible: { opacity: 1, transition: { duration: 0.3, delay: 1 } },
};

const Buttons = () => {
  const controls = useAnimation();

  const onBtn = () => {
    controls
      .start("textHidden")
      .then(() => controls.start("moveBox"))
      .then(() => controls.start("moveTruck"))
      .then(() => controls.start("openLeftTrunk"))
      .then(() => controls.start("openRightTrunk"))
      .then(() => controls.start("putInTrunk"))
      .then(() => controls.start("closeLeftTrunk"))
      .then(() => controls.start("closeRightTrunk"))
      .then(async () => {
        controls.start("driveTruck");
        controls.start("visibleLines");
        controls.start("lightOn");
        await controls.start("hidden");
      })
      .then(() => {
        controls.start("textVisible");
      })
      .then(async () => {
        await controls.start("iconVisible");
      })
      .then(() => {
        setTimeout(() => {
          controls.start("init");
        }, 1500);
      });
  };

  return (
    <Container onClick={onBtn}>
      <button className="order">
        <motion.span
          className="complete"
          variants={completeVar}
          animate={controls}
        >
          Complete Order
        </motion.span>
        <motion.span
          className="success"
          variants={successVar}
          animate={controls}
        >
          Order Placed
          <motion.span
            className="successIcon"
            variants={successIconVar}
            animate={controls}
          >
            ✔
          </motion.span>
        </motion.span>
        {/* 택배 박스 */}
        <Box controls={controls} />
        {/* 트럭 */}
        <Truck controls={controls} />
        {/* 차선 */}
        <Lines controls={controls} />
      </button>
    </Container>
  );
};

const Container = styled(motion.div, {
  ".complete, .success": {
    opacity: 1,
    position: "absolute",
    textAlign: "center",
    padding: 20,
    left: 0,
    right: 0,
    bottom: 0,
    color: "$white",
  },
  ".success": {
    opacity: 0,
  },
  ".successIcon": {
    opacity: 0,
    display: "inline-block",
    color: "#2fbb1e",
    width: 15,
    height: 15,
    paddingLeft: 10,
  },
  ".order": {
    appearance: "none",
    border: "0",
    background: "$dark",
    position: "relative",
    width: "240px",
    height: "63px",
    padding: "0",
    outline: "none",
    cursor: "pointer",
    borderRadius: "32px",
    overflow: "hidden",
    transition: "transform 0.3s ease",
  },
});

export default Buttons;
