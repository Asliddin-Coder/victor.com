import { useEffect, useState } from "react";
import styles from "./Nav.module.scss"
import { MdClose, MdMenu } from "react-icons/md";
const Nav = () => {

    const [isScroll, setIsScroll] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true)
                setIsOpen(false)
            } else {
                setIsScroll(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <div className={`${styles.nav} ${isScroll ? styles.fixed : ""}`}>
                <div className={styles.container}>
                    {/* LOGO start */}
                    <div className={styles.logo}><span className={styles.one}>VI</span><span className={styles.two}>CT</span>OR</div>
                    {/* LOGO end */}
                    {/* Navigation Bar start */}
                    <nav className={styles.navbar}>
                        <MdMenu className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}/>
                        <ul id={styles.navbar} style={{right: isOpen ? "27rem" : "-30rem"}}>
                            <li className={`${styles.navItem} ${styles.active}`}>Home</li>
                            <li className={styles.navItem}>About</li>
                            <li className={styles.navItem}>Portfolio</li>
                            <li className={styles.navItem}>Service</li>
                            <li className={styles.navItem}>Blogs</li>
                            <li className={styles.navItem}>Books</li>
                            <li className={styles.navItem}>Article</li>
                            <li className={styles.navItem}>Programs</li>
                            <li className={styles.navItem}>Contact</li>
                        </ul>
                    </nav>
                    {/* Navigation Bar end */}

                    {/* Contact start */}
                    <button className={styles.contactBtn}>Contact</button>
                    {/* Contact end */}
                </div>
            </div>
        </>
    )
}

export default Nav