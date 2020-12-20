import { Link } from 'react-router-dom'
import { loginFunction, logoutFunction } from '../../../db/functions'
import { IsLoggedIn } from '../../../db/variables'
import styles from './styles.module.scss'

const navListItems = [
  {
    name: 'Assets',
    link: '/'
  },
  {
    name: 'Create',
    link: '/create'
  }
]

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.headerTitle}>
      <Link to="/" className={styles.headerTitleLink}>
        SearchIT
      </Link>
    </h1>
    <nav className={styles.headerNav}>
      {IsLoggedIn() && (
        <ul className={styles.headerNavList}>
          {navListItems.map(item => (
            <li className={styles.headerNavListItem} key={item.name}>
              <Link to={item.link} className={styles.headerNavListItemLink}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={
          (e => {
            e.preventDefault()
          },
          IsLoggedIn() ? logoutFunction : loginFunction)
        }
        className={styles.headerNavAuthenticationBttn}
      >
        {IsLoggedIn() ? 'Logout' : 'Login'}
      </button>
    </nav>
  </header>
)

export default Header
