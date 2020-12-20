import React from 'react'
import { Route } from 'react-router-dom'
import { AuthContext } from '../services/Authentication'
import PageHome from '../pages/Home'

const ProtectedRoute = ({ component: RouteComponent, ...rest }) => {
  const { isLoggedIn } = React.useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={routeProps =>
        isLoggedIn ? <RouteComponent {...routeProps} /> : <PageHome />
      }
    />
  )
}

export default ProtectedRoute
