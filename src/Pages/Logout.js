import { Component } from 'react'
import Auth from '../Configs/Auth'

export default class LogoutPage extends Component {
  componentWillMount () {
    Auth.removeUser()
    var privateLinks = document.getElementsByClassName('private-link')
    var loginLink = document.getElementsByClassName('login-link')[0]
    loginLink.classList.remove('d-none')
    if (privateLinks.length > 0) {
      for (let i = 0; i < privateLinks.length; i++) {
        let currentLink = privateLinks[i]
        currentLink.classList.add('d-none')
      }
    }
    this.props.history.push('/')
  }

  render () {
    return null
  }
}
