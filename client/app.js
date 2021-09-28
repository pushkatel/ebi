import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import PurchaseStock from './PurchaseStock'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <PurchaseStock />
    </div>
  )
}

export default App
