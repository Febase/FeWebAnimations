import { Intro, intro } from "../constants/introduce";
import styled from "styled-components";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useMemo, useCallback, useEffect, useRef, useState } from "react";
import { debounce } from "lodash";

const PageList = styled.ul`
  padding: 0;
  margin: 0;
  margin-left: 33.78378378%;
  position: relative;
  padding: 0;
  transition: all 0.5s;
`;
const PageItem = styled(motion.li)`
  position: relative;
  height: 100vh;
`;

const PageContent = styled.div`
  color: #cccccc;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  position: absolute;
`;

const PageTitle = styled.h3`
  font-size: 72px;
  margin: 0 0 35px 0;
  /* width: 74.73469388%; */
  width: 61.734694%;
  padding-top: 23px;
  line-height: 1.025em;
  font-weight: 600;
`;
const PageDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  width: 36.2244898%;
  font-weight: 400;
`;

const Pages = () => {
  const [index, setIndex] = useState<number>(0);
  // const {scrollYProgress} = useViewportScroll();
  // const [section, setSection] = useState<Intro>()
  // const height = window.innerHeight
  // const scroll = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, height, height * 2, height * 3, height * 4]);

  // scrollYProgress.onChange((value) => {
  //   if (value <= 0.25) {
  //     setSection(intro[0])
  //   } else if (value <= 0.5) {
  //     setSection(intro[1])
  //   } else if (value <= 0.75) {
  //     setSection(intro[2])
  //   } else {
  //     setSection(intro[3])
  //   }
  // })

  // const wheelEvent = useCallback(debounce((ev) => {

  // }, 500), [])

  const ulRef = useRef<HTMLUListElement>(null);

  const throttleScrollDown = useMemo(
    () =>
      debounce((index) => {
        console.log("scroll down debounce");
        if (ulRef.current && index < intro.length) {
          console.log(">>> index : ", index);
          ulRef.current.style.top =
            -document.documentElement.clientHeight * index + "px";
          setIndex((prev) => prev + 1);
        }
      }, 100),
    []
  );

  const handleScrollDown = useCallback(
    (index: number) => {
      // console.log("handleScrollDown");
      throttleScrollDown(index);
    },
    [throttleScrollDown]
  );

  const throttleScrollUp = useMemo(
    () =>
      debounce((index) => {
        console.log("scroll up debounce");
        if (ulRef.current && index > 1) {
          console.log(">>> index : ", index);
          ulRef.current.style.top =
            -document.documentElement.clientHeight * (index - 2) + "px";
          setIndex((prev) => prev - 1);
        }
      }, 100),
    []
  );

  const handleScrollUp = useCallback(
    (index: number) => {
      // console.log("handleScrollUp");
      throttleScrollUp(index);
    },
    [throttleScrollUp]
  );

  useEffect(() => {
    // window.addEventListener("wheel", () => {
    // window.scrollTo(0, 0);
    // });
    window.addEventListener("wheel", (e: WheelEvent) => {
      const event = e as any;
      if (event.wheelDelta < 0) {
        handleScrollDown(index);
      } else {
        handleScrollUp(index);
      }
    });
  }, [handleScrollDown, handleScrollUp, index]);

  // console.log(section);

  return (
    <PageList ref={ulRef}>
      {intro.map((item) => (
        <PageItem
          key={item.fullName}
          transformTemplate={({ y }) => {
            return `translateY(-${y})`;
          }}
        >
          <PageContent>
            <PageTitle>{item.fullName}</PageTitle>
            <PageDescription>
              저는 프론트엔드 개발자이고, [{item.keywords[0]}]입니다.
            </PageDescription>
          </PageContent>
        </PageItem>
      ))}
    </PageList>
  );
};

export default Pages;
