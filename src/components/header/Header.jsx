import Hero from "../hero/Hero"
import Nav from "../nav/Nav"
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
        <Nav />
        <Hero/>
    </header>
  )
}

export default Header