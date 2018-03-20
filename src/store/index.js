import Vue from 'vue'
import Vuex from 'vuex'
import MathStore from './modules/math'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    math: MathStore
  },
  state () {
    return {

    }
  }
})
