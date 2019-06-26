import React from 'react'
import PropTypes from 'prop-types'
import { useStoreState } from 'easy-peasy'

const Content = props => {
  const isDark = useStoreState(state => state.theme.isDark)
  return (
    <div
      style={
        isDark
          ? { height: '100vh', backgroundColor: 'black' }
          : { height: '100vh' }
      }
    >
      {props.children}
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Content
