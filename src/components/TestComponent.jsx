import React, { Component } from 'react'
import ErrorBoundary from '../components/ErrorBoundry/ErrorBoundry'

export default class TestComponent extends Component {
  state = {
    flag: false
  }
  handleClick = () => {
    this.setState({ flag: true })
  }

  render() {
    const { flag } = this.state
    return (
      <ErrorBoundary>
        <button onClick={this.handleClick} className="button">
          Render Error
        </button>
        <div> {flag && <div>{flag.busted.bogus}</div>} </div>
      </ErrorBoundary>
    )
  }
}
