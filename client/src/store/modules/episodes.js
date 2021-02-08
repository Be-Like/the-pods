import axios from 'axios'

const namespaced = true

const state = {
  episodes: [],
  loadError: false,
}

const mutations = {
  setEpisodes(state, payload) {
    state.episodes = payload
  },
  setLoadError(state, isError) {
    state.loadError = isError
  }
}

const getters = {
  newestEpisodes: state => state.episodes.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
  oldestEpisodes: state => state.episodes.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)),
  loadError: state => state.loadError
}

const actions = {
  async fetchEpisodes({ commit }, podcastId) {
    commit('setLoadError', false)
    try {
      let res = await axios.get(`/api/podcasts/${podcastId}/episodes`)
      commit('setEpisodes', res.data)
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
