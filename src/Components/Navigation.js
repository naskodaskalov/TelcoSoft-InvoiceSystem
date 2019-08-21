import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/telco-invoice-system-logo.png'

export default class Navigation extends Component {
  render () {
    let privateClass = window.localStorage.getItem('username') === null ? 'private-link d-none' : 'private-link'
    let userLoggedIn = window.localStorage.getItem('username') !== null ? 'login-link d-none' : 'login-link'
    return (
      <div className='d-flex justify-content-around flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm'>

        <Link to='/'>
          <img src={logo} className='my-0 mr-md-auto ' alt='TelcoSoft - Invoice system' />
        </Link>
        <nav className='my-2 my-md-0 mr-md-3'>
          <Link to='/' className='p-2 text-dark'>Home</Link>
          <Link to='/customers' className={`p-2 text-dark ${privateClass}`}>Customers</Link>
          <Link to='/login' className={`p-2 text-dark ${userLoggedIn}`}>Login</Link>
          <Link to='/logout' className={`p-2 text-dark ${privateClass}`}>Logout</Link>
        </nav>
      </div>
    )
  }
}
