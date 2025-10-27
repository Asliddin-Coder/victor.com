import { useRef } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.scss";
import Swal from "sweetalert2";
import { FaLinkedinIn, FaDribbble, FaInstagram, FaFacebookF, FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(
            (result) => {
                // Xabar yuborilganda
                Swal.fire({
                    icon: "success",
                    title: "Yuborildi!",
                    text: "Xabar muvaffaqiyatli yuborildi ✅",
                    confirmButtonColor: "#ff4b00",
                });

                e.target.reset();
            },
            (error) => {
                alert("Xabar yuborishda xatolik yuz berdi: " + error.text);
            }
        );
    };

    return (
        <div className={styles.contact}>
            <div className={styles.container}>
                {/* Footer Info start */}
                <div className={styles.footerInfo}>
                    <h1><span>01</span>contact</h1>
                    <div className={styles.infoAddress}>
                        <div className={styles.box}>
                            <FaPhone className={styles.icon} />
                            <span className={styles.info}>
                                <span>Phone</span>
                                <a href={`tel:+998995531452`}>(219) 555-0114</a>
                            </span>
                        </div>
                        <div className={styles.box}>
                            <MdOutlineMailOutline className={styles.icon} />
                            <span className={styles.info}>
                                <span>Email</span>
                                <a href={`mailto:robertfox@example.com`}>robertfox@example.com</a>
                            </span>
                        </div>
                        <div className={styles.box}>
                            <FaLocationDot className={styles.icon} />
                            <span className={styles.info}>
                                <span>Address</span>
                                <a href="https://maps.app.goo.gl/uJYvYrDTivM3YfVJ9">4517 Washington Ave. Manchester, Kentucky 39495</a>
                            </span>
                        </div>
                    </div>

                    <div className={styles.socialMedia}>
                        <a href="https://www.linkedin.com/" target="_blank"><FaLinkedinIn className={styles.icon} /></a>
                        <a href="https://dribbble.com/" target="_blank"><FaDribbble className={styles.icon} /></a>
                        <a href="https://www.instagram.com/" target="_blank"><FaInstagram className={styles.icon} /></a>
                        <a href="https://www.facebook.com/" target="_blank"><FaFacebookF className={styles.icon} /></a>
                    </div>
                </div>

                {/* Footer Form start */}
                <div className={styles.footerForm}>
                    <h4>I’m always open to discussing <span>product design work</span> or partnership </h4>
                    <div className={styles.line}></div>

                    <form ref={form} onSubmit={sendEmail}>
                        <div className={styles.nameAndEmail}>
                            <div className={styles.name}>
                                <label htmlFor="name">Your name*</label>
                                <input type="text" name="user_name" placeholder="Enter your name here" required />
                            </div>
                            <div className={styles.email}>
                                <label htmlFor="email">Email Address*</label>
                                <input type="email" name="user_email" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" placeholder="Enter your email address" required />
                            </div>
                        </div>

                        <div className={styles.message}>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" placeholder="Write your message here" required></textarea>
                        </div>

                        <button type="submit" className={styles.contcFormBtn}>send message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
