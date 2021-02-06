<template>
  <div>
    <!-- <div class="image"></div> replace with image from db -->
    <img class="image" :src="podImage" alt="Podcast Image">
    <div class="description">
      {{ podcast.description }}
    </div>
    <div class="host">
      <p>Hosted by</p>
      <p>{{ podcast.host }}</p>
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
      console.log('img:', this.podcast.image)
      const img = this.podcast.image
      return img == null || img == '' ? require('../../assets/podcast_default.jpg') : img
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  height: 250px;
  object-fit: cover;
  max-width: 100%;
  margin-bottom: 30px;
}

.description,
.host {
  text-align: left;
  margin-bottom: 30px;
  white-space: pre-line;
}
</style>
