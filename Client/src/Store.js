import { createStore, action } from 'easy-peasy'

const store = createStore({
  theme: {
    isDark: false,
    setDark: action(state => {
      state.isDark = !state.isDark
    })
  }
})

export default store
