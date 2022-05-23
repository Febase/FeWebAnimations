import { styled } from "@stitches/react";

import { motion } from "framer-motion";

const Buttons = () => (
  <>
    <StyledBox
      whileHover={{
        rotate: [0, 360, 0],
        borderRadius: ["20%", "50%", "20%"],
      }}
    />
  </>
);

const StyledBox = styled(motion.div, {
  width: "70px",
  height: "70px",
  backgroundColor: "BlueViolet",
  borderRadius: "20%",
});

export default Buttons;
