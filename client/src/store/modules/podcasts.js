import axios from 'axios'

const namespaced = true

const state = {
  podcast: {},
  loadError: false
}

const mutations = {
  setPodcast(state, payload) {
    state.podcast = payload
  },
  setLoadError(state, isError) {
    state.loadError = isError
  }
}

const getters = {
  podcast: state => state.podcast,
  loadError: state => state.loadError
}

const actions = {
  async fetchPodcast({ commit }, podcastId) {
    commit('setLoadError', false)
    try {
      let res = await axios.get(`/api/podcasts/${podcastId}`)
      commit('setPodcast', res.data)
    } catch (error) {
      commit('setLoadError', true)
    }
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
