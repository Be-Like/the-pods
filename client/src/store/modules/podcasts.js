import axios from 'axios'

const namespaced = true

const state = {
  podcasts: [],
  podcast: {},
  loadError: false
}

const mutations = {
  setPodcasts(state, payload) {
    state.podcasts = payload
  },
  setPodcast(state, payload) {
    state.podcast = payload
  },
  setLoadError(state, isError) {
    state.loadError = isError
  }
}

const getters = {
  podcasts: state => state.podcasts,
  getPodcast: state => state.podcast,
  loadError: state => state.loadError
}

const actions = {
  async fetchPodcasts({ commit }) {
    commit('setLoadError', false)
    try {
      let res = await axios.get(`/api/podcasts`)
      commit('setPodcasts', res.data)
    } catch (error) {
      commit('setLoadError', true)
    }
  },
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
