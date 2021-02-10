<template>
  <div class="home">
    <router-link
      v-for="pd in podcasts"
      :key="pd.id"
      :to="{ name: 'Podcast', params: { podcastId: pd.id }}"
      class="card"
    >
      <podcast-info :podcastProp="pd" />
    </router-link>
  </div>
</template>

<script>
import PodcastInfo from '../components/PodcastInfo.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',

  components: {PodcastInfo},

  created() {
    this.fetchPodcasts()
  },

  computed: {
    ...mapGetters('podcasts', ['podcasts'])
  },

  methods: {
    ...mapActions('podcasts', ['fetchPodcasts'])
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-gap: 50px;
  grid-template-columns: auto auto auto;
}

.card {
  color: inherit;
  text-align: center;
  text-decoration: none;
}

@media(max-width: 1250px) {
  .home {
    grid-template-columns: auto auto;
  }
}

@media(max-width: 850px) {
  .home {
    grid-template-columns: auto;
  }
}
</style>
