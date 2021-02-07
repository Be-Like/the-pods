import Vue from 'vue'
import Vuex from 'vuex'

import podcasts from './modules/podcasts'
import episodes from './modules/episodes'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    podcasts,
    episodes
  }
})
