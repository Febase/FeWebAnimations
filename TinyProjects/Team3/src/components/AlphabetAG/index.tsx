import React from 'react';

import { IconStyled, IconPathStyled } from "./styles";

const AlphabetAG = ({alphabet}: { alphabet: string }) => {
  switch (alphabet) {
    case 'a':
    case 'A':
      return (
        <div className="container">
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296" color="black" order={4}>
            <IconPathStyled
              d="M5,90l30,-80 30,80M20,50l30,0"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
                delay: 3,
              }}
            />
          </IconStyled>
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296" color="green" order={3}>
            <IconPathStyled
              d="M5,90l30,-80 30,80M20,50l30,0"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
                delay: 2,
              }}
            />
          </IconStyled>
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296" color="blue" order={2}>
            <IconPathStyled
              d="M5,90l30,-80 30,80M20,50l30,0"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
                delay: 1,
              }}
            />
          </IconStyled>
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296">
            <IconPathStyled
              d="M5,90l30,-80 30,80M20,50l30,0"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
              }}
            />
          </IconStyled>
        </div>
      );
    case 'b':
    case 'B':
      return (
        <div className="container">
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296" color="black" order={4}>
            <IconPathStyled
              d="M5,5
           c80,0 80,45 0,45
           c80,0 80,45 0,45z"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
                delay: 3
              }}
            />
          </IconStyled>
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296" color="green" order={3}>
            <IconPathStyled
              d="M5,5
           c80,0 80,45 0,45
           c80,0 80,45 0,45z"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
                delay: 2
              }}
            />
          </IconStyled>
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296" color="blue" order={2}>
            <IconPathStyled
              d="M5,5
           c80,0 80,45 0,45
           c80,0 80,45 0,45z"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
                delay: 1
              }}
            />
          </IconStyled>
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296">
            <IconPathStyled
              d="M5,5
           c80,0 80,45 0,45
           c80,0 80,45 0,45z"
              transition={{
                default: {duration: 4, ease: "easeInOut"}
              }}
            />
          </IconStyled>
        </div>
      )
    case 'c':
    case 'C':
      return (
        <div className="container">
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296" color="black" order={4}>
            <IconPathStyled
              d="M60,10
           C-10,0 -10,100 60,90"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
                delay: 3
              }}
            />
          </IconStyled>
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296" color="green" order={3}>
            <IconPathStyled
              d="M60,10
           C-10,0 -10,100 60,90"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
                delay: 2
              }}
            />
          </IconStyled>
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296" color="blue" order={2}>
            <IconPathStyled
              d="M60,10
           C-10,0 -10,100 60,90"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
                delay: 1
              }}
            />
          </IconStyled>
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296">
            <IconPathStyled
              d="M60,10
           C-10,0 -10,100 60,90"
              transition={{
                default: {duration: 4, ease: "easeInOut"}
              }}
            />
          </IconStyled>
        </div>
      );
    case 'd': case 'D':
      return (
        <div className="container">
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296" color="black" order={4}>
            <IconPathStyled
              d="M10,10
                       C90,10 90,90 10,90z"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
                delay: 3
              }}
            />
          </IconStyled>
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296" color="green" order={3}>
            <IconPathStyled
              d="M10,10
                       C90,10 90,90 10,90z"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
                delay: 2
              }}
            />
          </IconStyled>
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296" color="blue" order={2}>
            <IconPathStyled
              d="M10,10
                       C90,10 90,90 10,90z"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
                delay: 1
              }}
            />
          </IconStyled>
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296">
            <IconPathStyled
                      d="M10,10
                       C90,10 90,90 10,90z"
              transition={{
                default: {duration: 4, ease: "easeInOut"}
              }}
            />
          </IconStyled>
        </div>
      )
    case 'e': case 'E':
      return (
        <div className="container">
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296" color="black" order={4}>
            <IconPathStyled
              d="M65,10
                       l-60,0 0,80 60,0
                       M5,50
                       l50,0"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
                delay: 3
              }}
            />
          </IconStyled>
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296" color="green" order={3}>
            <IconPathStyled
              d="M65,10
                       l-60,0 0,80 60,0
                       M5,50
                       l50,0"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
                delay: 2
              }}
            />
          </IconStyled>
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296" color="blue" order={2}>
            <IconPathStyled
              d="M65,10
                       l-60,0 0,80 60,0
                       M5,50
                       l50,0"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
                delay: 1
              }}
            />
          </IconStyled>
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296">
            <IconPathStyled
                      d="M65,10
                       l-60,0 0,80 60,0
                       M5,50
                       l50,0"
              transition={{
                default: {duration: 4, ease: "easeInOut"}
              }}
            />
          </IconStyled>
        </div>
      )
    case 'f': case 'F':
      return (
        <div className="container">
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296" color="black" order={4}>
            <IconPathStyled
              d="M75,5
                       l-60,0 0,90
                       M15,45
                       l50,0"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
                delay: 3
              }}
            />
          </IconStyled>
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296" color="green" order={3}>
            <IconPathStyled
              d="M75,5
                       l-60,0 0,90
                       M15,45
                       l50,0"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
                delay: 2
              }}
            />
          </IconStyled>
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296" color="blue" order={2}>
            <IconPathStyled
              d="M75,5
                       l-60,0 0,90
                       M15,45
                       l50,0"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
                delay: 1
              }}
            />
          </IconStyled>
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296">
            <IconPathStyled
              d="M75,5
                       l-60,0 0,90
                       M15,45
                       l50,0"
              transition={{
                default: {duration: 4, ease: "easeInOut"}
              }}
            />
          </IconStyled>
        </div>
      )
    case 'g': case 'G':
      return (
        <div className="container">
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296" color="black" order={4}>
            <IconPathStyled
              d="M60,10
                       C-10,0 -10,100 60,90
                       l0,-40 -20,0"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
                delay: 3
              }}
            />
          </IconStyled>
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296" color="green" order={3}>
            <IconPathStyled
              d="M60,10
                       C-10,0 -10,100 60,90
                       l0,-40 -20,0"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
                delay: 2
              }}
            />
          </IconStyled>
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296" color="blue" order={2}>
            <IconPathStyled
              d="M60,10
                       C-10,0 -10,100 60,90
                       l0,-40 -20,0"
              transition={{
                default: {duration: 4, ease: "easeInOut"},
                delay: 1
              }}
            />
          </IconStyled>
          <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296">
            <IconPathStyled
                      d="M60,10
                       C-10,0 -10,100 60,90
                       l0,-40 -20,0"
              transition={{
                default: {duration: 4, ease: "easeInOut"}
              }}
            />
          </IconStyled>
        </div>
      )

  }
  return null;
};

export default AlphabetAG;
