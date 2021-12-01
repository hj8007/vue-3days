import { createStore } from 'vuex'

import persistedstate from 'vuex-persistedstate'

const store = createStore({
  state() {
    return {
      user: {}
    }
  },
  mutations: {
    user(state, data) {
      state.user = data
    }
  },
  getters: {
    isLogin(state) {
      if (state.user.userId) {
        return true
      } else {
        return false
      }
    }
  },
  plugins: [
    persistedstate({
      paths: ['user']
    })
  ]
})

export default store
