/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import NavBarToggle from "./NavBarToggle";
import "./navbar.scss";

const Navbar = ({ isDark, setDark }) => {
  let [isBurgerToggled, toggleBurger] = useState(false);

  return (
    <nav
      aria-label="main navigation"
      role="navigation"
      className={isDark ? "navbar is-dark" : "navbar"}
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
              ? "navbar-burger burger is-active"
              : "navbar-burger burger"
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
        className={isBurgerToggled ? "navbar-menu is-active" : "navbar-menu"}
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
  );
};

export default Navbar;
