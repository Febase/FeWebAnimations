import { Intro, intro } from '../constants/introduce'
import styled from "styled-components"
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { throttle } from 'lodash'

const PageList = styled.ul``
const PageItem = styled(motion.li)`
  height: 100vh;
`
const PageTitle = styled.h3`
  font-size: 72px;
  margin: 0 0 35px 0;
  /* width: 74.73469388%; */
  width: 61.734694%;
  padding-top: 23px;
  line-height: 1.025em;
  font-weight: 600;
`
const PageDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  width: 36.2244898%;
  font-weight: 400;
`

const Pages = () => {
  const {scrollYProgress, scrollY} = useViewportScroll();
  const [section, setSection] = useState<Intro>()
  const height = window.innerHeight
  const scroll = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, height, height * 2, height * 3, height * 4]);

  scrollYProgress.onChange((value) => {
    if (value <= 0.25) {
      setSection(intro[0])
    } else if (value <= 0.5) {
      setSection(intro[1])
    } else if (value <= 0.75) {
      setSection(intro[2])
    } else {
      setSection(intro[3])
    }
  })


  const wheelEvent = useCallback(throttle((ev) => {
    
  }, 500), [])

  useEffect(() => {

    window.addEventListener('wheel', () => {
      window.scrollTo(0,0)
    })
    window.addEventListener('wheel', wheelEvent)
  }, [])

  // console.log(section);
  
  return (
    <PageList>
      {intro.map((item) => (
        <PageItem key={item.fullName} transformTemplate={({y}) => {
          return `translateY(-${y})`
        }}>
          <PageTitle>{item.fullName}</PageTitle>
          <PageDescription>저는 프론트엔드 개발자이고, [{item.keywords[0]}]입니다.</PageDescription>
        </PageItem>
      ))}
    </PageList>
  );
};

export default Pages;
