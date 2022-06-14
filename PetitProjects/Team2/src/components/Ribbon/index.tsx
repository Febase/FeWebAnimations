import { motion } from 'framer-motion';
import styled from 'styled-components';

const Svg = styled(motion.svg)`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  g:nth-child(odd) {
    opacity: 0.6
  }
  z-index: -1;
`

const Ribbon = ({color}: {color: string}) => {
  // const { scrollYProgress, scrollY } = useViewportScroll();
  // const background = useTransform(scrollYProgress, )

  return (
    <Svg width="888" height="1628" viewBox="0 0 888 1628" animate={{backgroundColor: ['#F2B035', '#F28963', '#049DD9', '#F2167D'], y: [0, 100, 200, 300, 400],}} transition={{ duration: 4, ease: "linear" }} xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M48.5273 1415L888 1498.11L751.5 1627.5L0 1550.33L48.5273 1415Z" />
        <path d="M335 1018L751.5 1169V1298.5L522 1208L335 1018Z" />
        <path d="M85 346.311L854 187V309.311L370.387 412L85 346.311Z" />
        <path d="M195 25L226.617 0.25H92.383L195 25Z" />
        <path d="M713.526 491.561L763 643.5L323.733 949.932L363.5 727L713.526 491.561Z" />
      </g>
      <g>
        <path d="M92.3456 0L854 188V309L92.3456 117V0Z" />
        <path d="M92.3456 0L854 188V309L92.3456 117V0Z" />
        <path d="M86.7401 346L713.5 492L764 642.5L86.74 479L86.7401 346Z" />
        <path d="M363.5 726L518.5 1207.5L337.5 1025L323.5 952L363.5 726Z" />
        <path d="M753.647 1167.5V1298.5L0.5 1548.5L47 1408.5L753.647 1167.5Z" />
        <path d="M873 1672.5L888 1497L277 1984H488L873 1672.5Z" />
      </g>
    </Svg>
  )
}

export default Ribbon;