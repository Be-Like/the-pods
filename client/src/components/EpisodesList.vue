<template>
  <div>
    <div class="table-header divider">
      <div class="episodes-info">
        <p class="title">Episodes</p>
        <p class="subtitle">{{ getSubtitle }}</p>
      </div>
      <p @click="oldestFirst = !oldestFirst" class="sort-episodes">
        Sort by Release Date
        <img
          class="chevron"
          :src="oldestFirst ? require('../../assets/icons/expand_less.svg') : require('../../assets/icons/expand_more.svg')"
        >
      </p>
    </div>
    <div
      v-if="loadError"
      @click="refresh"
      class="load-error"
    >
      <p>
        <img class="btn-icon" src="../../assets/icons/reload.svg" alt="Reload">
        Retry loading episodes
      </p>
    </div>
    <div
      v-for="(episode, index) in sortedEvents"
      :key="episode.id"
    >
      <EpisodeCard :episode="episode" :isNew="oldestFirst ? index == sortedEvents.length - 1 : index == 0" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EpisodeCard from './EpisodeCard.vue'
export default {
  components: { EpisodeCard },
  data() {
    return {
      oldestFirst: false,
    }
  },

  computed: {
    ...mapGetters('episodes', ['oldestEpisodes', 'newestEpisodes', 'loadError']),
    sortedEvents() {
      return this.oldestFirst ? this.oldestEpisodes : this.newestEpisodes
    },
    getSubtitle() {
      const count = this.oldestEpisodes.length
      return count == 1 ? `${count} episode` : `${count} episodes`
    }
  },

  methods: {
    ...mapActions('episodes', ['fetchEpisodes']),
    refresh() {
      this.fetchEpisodes(this.$route.params.podcastId)
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}

.table-header,
.episodes-info {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.table-header {
  padding: 15px 0;
}

.title,
.sort-episodes {
  font-family: 'Karla', Arial, Helvetica, sans-serif;
  font-weight: 700;
  letter-spacing: -1px;
}

.title {
  font-size: 25px;
  margin-right: 15px;
}

.subtitle {
  font-weight: 200;

}

.sort-episodes:hover {
  cursor: pointer;
}

.chevron {
  vertical-align: middle;
}

.load-error {
  align-items: center;
  color: $primary-color;
  margin: 20px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
}
</style>
