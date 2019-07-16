import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/browser'
import './index.scss'
import App from './App.jsx'

Sentry.init({
  dsn: 'https://c32c2489e254411390ac3e9f10d731c5@sentry.io/1495710',
  release: '1.0.3',
  environment: 'prod'
})

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js')
  whyDidYouRender(React)
}

ReactDOM.render(<App />, document.getElementById('root'))
