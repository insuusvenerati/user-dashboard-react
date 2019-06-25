import React from 'react';
import './index.scss';

const Card = ({ id, title, body }) => {
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
        <div className="card-content">
          <div className="content">{body}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
