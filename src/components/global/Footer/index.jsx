import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <h1 className={styles.footerTitle}>
      <Link to="/" className={styles.footerTitleLink}>
        SearchIT
      </Link>
    </h1>
    <small className={styles.footerCopyright}>&copy; {new Date().getFullYear()} Drew Markel</small>
  </footer>
)

export default Footer
