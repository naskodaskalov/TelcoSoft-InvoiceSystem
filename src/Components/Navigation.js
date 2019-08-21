import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Images/telco-invoice-system-logo.png'

export default class Navigation extends Component {
  render () {
    return (
      <div className='d-flex justify-content-around flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm'>

        <NavLink to='/'>
          <img src={logo} className='my-0 mr-md-auto ' alt='TelcoSoft - Invoice system' />
        </NavLink>
        <nav className='my-2 my-md-0 mr-md-3'>
          <NavLink to='/' className='p-2 text-dark'>Home</NavLink>
          <NavLink to='/customers' className='p-2 text-dark'>Customers</NavLink>
          <NavLink to='/login' className='p-2 text-dark'>Login</NavLink>
          <NavLink to='/logout' className='p-2 text-dark'>Logout</NavLink>
        </nav>
      </div>
    )
  }
}
