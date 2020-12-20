import { useContext } from 'react'
import { AuthContext } from '../services/Authentication'

export const IsLoggedIn = () => {
  const { isLoggedIn } = useContext(AuthContext)
  return isLoggedIn
}
