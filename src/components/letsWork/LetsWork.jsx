import behance from '../../assets/images/behance.png';
import slack from '../../assets/images/slack.png';
import dribbble from '../../assets/images/dribbble.png';
import twilio from '../../assets/images/twilio.png';
import github from '../../assets/images/github.png';
import styles from './LetsWork.module.scss';
import { MdDownload } from "react-icons/md";
const LetsWork = () => {
    return (
        <div className={styles.letsWork}>
            <div className={styles.container}>
                <div className={styles.trused}>
                    <img src={behance} alt="" />
                    <img src={slack} alt="" />
                    <img src={dribbble} alt="" />
                    <img src={twilio} alt="" />
                    <img src={github} alt="" />
                </div>

                <div className={styles.letsWorkBlock}>
                    <h3>let’s work together on Your Next Project</h3>
                    <button className={styles.letsTalkBtn}>HIRE ME NOW</button>
                    <span className={styles.downloadBtn}><MdDownload className={styles.btn}/> Download CV</span>
                </div>
            </div>
        </div>
    )
}

export default LetsWork             