import React, { Fragment } from 'react'

const NavBarToggle = ({ isDark, setDark }) => {
  return (
    <Fragment>
      <div className="navbar-buttons">
        <div className="field theme-toggle">
          <i className={isDark ? 'fa fa-moon' : 'fa fa-sun'} />{' '}
          <div className="onoffswitch">
            <input
              type="checkbox"
              name="onoffswitch"
              className="onoffswitch-checkbox"
              id="myonoffswitch"
              checked={isDark ? 'checked' : ''}
              onChange={setDark}
              aria-label="toggle dark mode"
            />
            <label className="onoffswitch-label" htmlFor="myonoffswitch" />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default NavBarToggle
