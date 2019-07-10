/* eslint-disable space-before-function-paren */
import React, { Component } from 'react'
import * as Sentry from '@sentry/browser'
import PropTypes from 'prop-types'

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eventId: null
    }
  }

  // eslint-disable-next-line handle-callback-err
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo)
      const eventId = Sentry.captureException(error)
      this.setState({ eventId })
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <button
          onClick={() =>
            Sentry.showReportDialog({ eventId: this.state.eventId })
          }
          className="button"
        >
          Report issue
        </button>
      )
    }
    return this.props.children
  }
}

ErrorBoundry.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
