import React, { Component } from 'react'

import InputField from '../Components/Input'
import FormHelper from '../Components/FormHelper'

import Data from '../Configs/Data'

import toastr from 'toastr'

export default class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        username: '',
        password: ''
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleInputChange (e) {
    FormHelper.handleFormChange.bind(this)(e, 'user')
  }

  handleFormSubmit (e) {
    e.preventDefault()

    Data
      .post('login')
      .then((res) => {
        if (res.status !== 'ok') {

        }

        toastr.success(`Welcome back, ${this.state.user.username}`)
        this.saveUserInLocalStorage(this.state.user.username)
        this.props.history.push('/customers')
      })
  }

  saveUserInLocalStorage (username) {
    window.localStorage.setItem('username', username)
  }

  render () {
    return (
      <div className='loginform col-md-6 mx-auto'>
        <h2>Login</h2>
        <form>
          <InputField
            name='username'
            placeholder='Username'
            fieldType='text'
            fieldSymbol='@'
            onChange={this.handleInputChange}
          />
          <InputField
            name='password'
            placeholder='Password'
            fieldType='password'
            onChange={this.handleInputChange}
          />

          <input type='submit' className='btn btn-primary mb-2' onClick={this.handleFormSubmit} value='Login' />
        </form>
      </div>
    )
  }
}
