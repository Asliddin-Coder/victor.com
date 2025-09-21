import { useEffect, useState } from "react"
import styles from "./Nav.module.scss"
import { MdClose, MdMenu } from "react-icons/md";
const Nav = () => {
    const [isFixed, setIsFixed] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsFixed(true)
            } else {
                setIsFixed(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    })


    return (
        <>
            <div className={`${styles.nav} ${isFixed ? styles.fixed : ''}`}>
                {/* LOGO start */}
                <div className={styles.logo}><span className={styles.one}>VI</span><span className={styles.two}>CT</span>OR</div>
                {/* LOGO end */}
                {/* Navigation Bar start */}
                <nav className={styles.navbar}>
                    <ul>
                        <li className={styles.navItem}>Home</li>
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

                {/* Navbar Menu start */}
                <nav className={styles.navbarMenu}>
                    {/* Toggle button */}
                    <div onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <MdClose size={35} className={styles.menu} />
                        ) : (
                            <MdMenu size={35} className={styles.menu} />
                        )}
                    </div>
                    <ul className={`${styles.navList} ${isOpen ? styles.show : ""}`}>
                        <li className={styles.navItem}>Home</li>
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
                {/* Navbar Menu end */}

                {/* Navigation Bar end */}

                {/* Contact start */}
                <button className={styles.contactBtn}>Contact</button>
                {/* Contact end */}
            </div>
        </>
    )
}

export default Nav