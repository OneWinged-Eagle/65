<template>
  <v-footer app height="auto" inset>
    <v-layout align-center justify-space-around>
      <v-hover v-for="colour in colours" :key="colour">
        <v-icon slot-scope="{ hover }" :color="colour" :large="hover">favorite</v-icon>
      </v-hover>
    </v-layout>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
import { Watch } from "vue-property-decorator"

import { shuffle } from "@/utils/shuffle"

@Component
export default class Footer extends Vue {
	colours = ["error", "primary", "secondary", "info", "success", "accent", "warning"]

	@Watch("$route")
	routeWatcher() {
		this.colours = shuffle(this.colours)
		this.$forceUpdate() // TODO: why?
	}
}
</script>
