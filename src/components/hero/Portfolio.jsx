import { Link } from 'react-router-dom'
import styles from './aboutHero.module.scss'

const Portfolio = () => {

  return (
    <div className={styles.aboutHero}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1 className={styles.pageName}>PORTFOLIO</h1>
          <h1 className={styles.placeholder}>PORTFOLIO</h1>

          <div className={styles.breadcrumb}>
            <Link to={'/'} className={styles.breadcrumbItem}>Home</Link>
            <Link to={'/portfolio'} className={styles.breadcrumbItem}>Portfolio</Link>
          </div>
          {/* Lines */}
          <div className={styles.lines}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio