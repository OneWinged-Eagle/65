<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout wrap>
      <v-flex xs12 sm6>
        <colours-noises/>
      </v-flex>

      <v-flex xs12 sm6>
        <radial-noises/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

import ColoursNoises from "@/components/noises/ColoursNoises.vue"
import RadialNoises from "@/components/noises/RadialNoises.vue"

@Component({
	name: "Noisy",
	components: { ColoursNoises, RadialNoises }
})
export default class Noisy extends Vue {}
</script>
