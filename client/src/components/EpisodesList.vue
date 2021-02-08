<template>
  <div>
    <div class="table-header">
      <div class="episodes-info">
        <p class="title">Episodes</p>
        <p class="subtitle">11 episodes</p>
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
      v-for="(episode, index) in sortedEvents"
      :key="episode.id"
    >
      <EpisodeCard :episode="episode" :isNew="oldestFirst ? index == sortedEvents.length - 1 : index == 0" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EpisodeCard from './EpisodeCard.vue'
export default {
  components: { EpisodeCard },
  data() {
    return {
      oldestFirst: false,
    }
  },

  computed: {
    ...mapGetters('episodes', ['oldestEpisodes', 'newestEpisodes']),
    sortedEvents() {
      return this.oldestFirst ? this.oldestEpisodes : this.newestEpisodes
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
  border-bottom: 1px solid #000;
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
</style>
