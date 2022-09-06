import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    counter(state) {
      return state.counter;
    },
    finalCounter(state) {
      return state.counter * 2;
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value
    }
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    },
    increase(context, payload) {
      console.log(payload)
      context.commit('increase', payload)
    }
  },
  modules: {
  }
})
