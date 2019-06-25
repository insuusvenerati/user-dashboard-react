import React from 'react'
import Card from './Card'

const CardList = () => (
  <section style={{ height: '100vh' }} className="section">
    <div className="container">
      <div className="tile is-ancestor">
        <Card title="This is the Title" body="This is the body" />
        <Card title="This is the Title" body="This is the body" />
        <Card title="This is the Title" body="This is the body" />
        <Card title="This is the Title" body="This is the body" />
      </div>
    </div>
  </section>
)

export default CardList
