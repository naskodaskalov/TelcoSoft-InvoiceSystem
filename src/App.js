import React from 'react'
import Navigation from './Components/Navigation'
import Routes from './Configs/Routes'

import './App.css'

function App () {
  return (
    <div className='container-fluid'>
      <Navigation />
      <div className='wrapper'>
        <Routes />
      </div>
    </div>
  )
}

export default App
