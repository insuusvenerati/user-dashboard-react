import React from 'react'
import PropTypes from 'prop-types'
import { StoreProvider } from 'easy-peasy'
import store from '../../Store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import PageLoader from '../PageLoader/PageLoader'

const persistor = persistStore(store)

const Body = props => {
  return (
    <PersistGate loading={<PageLoader />} persistor={persistor}>
      <StoreProvider store={store}>{props.children}</StoreProvider>
    </PersistGate>
  )
}

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Body
