import styles from '../../styles/components/Asset.module.scss'
import Header from './Header'

const Asset = props => (
  <table className={styles.table}>
    <Header styles={styles} />
    <tbody className={styles.tableInfoSection}>{props.children}</tbody>
  </table>
)

export default Asset
