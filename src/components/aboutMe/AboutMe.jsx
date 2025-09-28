import styles from './AboutMe.module.scss';
import AboutOne from "../../assets/images/about-1.png";
import AboutTwo from "../../assets/images/about-2.png";

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.container}>
        {/* ABOUT IMAGE START*/}
        <div className={styles.image}>
          <div className={styles.imageOne}>
            <img src={AboutOne} alt="About First" />
            <span className={styles.title}>
              Saticfied Customers
              <span className={styles.orange}>25</span>
            </span>
          </div>
          <div className={styles.imageTwo}>
            <span className={styles.title}>
              <span className={styles.orange}>8</span>
              Year of experience
            </span>
            <img src={AboutTwo} alt="About Second" />
          </div>
        </div>
        {/* ABOUT IMAGE END*/}

        {/* ABOUT TITLE & DESC START */}
        <div className={styles.titleAndDesc}>
          <span className={styles.orange}>01</span>
          <span className={styles.desc}>
            <h4>about me</h4>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </span>
        </div>
        {/* ABOUT TITLE & DESC END */}

      </div>
    </div>
  )
}

export default AboutMe