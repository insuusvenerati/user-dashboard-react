import React, { Fragment } from "react";

const NavBarToggle = ({ isDark, setDark }) => {
  return (
    <Fragment>
      <div className="navbar-buttons">
        <div className="field theme-toggle">
          <i className={isDark ? "fa fa-moon" : "fa fa-sun"} />{" "}
          <div class="onoffswitch">
            <input
              type="checkbox"
              name="onoffswitch"
              className="onoffswitch-checkbox"
              id="myonoffswitch"
              checked={isDark ? "checked" : ""}
              onClick={() => setDark(!isDark)}
              aria-label="toggle dark mode"
            />
            <label className="onoffswitch-label" for="myonoffswitch" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBarToggle;
