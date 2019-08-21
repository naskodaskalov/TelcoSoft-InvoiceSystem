class Auth {
  static saveUser (user) {
    window.localStorage.setItem('username', JSON.stringify(user))
  }

  static removeUser () {
    window.localStorage.removeItem('username')
  }

  static isUserAuthenticated () {
    return window.localStorage.getItem('username') !== null
  }
}

export default Auth
