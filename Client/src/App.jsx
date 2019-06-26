import React from 'react'
import { Navbar, CardList } from './components/ModuleExports'
import Html from './components/Html/Html'
import Content from './components/Content/Content'

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
