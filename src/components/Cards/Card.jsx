import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import className from 'classnames'

const cardStyle = className(styles.card1, 'card tile is-child')

const Card = ({ title }) => {
  return (
    <div className="tile is-parent">
      <div className={cardStyle}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://www.wallpaperflare.com/static/151/52/866/world-of-warcraft-lich-king-video-games-world-of-warcraft-wrath-of-the-lich-king-wallpaper.jpg"
              alt="Placeholder"
            />
          </figure>
        </div>
        <header className="card-header">
          <p className="card-header-title has-text-light">{title}</p>
        </header>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired
}

export default Card
