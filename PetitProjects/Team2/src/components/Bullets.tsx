import { useState, useEffect } from "react";
import { intro } from "../constants/introduce";
import styled from "styled-components";
import { motion } from 'framer-motion';

const BulletsList = styled(motion.ul)`
  width: 400px;
  line-height: 16px;
  text-align: center;
  position: fixed;
  padding: 0;
  margin: 0;
  left: calc(18.772563% - 200px);
  // top: 50vh; //top: calc(50vh - 112px); 최초 진입시 중간값
  // transform: translateY(-200px);
  transform: translateY(-50%);
  color: #1b1b1b;
  font-weight: 600;
`;

const BulletItem = styled.li`
  color: #1b1b1b;
  padding: 12px;
  position: relative;
  font-size: 16px;
  line-height: 50px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &.focused {
    font-size: 257px;
    line-height: 200px;
  }
`;

const LIST_ITEM_HEIGHT = 72;
let rafCache: number | null = null;

const smoothMoveTo = (y: number) => {
  let speed = Math.abs(window.scrollY - y) / 15;
  const move = () => {
    const diff = (window.scrollY - y);
    if (diff === 0) return;

    if (diff > 0) {
      window.scrollTo(0, window.scrollY - Math.min(diff, speed));
    } else {
      window.scrollTo(0, window.scrollY + Math.min(Math.abs(diff), speed));
    }
    rafCache = requestAnimationFrame(move);
  };
  if (rafCache) {
    cancelAnimationFrame(rafCache);
    rafCache = null;
  }
  move();
};

const Bullets = () => {
  const [focused, setFocused] = useState<string>(
    window.location.hash.replace("#", "")
  );

  const scrollToElement = (id: string) => {
    const target = document.querySelector(`#${id}`) as HTMLElement;
    // window.scrollTo({
    //   top: target.offsetTop,
    // });
    smoothMoveTo(target.offsetTop);
    window.history.pushState(null, "", "#" + id);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setFocused(window.location.hash.replace("#", ""));
    });
  }, []);

  const focusedIndex = intro.findIndex((item) => item.first === focused);
  
  const transitionY = (1- focusedIndex) * LIST_ITEM_HEIGHT;
  
  return (
    <BulletsList
      animate={{
        top: `calc(50% + ${transitionY}px)`
      }}
      transition={{
        ease: "linear"
      }}
    >
      {intro.map((item, index) => (
        <BulletItem
          className={focused === item.first ? "focused" : ""}
          key={item.fullName}
          onClick={() => scrollToElement(item.first)}
        >
          {item.first}
        </BulletItem>
      ))}
    </BulletsList>
  );
};

export default Bullets;
