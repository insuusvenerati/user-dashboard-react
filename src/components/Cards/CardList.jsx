/* eslint-disable space-before-function-paren */
import React, { useEffect } from 'react'
import Card from './Card'
import classNames from 'classnames'
import ReactLoading from 'react-loading'
import { useStoreState, useStoreActions } from 'easy-peasy'
import _ from 'lodash'

function randomFourArray(arr) {
  const fourZones = _.chunk(arr, 4)
  const randomFourZones =
    fourZones[Math.floor(Math.random() * fourZones.length)]
  return randomFourZones
}

const columnStyle = classNames('column is-three-fifths is-offset-two-fifths')

const CardList = () => {
  const zones = useStoreState(state => state.zones.zoneList)
  const getZones = useStoreActions(actions => actions.zones.getZones)
  const loadingZones = useStoreState(state => state.zones.loadingZones)

  const randomZones = randomFourArray(zones)

  useEffect(() => {
    if (zones.length < 1) {
      getZones()
    }
  })

  if (loadingZones) {
    return (
      <section className="section">
        <div className="columns">
          <div className={columnStyle}>
            <ReactLoading type={'bars'} height={100} width={100} />
          </div>
        </div>
      </section>
    )
  } else if (zones.length < 1) {
    return (
      <section className="section">
        <div className="columns">
          <h1 className="title">
            Select <strong>Get Zones</strong> to get Started
          </h1>
          <div className={columnStyle}>
            <ReactLoading type={'bars'} height={100} width={100} />
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section style={{ height: '100vh' }} className="section">
        <div className="container">
          <div className="tile is-ancestor">
            {randomZones.map(zone => {
              return <Card key={zone.ID} title={zone.Name_lang} />
            })}
          </div>
        </div>
      </section>
    )
  }
}
CardList.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: 'EnhancedMenu'
}
export default CardList
