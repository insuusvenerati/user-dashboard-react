import React from "react";

const Card = ({ id, title, body }) => {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{title}</p>
      </header>
      <div className="card-content">
        <div className="content">{body}</div>
      </div>
    </div>
  );
};

export default Card;
