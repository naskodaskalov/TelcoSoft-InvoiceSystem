import React, { Component } from 'react'

import InputField from '../Components/Input'
import FormHelper from '../Components/FormHelper'

import Auth from '../Configs/Auth'
import Data from '../Configs/Data'

import toastr from 'toastr'

export default class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        username: '',
        password: ''
      },
      errors: []
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleUserForm = this.handleUserForm.bind(this)
    this.handleUserLogin = this.handleUserLogin.bind(this)
  }

  componentWillUnmount () {
  }

  handleInputChange (e) {
    FormHelper.handleFormChange.bind(this)(e, 'user')
  }

  validateUser () {
    const user = this.state.user
    let errors = []
    let formIsValid = true

    if (user.username.length <= 3) {
      errors.push('Username should be longer than 3 symbols')
    }

    if (user.password.length <= 5) {
      errors.push('Password should be longer than 5 symbols')
    }

    if (errors.length > 0) {
      formIsValid = false
      this.setState({ errors: errors })
    }

    return formIsValid
  }

  handleUserLogin (data) {
    if (data.status !== 'ok') {
      this.setState({ errors: 'Your credentials are wrong!' })
    } else {
      Auth.saveUser(this.state.user.username)
      toastr.success(`Welcome back, ${this.state.user.username}!`)
      this.props.history.push('/customers')
    }
  }

  handleUserForm (e) {
    e.preventDefault()
    const isUserValid = this.validateUser()
    if (!isUserValid) {
      let errorsArr = this.state.errors

      for (let i = 0; i < errorsArr.length; i++) {
        const currentError = errorsArr[i]
        toastr.warning(currentError)
      }
    } else {
      Data
        .post('login')
        .then((res) => {
          if (res.status !== 'ok') {
            toastr.warning('Wrong credentials!')
          }
        })
        .then(() => {
         Auth.saveUser(this.state.user.username)
        })
        .then(() => {
          this.props.history.push('/customers')
        })
    }
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

          <input type='submit' className='btn btn-primary mb-2' onClick={this.handleUserForm} value='Login' />
        </form>
      </div>
    )
  }
}
