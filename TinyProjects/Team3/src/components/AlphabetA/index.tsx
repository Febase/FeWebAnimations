import React from 'react';

import { IconStyled, IconPathStyled } from "./styles";

const AlphabetA = () => {
  return (
    <div className="container">
      <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296">
        <IconPathStyled
          d="M5,90l30,-80 30,80M20,50l30,0"
          transition={{
            default: {duration: 2, ease: "easeInOut", repeat: Infinity}
          }}
        />
      </IconStyled>
      <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296">
        <IconPathStyled
          d="M5,5
           c80,0 80,45 0,45
           c80,0 80,45 0,45z"
          transition={{
            default: {duration: 2, ease: "easeInOut", repeat: Infinity}
          }}
        />
      </IconStyled>
      <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296">
        <IconPathStyled
          d="M60,10
           C-10,0 -10,100 60,90"
          transition={{
            default: {duration: 2, ease: "easeInOut", repeat: Infinity}
          }}
        />
      </IconStyled>
      <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296">
        <IconPathStyled
          d="M10,10
           C90,10 90,90 10,90z"
          transition={{
            default: {duration: 2, ease: "easeInOut", repeat: Infinity}
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
            default: {duration: 2, ease: "easeInOut", repeat: Infinity}
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
            default: {duration: 2, ease: "easeInOut", repeat: Infinity}
          }}
        />
      </IconStyled>
      <IconStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 296">
        <IconPathStyled
          d="M60,10
           C-10,0 -10,100 60,90
           l0,-40 -20,0"
          transition={{
            default: {duration: 2, ease: "easeInOut", repeat: Infinity}
          }}
        />
      </IconStyled>
    </div>
  )
};

export default AlphabetA;
