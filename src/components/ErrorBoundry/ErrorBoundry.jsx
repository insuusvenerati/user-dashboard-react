/* eslint-disable space-before-function-paren */
import React, { Component } from 'react'
import * as Sentry from '@sentry/browser'
import PropTypes from 'prop-types'

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(err, info) {
    this.setState({ hasError: true })
    Sentry.captureException(err)
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
