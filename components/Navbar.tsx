import Link from "next/link"
import styles from '../styles/Navbar.module.scss'
import Container from "./Container"

const Navbar = (): JSX.Element => {
  return (
    <header className="fixed w-full z-10">
      <Container>
        <nav className="grid grid-cols-12 py-6 md:py-10">
          <Link href="/">
            <a className="col-span-3 md:col-span-7">
              <span className={`${styles.dot} h-8 w-8`}></span>
            </a>
          </Link>
          <div className="col-span-9 md:col-span-5">
            <ul className="ml-16 pt-1 text-gray-900 flex flex-wrap justify-between items-center">
              <li className="md:text-xl hover-underline cursor-pointer">Work</li>
              <li className="md:text-xl hover-underline cursor-pointer">About</li>
              <li className="md:text-xl hover-underline cursor-pointer">Contact</li>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar