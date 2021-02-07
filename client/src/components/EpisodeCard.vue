<template>
  <div class="container">
    <img class="episode-image" src="../../assets/podcast_default.jpg" >
    <div class="details">
      <!-- Episode number [label] -->
      <div class="episode-info">
        <p class="number">EPS. {{ episode.number }}</p>
        <p class="label">New</p>
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
        <div class="btn btn-primary">
          <img class="btn-icon" src="../../assets/icons/play_arrow.svg">
          Play
        </div>
        <p>{{ formattedDate }} &bull; {{ episode.length }} mins</p>
      </div>
      <!-- TODO: progress bar -->
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    episode: Object,
  },

  computed: {
    formattedDate() {
      return moment(this.episode.date).format('MMM Do, YYYY')
    }
  }
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
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > * {
    margin-right: 15px;
  }
}

.btn {
  padding: 5px 10px;
}
</style>
