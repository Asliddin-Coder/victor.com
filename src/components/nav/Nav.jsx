import { useEffect, useState } from "react";
import styles from "./Nav.module.scss"
import { MdClose, MdMenu } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
const Nav = () => {

    const [isScroll, setIsScroll] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation();

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
                        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <MdClose /> : <MdMenu />}
                        </div>
                        <ul className={`${styles.nav_bar} ${isOpen ? styles.open : ""}`}>
                            <Link
                                to={"/"}
                                className={`${styles.navItem} ${location.pathname == '/' ? styles.active : ""}`}
                            >
                                Home
                            </Link>
                            <Link
                                to={"/about"}
                                className={`${styles.navItem} ${location.pathname == '/about' ? styles.active : ""}`}
                            >
                                About
                            </Link>
                            <Link
                                to={"/portfolio"}
                                className={`${styles.navItem} ${location.pathname == '/portfolio' ? styles.active : ""}`}
                            >
                                Portfolio
                            </Link>
                            <Link
                                to={"/service"}
                                className={`${styles.navItem} ${location.pathname === '/service' ? styles.active : ""}`}
                            >
                                Service
                            </Link>
                            <Link
                                to={"/blogs"}
                                className={`${styles.navItem} ${location.pathname === '/blogs' ? styles.active : ""}`}
                            >
                                Blogs
                            </Link>
                            <Link
                                to={"/books"}
                                className={`${styles.navItem} ${location.pathname === '/books' ? styles.active : ""}`}
                            >
                                Books
                            </Link>
                            <Link
                                to={"/article"}
                                className={`${styles.navItem} ${location.pathname === '/article' ? styles.active : ""}`}
                            >
                                Article
                            </Link>
                                                        <Link
                                to={"/programs"}
                                className={`${styles.navItem} ${location.pathname === '/programs' ? styles.active : ""}`}
                            >
                                Programs
                            </Link>
                            <Link
                                to={"/contact"}
                                className={`${styles.navItem} ${location.pathname === '/contact' ? styles.active : ""}`}
                            >
                                Contact
                            </Link>
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