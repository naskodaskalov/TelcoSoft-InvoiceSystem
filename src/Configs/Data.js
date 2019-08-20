const baseUrl = 'https://testtask.free.beeceptor.com/'

const getOptions = () => ({
  mode: 'cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const handleJsonResponse = res => res.json()

class Data {
  static get (url) {
    let options = getOptions()
    options.method = 'GET'

    return window.fetch(`${baseUrl}${url}`, options)
      .then(handleJsonResponse)
  }

  static post (url) {
    let options = getOptions()
    options.method = 'POST'

    return window.fetch(`${baseUrl}${url}`, options)
      .then(handleJsonResponse)
  }
}

export default Data
