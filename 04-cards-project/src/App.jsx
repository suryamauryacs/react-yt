import React from 'react'
import Card from './components/Card'
import User from './components/User'

const arr = [10, 20, 30, 40];

const App = () => {
  return (
    <div className='parent'>
      {/* <Card /> */}
      {/* <User name="surya" />
      <User name="Saurabh" /> */}


      {arr.map(function () {
        return 'hello'
      })}
    </div>

  )
}

export default App
