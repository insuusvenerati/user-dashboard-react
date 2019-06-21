import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({ id, title, body }) => {
  return (
    <Fragment>
      <section className="section">
        <div className="container">
          <Card title={"This is the Title"} body={"This is the body"} />
          <Card title={"This is the Title"} body={"This is the body"} />
          <Card title={"This is the Title"} body={"This is the body"} />
          <Card title={"This is the Title"} body={"This is the body"} />
        </div>
      </section>
    </Fragment>
  );
};

export default CardList;
