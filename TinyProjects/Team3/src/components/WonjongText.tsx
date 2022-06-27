import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import AlphabetAG from "./AlphabetAG";

// Word wrapper
const Wrapper = (props: any) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{props.children}</span>;
};

const WonjongText = ({text}: { text: string }) => {
  const [replay, setReplay] = useState(true);

  useEffect(() => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 1000);
  }, [text]);


  //  Split each word of props.text into an array
  const splitWords: any[] = text.split(" ");

  // Create storage array
  const words: any[] = [];

  // Push each word into words array
  // @ts-ignore
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  return (
    <motion.div
      className="App"
      initial="hidden"
      animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <div className="container">
        <h1>
          {words.map((word, index) => {
            return (
              // Wrap each word in the Wrapper component
              <Wrapper key={index}>
                {words[index].flat().map((element: string, index: number) => {
                  return (
                    <span
                      style={{
                        overflow: "hidden",
                        display: "inline-block"
                      }}
                      key={index}
                    >
                    <AlphabetAG alphabet={element}/>
                  </span>
                  );
                })}
              </Wrapper>
            );
          })}
          {/* {} */}
        </h1>
      </div>
    </motion.div>
  );
};

export default WonjongText;
