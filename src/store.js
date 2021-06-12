import Vue from 'vue'
import Vuex from 'vuex'
import counter from './store/modules/counter'
import doubleCounter from './store/modules/doubleCounter'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    counter,
    doubleCounter
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
