/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import classNames from 'classnames'
import NavBarToggle from './NavBarToggle'
import './navbar.scss'
import { useStoreState, useStoreActions } from 'easy-peasy'

const Navbar = () => {
  let [isBurgerToggled, toggleBurger] = useState(false)
  const isDark = useStoreState(state => state.theme.isDark)
  const setDark = useStoreActions(actions => actions.theme.setDark)
  const getZones = useStoreActions(actions => actions.zones.getZones)

  const burgerButtonStyle = classNames(
    isBurgerToggled ? 'navbar-burger burger is-active' : 'navbar-burger burger'
  )

  return (
    <nav
      aria-label="main navigation"
      role="navigation"
      className={isDark ? 'navbar is-dark' : 'navbar is-light'}
      style={{
        // boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
        /* offset-x | offset-y | blur-radius | color */
        boxShadow: '1px 1px 200px grey'
      }}
    >
      <div className="navbar-brand">
        <a href="https://bulma.io" className="navbar-item">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
            alt="Bulma Logo"
          />
        </a>
        <a
          role="button"
          className={burgerButtonStyle}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => toggleBurger(!isBurgerToggled)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={isBurgerToggled ? 'navbar-menu is-active' : 'navbar-menu'}
      >
        <div className="navbar-end">
          <a href="/" className="navbar-item">
            Home
          </a>
          <a href="/about" className="navbar-item">
            About
          </a>
          <a href="/contact" className="navbar-item">
            Contact
          </a>
          <div className="navbar-item">
            <div className="buttons">
              <button
                onClick={() => getZones()}
                className={isDark ? 'button is-warning' : 'button is-primary'}
              >
                Get Zones
              </button>
            </div>
          </div>
          <div className="navbar-item">
            <NavBarToggle isDark={isDark} setDark={() => setDark(!isDark)} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
