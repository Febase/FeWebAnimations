import { useState } from "react";
import { motion } from "framer-motion";

export const G0 = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  const [toggled, setToggled] = useState(false);
  const handleToggle = () => setToggled(!toggled);

  return (
    <div style={{ ...wrapper }}>
      <div>
        <h4>Framer-motion</h4>
        <div
          style={{
            ...containerStyle,
            justifyContent: isOn ? "flex-start" : "flex-end",
            backgroundColor: isOn
              ? "rgba(255, 150, 80, 0.4)"
              : "rgba(255, 255, 255, 0.4)",
          }}
          onClick={toggleSwitch}
        >
          <motion.div layout style={knobStyles} />
        </div>
      </div>
      <div>
        <h4>Original</h4>
        <div
          onClick={handleToggle}
          style={{
            ...containerStyle,
            justifyContent: toggled ? "flex-start" : "flex-end",
            backgroundColor: toggled
              ? "rgba(255, 150, 80, 0.4)"
              : "rgba(255, 255, 255, 0.4)",
          }}
        >
          <div style={knobStyles} />
        </div>
      </div>
    </div>
  );
};

const wrapper = {
  background: "linear-gradient(250deg, #7b2ff7, #f107a3)",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
};

const containerStyle = {
  width: 160,
  height: 80,
  display: "flex",
  borderRadius: 100,
  padding: 10,
  margin: 10,
  transition: "1s all",
};

const knobStyles = {
  height: 80,
  width: 80,
  color: "white",
  boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.15)",
  backgroundColor: "white",
  borderRadius: 50,
};
