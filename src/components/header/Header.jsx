import Hero from "../hero/Hero"
import Nav from "../nav/Nav"
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Nav />
        <Hero/>
      </div>
    </div>
  )
}

export default Header