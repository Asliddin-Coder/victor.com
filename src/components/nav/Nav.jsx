import { useEffect, useState } from "react";
import styles from "./Nav.module.scss"
import { MdClose, MdMenu } from "react-icons/md";
const Nav = () => {

    const [isScroll, setIsScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50){
                setIsScroll(true)
            }else{
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
                    <div className={styles.toolbar}>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </div>
                    {/* Navigation Bar start */}
                    <nav className={styles.navbar}>
                        <ul>
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