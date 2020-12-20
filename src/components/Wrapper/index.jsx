import styles from '../../styles/components/Wrapper.module.scss'

const Wrapper = props => (
  <div className={styles.wrapper}>
    <h1 className={styles.pageTitle}>{props.title}</h1>
    {props.children}
  </div>
)

export default Wrapper
