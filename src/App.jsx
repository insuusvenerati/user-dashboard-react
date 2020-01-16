import React from 'react'
import { Navbar, CardList, Html, Content } from './components/ModuleExports'

const App = () => {
  return (
    <Html>
      <Content>
        <Navbar />
        <CardList />
      </Content>
    </Html>
  )
}

export default App
