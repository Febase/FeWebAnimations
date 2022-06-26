import { createRef, useState } from "react";
import { intro } from "../constants/introduce";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import useInterval from "../hook/useInterval";
import useIntersectionObserver from "../hook/useIntersectionObserver";

const PageList = styled.ul`
  padding: 0;
  margin: 0;
  margin-left: 33.78378378%;
  position: relative;
  padding: 0;
  transition: all 0.5s;
  scroll-behavior: smooth;
`;
const PageItem = styled(motion.li)`
  position: relative;
  height: 100vh;
`;

const PageContent = styled.div`
  // color: #cccccc;
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

let rafCache: number | null = null;

const smoothMoveTo = (y: number) => {
  let speed = Math.abs(window.scrollY - y) / 15;
  const move = () => {

    const diff = (window.scrollY - y);
    if(Math.abs(diff) < 300) {
      speed = Math.abs(diff) / 10;
    }

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

function throttle<T>(fun: (arg: T) => void, ms: number) {
  let isThrottled = false;

  return (ev: T) => {
    if (isThrottled) return;
    fun(ev);
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, ms);
  };
}

const Pages = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const indexRef = useRef<number>(0);
  const wheelDeltaRef = useRef<number>(0);
  const visibleIdx = useRef<number>(0);
  // console.log("visibleIdx: ", visibleIdx);
  const [count, setCount] = useState<number[]>(
    Array.from({ length: 4 }, () => 0)
  );
  const refs = useRef(
    Array.from({ length: 5 }, () => createRef<HTMLDivElement>())
  );
  const entry0 = useIntersectionObserver(refs.current[0], {});
  const entry1 = useIntersectionObserver(refs.current[1], {});
  const entry2 = useIntersectionObserver(refs.current[2], {});
  const entry3 = useIntersectionObserver(refs.current[3], {});

  // const wheelDetectorRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const changeCurrentSection = useCallback(
    throttle((ev: WheelEvent) => {
      ev.preventDefault();
      let index = 0;
      if (ev.deltaY > 0) {
        index = Math.min(intro.length - 1, indexRef.current + 1);
      } else {
        index = Math.max(0, indexRef.current - 1);
      }

      indexRef.current = index;
      // window.location.href = "#" + intro[indexRef.current].first;
      window.history.pushState(null, "", "#" + intro[indexRef.current].first);
      smoothMoveTo(indexRef.current * window.innerHeight);
    }, 700),
    []
  );

  const preventScrollEvent = useCallback((ev: WheelEvent) => {
    ev.preventDefault();
  }, []);

  useInterval(() => {
    setCount((arr) => {
      const temp = arr.slice(0);
      temp[visibleIdx.current] < 4
        ? (temp[visibleIdx.current] = temp[visibleIdx.current] + 1)
        : (temp[visibleIdx.current] = 0);
      return temp;
    });
  }, 1000);

  useEffect(() => {
    if (entry0?.isIntersecting) visibleIdx.current = 0;
    if (entry1?.isIntersecting) visibleIdx.current = 1;
    if (entry2?.isIntersecting) visibleIdx.current = 2;
    if (entry3?.isIntersecting) visibleIdx.current = 3;
  }, [entry0, entry1, entry2, entry3]);

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      console.log("changed!!!!");
    });

    listRef.current?.addEventListener("wheel", preventScrollEvent);
    listRef.current?.addEventListener("wheel", changeCurrentSection);

    return () => {
      listRef.current?.removeEventListener("wheel", changeCurrentSection);
      listRef.current?.removeEventListener("wheel", preventScrollEvent);
    };
  }, []);

  return (
    <PageList ref={listRef}>
      {intro.map((item, idx) => (
        <PageItem key={item.fullName} id={item.first}>
          <PageContent ref={refs.current[idx]}>
            <PageTitle>{item.fullName}</PageTitle>
            <PageDescription>
              저는 프론트엔드 개발자이고, [
              {item.keywords[count[visibleIdx.current]]}
              ]입니다.
            </PageDescription>
          </PageContent>
        </PageItem>
      ))}
    </PageList>
  );
};

export default Pages;
