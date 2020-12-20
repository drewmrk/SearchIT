import { createContext, useState, useEffect } from 'react'
import { logoutFunction } from '../db/functions'
import { auth } from '../db/services'

export const AuthContext = createContext(false)

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        if (auth().currentUser.email.split('@').pop() === process.env.REACT_APP_ALLOWED_DOMAIN) {
          setIsLoggedIn(true)
        } else if (auth().currentUser.email.split('@').pop() !== process.env.REACT_APP_ALLOWED_DOMAIN) {
          setIsLoggedIn(false)
          logoutFunction()
        }
      } else {
        setIsLoggedIn(false)
      }
    })
  })

  return <AuthContext.Provider value={{ isLoggedIn }}>{children}</AuthContext.Provider>
}
