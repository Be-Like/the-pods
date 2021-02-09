<template>
  <div class="ti-btn" ref="tiBtn" v-on:click="animateRipple">
    <img
      v-if="icon != null"
      class="btn-icon"
      :src="require(`../../assets/icons/${icon}`)"
    >
    {{text}}
    <transition-group>
      <span
        class="ripple"
        v-bind:ref="'ripple-' + i"
        v-bind:key="'ripple' + i"
        v-for="(val, i) in ripples"
        v-bind:style="{'top': val.y + 'px', 'left': val.x + 'px'}"
        v-on:animationend="rippleEnd(i)">
      </span>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    icon: String,
  },
	data: function() {
		return {
			ripples: []
		}
	},
	methods: {
		animateRipple: function(e) {
			let el  = this.$refs.tiBtn;
			let pos = el.getBoundingClientRect();

			this.ripples.push({
				x: e.clientX - pos.left,
				y: e.clientY - pos.top,
				show: true
			});
		},
		rippleEnd: function(i) {
			this.ripples[i].show = false;
		}
	},
}
</script>

<style lang="scss" scoped>
$black: #000;
$white: #fff;
$shocking-pink: #ff1ead;

.ti-btn {
	overflow: hidden;
	display: inline-block;
	position: relative;
	user-select: none;
	&:focus {
		box-shadow: 0 0 0 8px rgba($white, 0.5);
	}
}

.ripple {
	background-color: $primary-color;
	width: 1rem;
	height: 1rem;
	position: absolute;
	border-radius: 50%;
	transform: translateX(-100%) translateY(-100%);
	mix-blend-mode: screen;
	animation: ripple .7s ease-out forwards, fade 1s ease-out forwards;
}

@keyframes ripple {
	0%   { transform: translate(-100%, -100%); }
	80%  { transform: translate(-100%, -100%) scale(50); }
	100% { transform: translate(-100%, -100%) scale(50); opacity: 0; }
}

@keyframes fade {
	0%   { opacity: 1; }
	100% { opacity: 0; }
}

</style>
