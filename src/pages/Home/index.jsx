import React from 'react'
import { IsLoggedIn } from '../../db/variables'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'

const PageHome = () => {
  return IsLoggedIn() ? <LoggedIn /> : <LoggedOut />
}

export default PageHome
