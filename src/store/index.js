import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import budget from './modules/budget'
import stocks from './modules/stocks'
import portfolio from './modules/portfolio'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    budget,
    stocks,
    portfolio
  }
})
