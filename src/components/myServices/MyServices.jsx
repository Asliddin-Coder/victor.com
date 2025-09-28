import styles from './MyServices.module.scss';
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { BiSolidCategory } from "react-icons/bi";
import { FaChartLine } from "react-icons/fa6";
const MyServices = () => {
    return (
        <div className={styles.myServices}>
            <div className={styles.container}>
                
                <div className={styles.lines}>
                    <hr className={styles.line}/>
                    <hr className={styles.line}/>
                    <hr className={styles.line}/>
                    <hr className={styles.line}/>
                    <hr className={styles.line}/>
                </div>

                <h3 className={styles.title}>
                    <span className={styles.orange}>02</span>
                    my service
                </h3>

                <div className={styles.cardList}>
                    <div className={styles.card}>
                        <FiEdit className={styles.icon} />
                        <h4>UI/UX Design</h4>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco</p>
                    </div>
                    <div className={styles.card}>
                        <BiSolidCategory className={styles.icon} />
                        <h4>Product Design</h4>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco</p>
                    </div>
                    <div className={styles.card}>
                        <MdOutlineInsertChartOutlined className={styles.icon} />
                        <h4>Brand Identity</h4>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco</p>
                    </div>
                    <div className={styles.card}>
                        <FaChartLine className={styles.icon} />
                        <h4>Website Design</h4>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyServices