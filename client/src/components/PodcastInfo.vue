<template>
  <div>
    <img class="image" :src="podImage" alt="Podcast Image">
    <div class="description">
      {{ podcast.description }}
    </div>
    <div class="host">
      <p class="host-label">Hosted by</p>
      <p class="name">{{ podcast.host }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {},

  computed: {
    ...mapGetters('podcasts', ['podcast']),
    podImage() {
      const img = this.podcast.image
      return img == null || img == '' ? require('../../assets/podcast_default.jpg') : img
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  height: 400px;
  object-fit: cover;
  max-width: 100%;
  margin-bottom: 30px;
}

.description,
.host {
  line-height: 1.5;
  margin-bottom: 30px;
  text-align: left;
  white-space: pre-line;
}

.host-label {
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 0;
}

.name {
  font-family: 'Karla', Arial, Helvetica, sans-serif;
  font-size: 25px;
  font-weight: 700;
  margin: 0;
}
</style>
