<template>
  <div :class="podcastProp ? 'minimal' : ''">
    <img class="image" :src="podImage" alt="Podcast Image">
    <div class="publisher-title">
      {{ podcast.title }}
    </div>
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
  props: {
    podcastProp: {
      type: Object,
      default: null
    }
  },

  components: {},

  computed: {
    ...mapGetters('podcasts', ['getPodcast']),
    podcast() {
      return this.podcastProp ? this.podcastProp : this.getPodcast
    },
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

.publisher-title {
  display: none;
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
  letter-spacing: -2px;
  margin: 0;
}

.minimal {
  .image {
    height: 200px;
    object-fit: cover;
    max-width: 100%;
    margin-bottom: 30px;
  }

  .publisher-title {
    display: block;
    font-family: 'Karla', Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -2px;
    text-align: left;

    .title {
      font-weight: 600;
    }
  }

  .host-label,
  .name {
    display: none;
  }

  .description {
    height: 45px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;

    /* <integer> values */
    -webkit-line-clamp: 2;
  }
}
</style>
