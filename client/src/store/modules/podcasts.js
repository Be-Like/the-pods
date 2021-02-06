import axios from 'axios'

const namespaced = true

const state = {
  podcast: {}
}

const mutations = {
  setPodcast(state, payload) {
    state.podcast = payload
  }
}

const getters = {
  podcast: state => state.podcast
}

const actions = {
  async fetchPodcast({ commit }, podcastId) {
    let res = await axios.get(`/api/podcasts/${podcastId}`)
    // TODO: #12- Graceful error handling
    console.log('Response:', res)
    commit('setPodcast', res.data)
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
