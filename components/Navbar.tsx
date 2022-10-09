import Link from "next/link"
import styles from '../styles/Navbar.module.scss'
import Container from './Container'

const Navbar = (): JSX.Element => {
  return (
    <header className="fixed w-full z-10 mix-blend-difference">
      <Container>
        <nav className="grid grid-cols-12 py-6 md:py-10">
          <Link href="/">
            <a className="col-span-3 md:col-span-7 outline-none select-none">
              <span className={`${styles.dot} h-8 w-8 mix-blend-normal`}></span>
            </a>
          </Link>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar