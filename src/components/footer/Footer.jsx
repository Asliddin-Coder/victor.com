import styles from './Footer.module.scss';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                {/* Footer Info start */}
                <div className={styles.footerInfo}>
                    <h1><span>05</span>contact</h1>
                    <div className={styles.infoAddress}>
                        <div className={styles.box}>
                            <FaPhone className={styles.icon}/>
                            <span className={styles.info}>
                                <span>Phone</span>
                                <a href={`tel: +998995531452`}>(219) 555-0114</a>
                            </span>
                        </div>
                        <div className={styles.box}>
                            <MdOutlineMailOutline className={styles.icon}/>
                            <span className={styles.info}>
                                <span>Email</span>
                                <a href={`mailto: robertfox@example.com`}>robertfox@example.com</a>
                            </span>
                        </div>
                        <div className={styles.box}>
                            <FaLocationDot className={styles.icon}/>
                            <span className={styles.info}>
                                <span>Address</span>
                                <a href="https://maps.app.goo.gl/uJYvYrDTivM3YfVJ9">4517 Washington Ave. Manchester, Kentucky 39495</a>
                            </span>
                        </div>
                    </div>
                    <div className={styles.socialMedia}>
                        <a href={'https://www.linkedin.com/'} target='_blank'><FaLinkedinIn className={styles.icon}/></a>
                        <a href={'https://dribbble.com/'} target='_blank'><FaDribbble className={styles.icon}/></a>
                        <a href={'https://www.instagram.com/'} target='_blank'><FaInstagram className={styles.icon}/></a>
                        <a href={'https://www.facebook.com/'} target='_blank'><FaFacebookF className={styles.icon}/></a>
                    </div>
                </div>
                {/* Footer Info end */}

                {/* Footer Form Start */}
                <div className={styles.footerForm}>
                    <h4>I’m always open to discussing <span>product design work</span> or partnership </h4>
                    <form action="">
                        <div className={styles.nameAndEmail}>
                            <div className={styles.name}>
                                <label htmlFor="name">Your name*</label>
                                <input type="text" id='name' name='name' placeholder='Enter your name here' />
                            </div>
                            <div className={styles.email}>
                                <label htmlFor="email">Email Address*</label>
                                <input type="email" id='email' name='email' placeholder='Enter your email address' />
                            </div>
                        </div>
                        <div className={styles.message}>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows={12} cols={65} placeholder='Write your message here'></textarea>
                        </div>
                        <button className={styles.contcFormBtn}>send message</button>
                    </form>
                </div>
                {/* Footer Form End */}
            </div>
        </div>
    )
}

export default Footer