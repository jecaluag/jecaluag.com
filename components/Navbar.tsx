import { type Ref, useRef, useState } from "react"
import { motion } from "framer-motion"

import styles from '../styles/Navbar.module.scss'
import Container from './Container'
import getRelativeCoordinates, { type Position } from "../utils/getRelativeCoordinates"

const INITIAL_POSITION = { x: 12, y: 60, rotate: 0 }

const Navbar = (): JSX.Element => {
  const [mousePosition, setMousePosition] = useState<Position>(INITIAL_POSITION);
  const boxRef = useRef(null)

  const handleMouseMove = (e: any) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  }

  return (
    <header className="fixed w-full z-10 h-16 md:h-auto bg-gradient-to-b from-black to-transparent">
      <Container>
        <motion.div
          ref={boxRef}
          onMouseMove={e => handleMouseMove(e)}
          onMouseLeave={() => setMousePosition(INITIAL_POSITION)}
          animate={{
            rotateX: mousePosition.centerX || 0 * 20,
            rotateY: mousePosition.centerY || 0 * 20
          }}
          className="relative max-w-md h-full py-6 md:py-10"
        >
          <motion.div
            initial={INITIAL_POSITION}
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
              rotate: mousePosition.rotate
            }}
            className={`${styles.dot} absolute h-8 w-8 outline-none select-none`}
          />
        </motion.div>
      </Container>
    </header>
  )
}

export default Navbar