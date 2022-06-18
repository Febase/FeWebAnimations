import { useState, useEffect } from "react";
import { intro } from "../constants/introduce";
import styled from "styled-components";

const BulletsList = styled.ul`
  width: 400px;
  line-height: 16px;
  text-align: center;
  position: fixed;
  padding: 0;
  margin: 0;
  left: calc(18.772563% - 200px);
  // top: 50vh; //top: calc(50vh - 112px); 최초 진입시 중간값
  // transform: translateY(-200px);
  // transform: translateY(-50%);
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

const Bullets = () => {
  const [focused, setFocused] = useState<string>(
    window.location.hash.replace("#", "")
  );
  const scrollToElement = (id: string) => {
    const target = document.querySelector(`#${id}`) as HTMLElement;
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
    window.history.pushState(null, "", "#" + id);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setFocused(window.location.hash.replace("#", ""));
    });
  }, []);

  return (
    <BulletsList>
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
