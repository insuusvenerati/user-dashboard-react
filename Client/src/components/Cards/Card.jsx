import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Card = ({ title }) => {
  return (
    <div className="tile is-parent">
      <div className="card card-1 tile is-child">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder"
            />
          </figure>
        </div>
        <header className="card-header">
          <p className="card-header-title">{title}</p>
        </header>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired
}

export default Card
