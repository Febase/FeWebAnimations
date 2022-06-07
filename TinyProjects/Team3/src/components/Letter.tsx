import { motion } from "framer-motion";

const variants = {
  hidden: {
    display: "none",
    pathLength: 0,
  },
  visible: (i: number) => ({
    display: "block",
    pathLength: 1,
    transition: {
      delay: i * 0.4,
      duration: 2,
      ease: "easeInOut",
    },
  }),
};

const alphabets = [
  {
    id: "H",
    path: `M5,5
    l0,90
    M5,50
    l60,0 0,45 0,-90
    M5,20
    `,
    strokes: [
      {
        id: "first",
        stroke: "#fe4a49",
      },
      {
        id: "second",
        stroke: "#2ab7ca",
      },
      {
        id: "thrid",
        stroke: "#fed766",
      },
    ],
  },
  {
    id: "I",
    path: `M5,5
    l60,0
    M35,5
    l0,85
    M5,95
    l60,0
    `,
    strokes: [
      {
        id: "first",
        stroke: "#fe4a49",
      },
      {
        id: "second",
        stroke: "#2ab7ca",
      },
      {
        id: "thrid",
        stroke: "#fed766",
      },
    ],
  },
  {
    id: "J",
    path: `M15,5 l45,0 
    M40,5 L40,80
    c0,15 -30,15 -30,-10
    `,
    strokes: [
      {
        id: "first",
        stroke: "#fe4a49",
      },
      {
        id: "second",
        stroke: "#2ab7ca",
      },
      {
        id: "thrid",
        stroke: "#fed766",
      },
    ],
  },
  {
    id: "K",
    path: `M5,5
    l0,88
    M5,49
    l35,-44z
    l40,44
    `,
    strokes: [
      {
        id: "first",
        stroke: "#fe4a49",
      },
      {
        id: "second",
        stroke: "#2ab7ca",
      },
      {
        id: "thrid",
        stroke: "#fed766",
      },
    ],
  },
  {
    id: "L",
    path: `M5,5
    L5,90
    M0,90
    L50,90
    `,
    strokes: [
      {
        id: "first",
        stroke: "#fe4a49",
      },
      {
        id: "second",
        stroke: "#2ab7ca",
      },
      {
        id: "thrid",
        stroke: "#fed766",
      },
    ],
  },
  {
    id: "M",
    path: `M5,90
    L5,0

    L35,90

    M35,90
    L65,0

    L65,90
    `,
    strokes: [
      {
        id: "first",
        stroke: "#fe4a49",
      },
      {
        id: "second",
        stroke: "#2ab7ca",
      },
      {
        id: "thrid",
        stroke: "#fed766",
      },
    ],
  },
];

const Letter = () => {
  return (
    <div>
      {alphabets.map((alphabet, i) => (
        <motion.svg
          key={alphabet.id}
          style={{
            strokeWidth: "10",
            strokeLinejoin: "round",
            strokeLinecap: "round",
          }}
          width="100"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
        >
          {alphabet.strokes.map((item, i) => (
            <motion.path
              key={`letter-${i}`}
              custom={i}
              stroke={item.stroke}
              fill="none"
              d={alphabet.path}
              variants={variants}
            />
          ))}
        </motion.svg>
      ))}
    </div>
  );
};

export default Letter;
