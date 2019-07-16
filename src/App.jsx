import React from 'react'
import * as Sentry from '@sentry/browser'
import {
  Navbar,
  CardList,
  Html,
  Content,
  ErrorBoundary
} from './components/ModuleExports'
import TestComponent from './components/TestComponent'

Sentry.init({
  dsn: 'https://c32c2489e254411390ac3e9f10d731c5@sentry.io/1495710'
})

const App = () => {
  return (
    <ErrorBoundary>
      <Html>
        <Content>
          <Navbar />
          <CardList />
          <TestComponent />
        </Content>
      </Html>
    </ErrorBoundary>
  )
}

export default App
