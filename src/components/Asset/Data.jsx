import { Link } from 'react-router-dom'
import styles from '../../styles/components/Asset.module.scss'

const Data = props => (
  <tr className={styles.tableInfoSection}>
    <td className={styles.tableInfoSectionData}>{props.assetDetails.name ? props.assetDetails.name : 'N/A'}</td>
    <td className={styles.tableInfoSectionData}>{props.assetDetails.asset}</td>
    <td className={styles.tableInfoSectionData}>
      <Link to={`/asset/${props.assetDetails.serial}`}>{props.assetDetails.serial}</Link>
    </td>
    <td className={styles.tableInfoSectionData}>{props.assetDetails.condition}</td>
    <td className={styles.tableInfoSectionData}>{props.assetDetails.location ? props.assetDetails.location : 'N/A'}</td>
    <td className={styles.tableInfoSectionData}>
      {props.assetDetails.checkoutTo ? props.assetDetails.checkoutTo : 'N/A'}
    </td>
    <td className={styles.tableInfoSectionData}>{props.assetDetails.notes}</td>
  </tr>
)

export default Data
