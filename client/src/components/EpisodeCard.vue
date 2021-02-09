<template>
  <div class="container">
    <img class="episode-image" :src="episodeImage" >
    <div class="details">
      <div class="episode-info">
        <p class="number">EPS. {{ episode.number }}</p>
        <p v-if="isNew" class="label">New</p>
      </div>
      <div class="title">
        <p>
          {{ episode.title }}
        </p>
      </div>
      <div class="description">
        <p>{{ episode.description }}</p>
      </div>
      <div class="player-actions">
        <div @click="play = !play">
          <RippleButton
            class="btn btn-primary"
            :text="play ? 'Pause' : 'Play'"
            :icon="play ? 'pause.svg' : 'play_arrow.svg'"
          />
        </div>
        <p>{{ formattedDate }} &bull; {{ episode.length }} mins</p>
      </div>
      <MediaProgressBar :duration="episode.length" :isPlaying="play" />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import RippleButton from './RippleButton.vue'
import MediaProgressBar from './MediaProgressBar.vue'
export default {
  components: { RippleButton, MediaProgressBar },
  props: {
    episode: Object,
    isNew: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {
      play: false
    }
  },

  computed: {
    episodeImage() {
      const img = this.episode.photo
      return img == null ? require('../../assets/podcast_default.jpg') : img
    },

    formattedDate() {
      return moment(this.episode.date).format('MMM Do, YYYY')
    }
  },
}
</script>

<style lang="scss" scoped>
p {
  display: inline-block;
  margin: 0;
}

.container {
  display: flex;
  padding: 15px 0;
}

.episode-image {
  height: 175px;
  object-fit: cover;
  margin-right: 20px;
  width: 175px;
}

.episode-info,
.title,
.description {
  margin-bottom: 10px;
}

.episode-info > * {
  margin-right: 10px;
}

.number {
  font-weight: 300;
}

.label {
  background-color: #000;
  color: #fff;
  padding: 2px 4px;
}

.title {
  font-family: 'Karla', Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 700;
}

.description {
  white-space: pre-line;
}

.player-actions {
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 25px;

  & > * {
    margin-right: 15px;
  }
  .btn {
    padding: 5px 10px;
  }
}

</style>
