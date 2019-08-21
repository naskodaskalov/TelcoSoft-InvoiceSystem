import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    window.localStorage.getItem('username') ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.locatioin }
      }} />
    )
    )
    } />
)

export default PrivateRoute
