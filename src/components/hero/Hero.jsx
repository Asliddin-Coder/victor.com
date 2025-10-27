import styles from "./Hero.module.scss"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegram } from "react-icons/fa";
import backImg from "../../assets/images/Image.png";
import person from "../../assets/images/person.png";
import { useEffect, useState } from "react";
const Hero = () => {

  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.container} style={{marginTop: isScroll ? "32rem" : "24rem"}}>
          {/* Hello start */}
          <div className={styles.hello}>
            <span><span id={styles.first}>Hello,</span> I'm</span>
            <h1>VICTOR</h1>
            <span className={styles.job}>Professional English Teacher</span>
            <button className={styles.letsTalkBtn}>Let's Talk</button>
          </div>
          {/* Hello end */}
          {/* TEXT */}
          <h1 className={styles.placeholder}>VICTOR</h1>
          {/* Lines */}
          <div className={styles.lines}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
          {/* Images */}
          <img id={styles.person} src={person} alt="" />
          <img id={styles.backImg} src={backImg} alt="" />
          {/* Social Media start */}
          <div className={styles.socialMedia}>
            <FaInstagram size={40} className={styles.btn} />
            <FaFacebookF size={40} className={styles.btn} />
            <FaLinkedinIn size={40} className={styles.btn} />
            <FaTelegram size={40} className={styles.btn} />
          </div>
          {/* Social Media end */}
          <div className={styles.bottomBox}></div>
        </div>
      </div>
    </>
  )
}

export default Hero