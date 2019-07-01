import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App.jsx'

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js')
  whyDidYouRender(React)
}

ReactDOM.render(<App />, document.getElementById('root'))
