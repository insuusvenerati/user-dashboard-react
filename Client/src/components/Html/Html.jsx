import React from 'react'
import { StoreProvider } from 'easy-peasy'
import store from '../../Store'

const Body = props => {
  return <StoreProvider store={store}>{props.children}</StoreProvider>
}

export default Body
