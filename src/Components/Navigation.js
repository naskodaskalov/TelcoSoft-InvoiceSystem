import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/telco-invoice-system-logo.png'

export default class Navigation extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: JSON.parse(window.localStorage.getItem('username'))
    }
  }

  render () {
    return (
      <div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm'>

        <Link to='/'>
          <img src={logo} className='my-0 mr-md-auto ' alt='TelcoSoft - Invoice system' />
        </Link>
        <nav className='my-2 my-md-0 mr-md-3'>
          <Link to='/' className='p-2 text-dark'>Home</Link>
          { window.localStorage.getItem('username') ? (
            <div>
              <Link to='/customers' className='p-2 text-dark'>Customers</Link>
              <Link to='/logout' className='p-2 text-dark'>Logout</Link>
            </div>
          ) : (
            <Link to='/login' className='p-2 text-dark'>Login</Link>
          )}
        </nav>
      </div>
    )
  }
}
