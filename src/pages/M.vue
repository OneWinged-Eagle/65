<template>
  <v-container grid-list-xl>
    <v-layout align-center justify-center wrap>
      <v-flex xs12 sm6 md4 xl3>
        <v-hover>
          <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 20 : 10}`">
            <v-card-title primary-title class="headline primary">Add domain name</v-card-title>

            <v-card-text>
              <v-text-field v-model="domain" clearable label="domain name" single-line solo/>
            </v-card-text>

            <v-card-actions>
              <v-spacer/>
              <v-btn color="info" flat icon large @click="addSite">
                <v-icon x-large>add</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-flex>

      <v-flex xs12 sm6 md4 xl3 v-for="site in sites" :key="site.domain">
        <v-hover>
          <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 20 : 10}`">
            <v-progress-linear v-show="site.loading" indeterminate/>

            <v-responsive v-if="site.reached">
              <v-img :src="`http://${site.domain}/favicon.ico`" aspect-ratio="2"/>
            </v-responsive>

            <v-card-title primary-title class="headline text-uppercase">{{ site.domain }}</v-card-title>

            <v-card-text>
              <span v-if="site.loading" class="accent--text">Pinging...</span>

              <span v-else-if="site.reached" class="success--text">Reached in {{ site.pong }}ms.</span>

              <span v-else class="error--text">Unreachable.</span>
            </v-card-text>

            <v-card-actions>
              <v-spacer/>

              <v-btn color="error" flat icon @click="deleteSite(site.domain)">
                <v-icon>delete</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

import { extractRootDomain } from "@/utils/extractRootDomain"
import { ping } from "@/utils/ping"
import { Storage } from "@/utils/Storage"

interface Site {
	readonly domain: string
	reached?: boolean
	pong?: number
	loading?: boolean
}

@Component
export default class M extends Vue {
	domain = ""
	sites: Site[] = []

	created() {
		const domains: string[] = Storage.get(`${this.$route.fullPath}/domains`) || []

		for (const domain of domains) {
			const site: Site = { domain }
			this.ping(site)
			this.sites.push(site)
		}
	}

	ping(site: Site) {
		site.loading = true
		ping(`http://${site.domain}`, (success, pong) => {
			site.reached = success
			site.pong = pong
			site.loading = false
		})
	}

	addSite() {
		const domain = extractRootDomain(this.domain)
		this.domain = ""

		if (this.sites.findIndex((s) => s.domain === domain) === -1) {
			const site: Site = { domain }
			this.ping(site)
			this.sites.unshift(site)

			Storage.set(`${this.$route.fullPath}/domains`, this.sites.map((s) => s.domain))
		}
	}

	deleteSite(domain: string) {
		this.sites.splice(this.sites.findIndex((s) => s.domain === domain), 1)

		Storage.set(`${this.$route.fullPath}/domains`, this.sites.map((s) => s.domain))
	}
}
</script>
