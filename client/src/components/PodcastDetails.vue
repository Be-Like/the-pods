<template>
  <div>
    <h2 class="publisher">{{ podcast.publisher }}</h2>
    <h1 class="title"> {{ podcast.title }}</h1>
    <div class="buttons">
      <div class="play">
        <img class="play-icon" src="../../assets/icons/play_arrow.svg">
        Play Latest Episode
      </div>
      <div class="subscribe">Subscribe</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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
  margin-left: 8px;
}

.play,
.subscribe {
  border: 2px solid #000;
  padding: 10px 20px;

  &:hover {
    border-color: $primary-color;
    cursor: pointer;
  }
}

.play {
  background-color: #000;
  color: #fff;
  margin-right: 20px;

  &:hover {
    background-color: $primary-color;
  }
}

.play-icon {
  vertical-align: middle;
}

.subscribe:hover {
  color: $primary-color;
}
</style>
