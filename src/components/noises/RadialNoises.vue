<template>
  <v-hover>
    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 20 : 10}`">
      <v-card-text>
      <v-slider
        v-model="refreshRate"
        min="100"
        max="1000"
        always-dirty
        :label="`Refresh every ${refreshRate} frames`"
        persistent-hint
        thumb-color="error"
        thumb-label="always"
      />

      <v-slider
        v-model="noiseMultX"
        min="10"
        max="100"
        always-dirty
        label="Noise multiplier for X"
        persistent-hint
        thumb-color="error"
        thumb-label="always"
      />

      <v-slider
        v-model="noiseMultY"
        min="10"
        max="100"
        always-dirty
        label="Noise multiplier for Y"
        persistent-hint
        thumb-color="error"
        thumb-label="always"
      />

      <v-slider
        v-model="noiseMultZ"
        min="10"
        max="100"
        always-dirty
        label="Noise multiplier for Z"
        persistent-hint
        thumb-color="error"
        thumb-label="always"
      />

      <vue-p5 @setup="setup" @draw="draw"/>
			</v-card-text>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
import VueP5 from "vue-p5"

@Component({
	name: "RadialNoises",
	components: { VueP5 }
})
export default class RadialNoises extends Vue {
	refreshRate = 550
	noiseMultX = 55
	noiseMultY = 55
	noiseMultZ = 55

	setup(sketch: any) {
		sketch.createCanvas(400, 400)
		sketch.background(255)
		sketch.stroke(0, 15)
		sketch.noFill()
		sketch.frameRate(24)
	}

	draw(sketch: any) {
		const now = new Date().getTime()
		let t = 0

		sketch.translate(sketch.width / 2, sketch.height / 2)
		sketch.beginShape()
		for (let i = 0; i < 200; i++) {
			const ang = sketch.map(i, 0, 200, 0, sketch.TWO_PI)
			const rad = 200 * sketch.noise((this.noiseMultX * i) / 1000, (this.noiseMultY * t) / 10000, (this.noiseMultZ * now) / 100000)
			const x = rad * sketch.cos(ang)
			const y = rad * sketch.sin(ang)
			sketch.curveVertex(x, y)
		}
		sketch.endShape(sketch.CLOSE)

		t += 1

		if (sketch.frameCount % this.refreshRate === 0) {
			sketch.background(255)
		}
	}
}
</script>
