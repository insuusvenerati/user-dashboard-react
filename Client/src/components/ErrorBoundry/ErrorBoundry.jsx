/* eslint-disable space-before-function-paren */
import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      errorMessage: []
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error }
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>
    } else {
      return this.props.children
    }
  }
}
