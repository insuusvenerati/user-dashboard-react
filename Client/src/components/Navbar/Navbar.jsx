import React, { useState } from "react";
import "./navbar.scss";

// TODO: Add hamburger
const Navbar = () => {
  let [isDark, setDark] = useState(false);
  return (
    <nav className={isDark ? "navbar is-dark" : "navbar"}>
      <div className="navbar-brand">
        <a href="https://bulma.io" className="navbar-item">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
            alt="Bulma Logo"
          />
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="navbar-buttons">
            <div className="field theme-toggle">
              <i className={isDark ? "fa fa-moon" : "fa fa-sun"} />{" "}
              <input
                onClick={() => setDark(!isDark)}
                id="switchRoundedDefault"
                type="checkbox"
                name="switchRoundedDefault"
                className="switch is-rounded"
                checked={isDark ? "checked" : ""}
              />
              <label for="switchRoundedDefault">
                {isDark ? "Light Mode" : "Dark Mode"}
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
