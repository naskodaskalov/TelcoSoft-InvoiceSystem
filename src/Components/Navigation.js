import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Images/telco-invoice-system-logo.png'

export default class Navigation extends Component {
  render () {
    return (
      <div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm'>
        <img src={logo} className='my-0 mr-md-auto ' alt='TelcoSoft - Invoice system' />
        <nav className='my-2 my-md-0 mr-md-3'>
          <NavLink exact to='/' className='p-2 text-dark' activeClassName='btn btn-outline-primary'>Home</NavLink>
          <NavLink exact to='/login' className='p-2 text-dark' activeClassName='btn btn-outline-primary'>Login</NavLink>
        </nav>
      </div>
    )
  }
}
