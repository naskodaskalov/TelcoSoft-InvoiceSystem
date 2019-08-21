import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import Homepage from '../Pages/Homepage'
import Login from '../Pages/Login'
import Customers from '../Pages/Customers'
import Logout from '../Pages/Logout'
import CustomerInvoices from '../Pages/CustomerInvoices'
import InvoiceDetails from '../Pages/InvoiceDetails'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/login' component={Login} />
    <PrivateRoute exact path='/customers' component={Customers} />
    <PrivateRoute exact path='/logout' component={Logout} />
    <PrivateRoute path='/invoice/:id' component={CustomerInvoices} />
    <PrivateRoute path='/invoiceLists/:id' component={InvoiceDetails} />
  </Switch>
)

export default Routes
