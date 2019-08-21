import { Component } from 'react'
import Auth from '../Configs/Auth'

export default class LogoutPage extends Component {
  UNSAFE_componentWillMount () {
    Auth.removeUser()
    this.props.history.push('/')
  }

  render () {
    return null
  }
}
