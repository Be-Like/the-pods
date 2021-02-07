<template>
  <div>
    <h2 class="publisher">{{ podcast.publisher }}</h2>
    <h1 class="title"> {{ podcast.title }}</h1>
    <div class="buttons">
      <div class="btn btn-primary play">
        <img class="btn-icon" src="../../assets/icons/play_arrow.svg">
        Play Latest Episode
      </div>
      <div class="btn btn-secondary">Subscribe</div>
    </div>
    <EpisodesList />
  </div>
</template>

<script>
import EpisodesList from './EpisodesList.vue'

import { mapGetters } from 'vuex'

export default {
  components: { EpisodesList },
  computed: {
    ...mapGetters('podcasts', ['podcast']),
  }
}
</script>

<style lang="scss" scoped>
.publisher {
  font-family: 'Karla', Arial, Helvetica, sans-serif;
  font-size: 25px;
  font-weight: 700;
  margin: 0;
}

.title {
  font-family: 'Karla', Arial, Helvetica, sans-serif;
  font-size: 95px;
  font-weight: 700;
  margin: 0 0 35px;
}

.buttons {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 60px;
}

.play {
  margin-right: 20px;
}
</style>
