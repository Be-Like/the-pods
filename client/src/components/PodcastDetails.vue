<template>
  <div>
    <h2 class="publisher">{{ podcast.publisher }}</h2>
    <h1 class="title"> {{ podcast.title }}</h1>
    <div class="buttons">
        <RippleButton
          class="btn btn-primary play"
          text="Play Latest Episode"
          icon="play_arrow.svg"
        />
        <RippleButton
          class="btn btn-secondary"
          text="Subscribe"
        />
    </div>
    <EpisodesList />
  </div>
</template>

<script>
import EpisodesList from './EpisodesList.vue'

import { mapGetters } from 'vuex'
import RippleButton from './RippleButton.vue'

export default {
  components: { EpisodesList, RippleButton },
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
