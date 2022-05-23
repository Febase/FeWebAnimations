import { styled } from "@stitches/react";
import { motion } from "framer-motion";

const OuterBox = styled(motion.div, {
  width: "70px",
  height: "30px",
  backgroundImage: "linear-gradient(to right, #DD5E89 0%, #F7BB97 51%, #DD5E89 100%)",
  borderRadius: "16px",
});

function Chip () {
    return (
    <>
      <OuterBox
        whileHover={{
          rotate: [0, 3, -3, 3, 0],
          backgroundPosition: "left center",
          border: "3px solid red"
        }}
      />
    </>
  )
};

export default Chip;
