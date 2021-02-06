<template>
  <div class="podcast">
    <h2>Podcast</h2> <!-- Breadcrumbs will go here -->
    <div class="podcast-container">
      <PodcastInfo class="left-container" />
      <div class="right-container"> <!-- replace with podcast and episode details -->
        <h3>Hello</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import PodcastInfo from '@/components/PodcastInfo'
export default {
  name: 'Podcast',
  components: {
    PodcastInfo
  },

  created() {
    this.fetchPodcast()
  },

  methods: {
    async fetchPodcast() {
      let res = await axios.get(`/api/podcasts/${this.$route.params.podcastId}`)
      console.log('Res', res.data)
    }
  }
}
</script>

<style lang="scss" scoped>
.podcast-container {
  display: flex;
}

.left-container {
  width: 25%;
}

.right-container {
  width: 75%;
}
</style>
