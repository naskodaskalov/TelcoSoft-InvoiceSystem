import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Login from '../Pages/Login'
import Customers from '../Pages/Customers'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/customers' component={Customers} />
  </Switch>
)

export default Routes
