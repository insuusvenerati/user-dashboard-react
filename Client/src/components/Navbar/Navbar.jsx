/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import NavBarToggle from './NavBarToggle'
import './navbar.scss'
import { useStoreState, useStoreActions } from 'easy-peasy'

const Navbar = () => {
  let [isBurgerToggled, toggleBurger] = useState(false)
  const isDark = useStoreState(state => state.theme.isDark)
  const setDark = useStoreActions(actions => actions.theme.setDark)

  return (
    <nav
      aria-label="main navigation"
      role="navigation"
      className={isDark ? 'navbar is-dark' : 'navbar'}
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
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
          className={
            isBurgerToggled
              ? 'navbar-burger burger is-active'
              : 'navbar-burger burger'
          }
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
            <NavBarToggle isDark={isDark} setDark={() => setDark(!isDark)} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
