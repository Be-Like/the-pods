<template>
  <div :style="{width: '100%' }" ref="pb" >
    <div v-if="displayProgress">
      <div
        v-for="(i, index) in soundBars"
        :key="index"
        class="sound-bar"
        :style="(interval * progress) > index ? { backgroundColor: '#000'} : ''"
      ></div>
      <div class="progress-bar">
        <div
          class="filled-bar"
          :style="{ transform: `translate3d(-${(1 - progress) * 100}%, 0, 0)` }"
        ></div>
        <!-- <span class="text">
          Progress:
        </span> -->
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    duration: {
      type: Number,
      required: true
      // default: 0.25
    },
    isPlaying: {
      type: Boolean,
      default: false
    },
  },

  data() {
    return {
      progress: 0.0,
      interval: undefined,
    }
  },

  watch: {
    isPlaying() {
      if (this.isPlaying) {
        this.interval = setInterval(this.increaseTime, 1000)
        } else {
          clearInterval(this.interval)
      }
    }
  },

  computed: {
    displayProgress() {
      return this.isPlaying || (this.progress != 0.0)
    },
    soundBars() {
      if (!this.isPlaying) return
      console.log('return;', this.$refs.pb.clientWidth / 4)
      return Math.floor(this.$refs.pb.clientWidth / 4)
    }
  },

  methods: {
    increaseTime() {
      console.log('Modulo:', (this.interval * this.progress))
      this.progress += 1 / (this.duration * 60)
    }
  }
}
</script>

<style lang="scss" scoped>
.sound-bar {
  background-color: #f0f0f0;
  display: inline-block;
  margin-right: 2px;
  height: 40px;
  margin-bottom: -3px;
  width: 2px;
}

.card {
  border-radius: 3px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  font-size: 18px;
  color: #444;
  width: 300px;
  margin: 10px auto;
  height: 150px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.text-section {
  height: 100%;
  max-height: 100%;
  padding: 0 10px 10px;
  overflow: scroll;
  // -webkit-overflow-scrolling: touch;
}

.progress-bar {
  background-color: #eee;
  height: 3px;
  width: 100%;
  border: 1px solid #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 3px 3px 0 0;
}

.text {
  font-size: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 2;
}

.filled-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: translate3d(-100%, 0, 0);
  background: $primary-color;
  z-index: 2;
}
</style>
