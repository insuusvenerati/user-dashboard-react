import React from 'react'
import { StoreProvider } from 'easy-peasy'
import store from './Store'
import { Navbar, CardList } from './components/ModuleExports'

const App = () => {
  return (
    <StoreProvider store={store}>
      <Navbar />
      <CardList />
    </StoreProvider>
  )
}

export default App
