<template>
  <div class="podcast">
    <!-- Breadcrumbs will go here -->
    <div class="podcast-container">
      <PodcastInfo class="left-container" />
      <div class="right-container"> <!-- replace with podcast and episode details -->
        <h3>Hello</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import PodcastInfo from '@/components/PodcastInfo'
export default {
  name: 'Podcast',
  components: {
    PodcastInfo
  },

  created() {
    this.fetchPodcast(this.$route.params.podcastId)
  },

  methods: {
    ...mapActions('podcasts', ['fetchPodcast']),
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
