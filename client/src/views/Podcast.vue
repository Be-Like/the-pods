<template>
  <div class="podcast">
    <!-- Breadcrumbs will go here -->
    <div class="podcast-container">
      <PodcastInfo class="left-container" />
      <PodcastDetails class="right-container" />
    </div>
  </div>
</template>

<script>
import PodcastInfo from '@/components/PodcastInfo'
import PodcastDetails from '@/components/PodcastDetails'

import { mapActions } from 'vuex'

export default {
  name: 'Podcast',
  components: {
    PodcastInfo,
    PodcastDetails
  },

  created() {
    this.fetchPodcast(this.$route.params.podcastId)
    this.fetchEpisodes(this.$route.params.podcastId)
  },

  methods: {
    ...mapActions('podcasts', ['fetchPodcast']),
    ...mapActions('episodes', ['fetchEpisodes']),
  }
}
</script>

<style lang="scss" scoped>
.podcast-container {
  display: flex;
}

.left-container {
  margin-right: 100px;
  width: 25%;
}

.right-container {
  text-align: left;
  width: 75%;
}
</style>
