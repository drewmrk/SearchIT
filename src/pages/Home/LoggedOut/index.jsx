import { loginFunction } from '../../../db/functions'
import styles from './styles.module.scss'

const LoggedOut = () => (
  <div className={styles.hero}>
    <h1 className={styles.heroTitle}>{process.env.REACT_APP_ORGANIZATION_NAME}</h1>
    <button onClick={(e => e.preventDefault(), loginFunction)} className={styles.heroButton}>
      Login
    </button>
  </div>
)

export default LoggedOut
