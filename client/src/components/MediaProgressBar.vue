<template>
  <div v-if="displayProgress">
    <div class="progress-bar">
      <div
        class="filled-bar"
        :style="{ transform: `translate3d(-${(1 - progress) * 100}%, 0, 0)` }"
      ></div>
    </div>
    <div class="progress-times">
      <span>{{ endTime(secondsElapsed) }}</span>
      <span>{{ endTime(duration) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    duration: {
      type: Number,
      required: true
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
      secondsElapsed: 0
    }
  },

  watch: {
    isPlaying() {
      if (this.isPlaying && this.secondsElapsed < this.duration - 1) {
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
  },

  methods: {
    increaseTime() {
      if (this.secondsElapsed >= this.duration - 1) clearInterval(this.interval)
      this.secondsElapsed += 1
      this.progress += 1 / (this.duration)
    },

    endTime(seconds) {
      const min = Math.floor(seconds / 60)
      const tmpSec = seconds % 60
      const sec = tmpSec <= 9 ? `0${tmpSec}` : tmpSec
      return `${min}:${sec}`
    }
  }
}
</script>

<style lang="scss" scoped>
.progress-bar {
  align-items: center;
  background-color: #eee;
  border: 1px solid #f0f0f0;
  display: flex;
  height: 3px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.filled-bar {
  background: #000;
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  transform: translate3d(-100%, 0, 0);
  width: 100%;
  z-index: 2;
}

.progress-times {
  display: flex;
  font-size: 14px;
  font-weight: 100;
  justify-content: space-between;
  margin-top: 5px;
}
</style>
