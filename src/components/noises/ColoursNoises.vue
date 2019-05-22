<template>
  <v-hover>
    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 20 : 10}`">
      <v-card-text>
        <v-slider
          v-model="rectSize"
          min="10"
          max="30"
          always-dirty
          label="Pixel size"
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

        <v-radio-group v-model="mode" row>
          <v-radio label="HSB" value="HSB"/>
          <v-radio label="lerp (between violet and turquoise)" value="lerp"/>
        </v-radio-group>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
import VueP5 from "vue-p5"

@Component({
	name: "ColoursNoises",
	components: { VueP5 }
})
export default class ColoursNoises extends Vue {
	rectSize = 20
	noiseMultX = 55
	noiseMultY = 55
	noiseMultZ = 55
	mode = "HSB"

	setup(sketch: any) {
		sketch.createCanvas(400, 400)
		sketch.noStroke()
		sketch.frameRate(24)
	}

	draw(sketch: any) {
		sketch.colorMode(sketch.RGB)
		const violet = sketch.color(255, 0, 255)
		const turquoise = sketch.color(0, 255, 255)
		const now = new Date().getTime()

		if (this.mode === "HSB") {
			sketch.colorMode(sketch.HSB)
		}

		for (let x = 0; x < sketch.width; x += this.rectSize) {
			for (let y = 0; y < sketch.height; y += this.rectSize) {
				if (this.mode === "HSB") {
					sketch.fill(360 * sketch.noise((this.noiseMultX * x) / 10000, (this.noiseMultY * y) / 10000, (this.noiseMultZ * now) / 100000), 100, 100)
				} else if (this.mode === "lerp") {
					sketch.fill(sketch.lerpColor(violet, turquoise, sketch.noise((this.noiseMultX * x) / 10000, (this.noiseMultY * y) / 10000, (this.noiseMultZ * now) / 100000)))
				}
				sketch.rect(x, y, this.rectSize, this.rectSize)
			}
		}
	}
}
</script>
