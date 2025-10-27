import styles from './Location.module.scss';

const Location = () => {
  return (
    <div className={styles.location}>
        <div className={styles.container}>
            <div className={styles.title}>
                <span>02</span>
                location
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.339443978476!2d65.80703327618592!3d38.840536971736284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea87d93f5d4bd%3A0x14977d799fc7c540!2sQarshi%20MII%20qoshidagi%20%22Nuriston%22%20Akademik%20Litsey!5e1!3m2!1sen!2s!4v1761456654003!5m2!1sen!2s" width="600" height="450" className={styles.map}></iframe>
        </div>
    </div>
  )
}

export default Location