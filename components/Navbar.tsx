import { useRef, useState } from "react"
import { motion } from "framer-motion"


import styles from '../styles/Navbar.module.scss'
import Container from './Container'

function getRelativeCoordinates(event: any, referenceElement: any) {
  const position = {
    x: event.pageX,
    y: event.pageY
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  const x = position.x - offset.left
  const y = position.y - offset.top

  return {
    x,
    y,
    rotate: (x + y) / 5,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2)
  };
}

const INITIAL_POSITION = { x: 40, y: 40, rotate: 0 }

const Navbar = (): JSX.Element => {
  const [mousePosition, setMousePosition] = useState<any>(INITIAL_POSITION);
  const boxRef = useRef<any>(null)

  const handleMouseMove = (e: any) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  }

  return (
    <header className="fixed w-full z-10 mix-blend-difference" >
      <Container>
        <motion.div
          ref={boxRef}
          onMouseMove={e => handleMouseMove(e)}
          onMouseLeave={e => setMousePosition({ x: 40, y: 40, rotate: 0 })}
          animate={{
            rotateX: mousePosition.centerX * 20,
            rotateY: mousePosition.centerY * 20
          }}
          className="relative max-w-md py-6 md:py-10"
        >
          <motion.div
            initial={INITIAL_POSITION}
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
              rotate: mousePosition.rotate
            }}
            className={`${styles.dot} absolute h-8 w-8 mix-blend-normal outline-none select-none`}
          />
        </motion.div>
      </Container>
    </header>
  )
}

export default Navbar