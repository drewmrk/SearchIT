const Header = props => (
  <thead className={props.styles.tableHeaderWrapper}>
    <tr className={props.styles.tableHeader}>
      <th className={props.styles.tableHeaderHeading}>Name</th>
      <th className={props.styles.tableHeaderHeading}>Asset</th>
      <th className={props.styles.tableHeaderHeading}>Serial</th>
      <th className={props.styles.tableHeaderHeading}>Condition</th>
      <th className={props.styles.tableHeaderHeading}>Location</th>
      <th className={props.styles.tableHeaderHeading}>Checkout to</th>
      <th className={props.styles.tableHeaderHeading}>Notes</th>
    </tr>
  </thead>
)

export default Header
