/* eslint-disable space-before-function-paren */
import React from 'react'
import Card from './Card'
import PageLoader from '../PageLoader/PageLoader'
import { useStoreState } from 'easy-peasy'

const CardList = () => {
  const zones = useStoreState(state => state.zones.zoneList)
  const loadingZones = useStoreState(state => state.zones.loadingZones)
  const randomZone = zones[Math.floor(Math.random() * zones.length)]
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  if (loadingZones) {
    return <PageLoader />
  } else {
    return (
      <section style={{ height: '100vh' }} className="section">
        <div className="container">
          <div className="tile is-ancestor">
            {/* {zones.map(zone => {
              return <Card key={zone.id} title={zone.location.name} />
            })} */}
            {zones.map(zone => {
              return <Card key={zone.id} title={shuffle(zone.location.name)} />
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default CardList
