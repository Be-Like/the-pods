<template>
  <div class="podcast">
    <Breadcrumbs class="breadcrumbs" />
    <PageLoadError v-if="loadError" />
    <div v-else class="podcast-container">
      <PodcastInfo class="left-container" />
      <PodcastDetails class="right-container" />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs'
import PageLoadError from '@/components/PageLoadError'
import PodcastInfo from '@/components/PodcastInfo'
import PodcastDetails from '@/components/PodcastDetails'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Podcast',
  components: {
    Breadcrumbs,
    PageLoadError,
    PodcastInfo,
    PodcastDetails
  },

  created() {
    this.fetchPodcast(this.$route.params.podcastId).then(
      () => {
        const crumb = this.$route.meta.breadcrumb
        if (crumb[crumb.length - 1].isPodcastId) crumb.pop()
        crumb.push({name: this.getPodcast.title, isPodcastId: true})
      }
    )
    this.fetchEpisodes(this.$route.params.podcastId)
  },

  computed: {
    ...mapGetters('podcasts', ['loadError', 'getPodcast'])
  },

  methods: {
    ...mapActions('podcasts', ['fetchPodcast']),
    ...mapActions('episodes', ['fetchEpisodes']),
  }
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  margin-bottom: 40px;
}

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
