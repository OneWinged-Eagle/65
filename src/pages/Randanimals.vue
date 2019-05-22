<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex v-for="(animal, i) in animals" :key="animal + i" xs12 md6 lg4 xl3 d-flex>
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            flat
            tile
            class="d-flex"
            :class="`elevation-${hover ? 20 : 10}`"
          >
            <v-img :src="animal" aspect-ratio="1" class="grey lighten-2">
              <template #placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"/>
                </v-layout>
              </template>
            </v-img>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
import axios from "axios"

import { getExtension } from "@/utils/getExtension"

@Component({
	name: "Randanimals"
})
export default class Randanimals extends Vue {
	animals: string[] = []

	created() {
		this.moar(12)
		window.addEventListener("scroll", this.handleScroll)
	}

	destroyed() {
		window.removeEventListener("scroll", this.handleScroll)
	}

	moar(nb: number) {
		for (let i = 0; i < nb; ++i) {
			switch (Math.floor(Math.random() * 3)) {
				case 0:
					this.getCat()
					break
				case 1:
					this.getDog()
					break
				case 2:
					this.getFox()
					break
			}
		}
	}

	handleScroll() {
		const isBottom = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight

		if (isBottom) {
			this.moar(4)
		}
	}

	getCat() {
		axios
			.get("https://aws.random.cat/meow")
			.then((response) => {
				this.animals.push(response.data.file)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	getDog() {
		axios
			.get("https://random.dog/woof.json")
			.then((response) => {
				const url = response.data.url
				const ext = getExtension(url)
				if (ext !== "mp4" && ext !== "webm") {
					this.animals.push(url)
				} else {
					this.moar(1)
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}

	getFox() {
		setTimeout(() => {
			this.animals.push(`https://randomfox.ca/images/${Math.floor(Math.random() * 122) + 1}.jpg`)
		}, 250)
	}
}
</script>
