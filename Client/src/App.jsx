import React from 'react'
import * as Sentry from '@sentry/browser'
import { Navbar, CardList, Html, Content } from './components/ModuleExports'

Sentry.init({
  dsn: 'https://c32c2489e254411390ac3e9f10d731c5@sentry.io/1495710'
})

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
