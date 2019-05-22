<template>
  <h1 class="display-4">
    <span class="glitch" data-text="いらっしゃいませ!">いらっしゃいませ!</span>
  </h1>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

@Component
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.glitch {
	position: relative;
	width: 400px;
	margin: 0 auto;
}

@keyframes noise-anim {
	$steps: 20;
	@for $i from 0 through $steps {
		#{percentage($i*(1/$steps))} {
			clip: rect(random(100) + px, 9999px, random(100) + px, 0);
		}
	}
}
.glitch:after {
	content: attr(data-text);
	position: absolute;
	left: 2px;
	text-shadow: -2px 0 var(--v-error-base);
	top: 0;
	color: white;
	overflow: hidden;
	clip: rect(0, 900px, 0, 0);
	animation: noise-anim 2s infinite linear alternate-reverse;
}

@keyframes noise-anim-2 {
	$steps: 20;
	@for $i from 0 through $steps {
		#{percentage($i*(1/$steps))} {
			clip: rect(random(100) + px, 9999px, random(100) + px, 0);
		}
	}
}
.glitch:before {
	content: attr(data-text);
	position: absolute;
	left: -2px;
	text-shadow: 2px 0 var(--v-info-base);
	top: 0;
	color: white;
	overflow: hidden;
	clip: rect(0, 900px, 0, 0);
	animation: noise-anim-2 3s infinite linear alternate-reverse;
}
</style>
