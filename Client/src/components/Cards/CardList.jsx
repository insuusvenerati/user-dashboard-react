/* eslint-disable space-before-function-paren */
import React, { useEffect } from 'react'
import Card from './Card'
import ErrorBoundary from 'react-error-boundary'
import ReactLoading from 'react-loading'
import { useStoreState, useStoreActions } from 'easy-peasy'
import _ from 'lodash'

const CardList = () => {
  const isDark = useStoreState(state => state.theme.isDark)
  const zones = useStoreState(state => state.zones.zoneList)
  const getZones = useStoreActions(actions => actions.zones.getZones)
  const loadingZones = useStoreState(state => state.zones.loadingZones)
  const fourZones = _.chunk(zones, 4)
  const randomZones = fourZones[Math.floor(Math.random() * fourZones.length)]

  // useEffect(() => {
  //   if (zones.length < 1) {
  //     getZones()
  //   }
  // }, [])

  if (loadingZones) {
    return (
      <section className="section">
        <div className="columns">
          <div className="column is-three-fifths is-offset-two-fifths">
            <ReactLoading
              color={isDark ? '#ffffff' : '#292930'}
              type={'bars'}
              height={100}
              width={100}
            />
          </div>
        </div>
      </section>
    )
  } else if (zones.length < 1) {
    return (
      <section className="section">
        <div className="columns">
          <div className="column is-three-fifths is-offset-two-fifths">
            <ReactLoading type={'bars'} height={100} width={100} />
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <ErrorBoundary>
        <section style={{ height: '100vh' }} className="section">
          <div className="container">
            <div className="tile is-ancestor">
              {randomZones.map(zone => {
                return <Card key={zone.id} title={zone.location.name} />
              })}
            </div>
          </div>
        </section>
      </ErrorBoundary>
    )
  }
}

export default CardList
