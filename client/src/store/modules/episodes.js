import axios from 'axios'

const namespaced = true

const state = {
  episodes: []
}

const mutations = {
  setEpisodes(state, payload) {
    state.episodes = payload
  }
}

const getters = {
  newestEpisodes: state => state.episodes.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
  oldestEpisodes: state => state.episodes.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
}

const actions = {
  async fetchEpisodes({ commit }, podcastId) {
    let res = await axios.get(`/api/podcasts/${podcastId}/episodes`)
    // TODO: #12- Graceful error handling
    commit('setEpisodes', res.data)
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
