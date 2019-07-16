import { createStore, action, thunk } from 'easy-peasy'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const model = {
  theme: {
    isDark: false,
    setDark: action(state => {
      state.isDark = !state.isDark
    })
  },
  zones: {
    loadingZones: false,
    setLoading: action((state, payload) => {
      try {
        state.loadingZones = payload
      } catch (error) {
        console.log(error)
      }
    }),
    zoneList: [],
    addZones: action((state, payload) => {
      state.zoneList.push(...payload)
    }),
    getZones: thunk(async (actions, payload) => {
      actions.setLoading(true)
      const res = await fetch('/ZoneList.json')
      payload = await res.json()
      actions.addZones(payload)
      actions.setLoading(false)
    })
  }
}

const store = createStore(model, {
  reducerEnhancer: reducer =>
    persistReducer(
      {
        key: 'easypeasystate',
        storage,
        blacklist: ['zones']
      },
      reducer
    )
})

export default store
