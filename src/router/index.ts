import Vue from "vue"
import Router from "vue-router"

import { lazyLoading } from "./lazyLoading"

Vue.use(Router)

export const router = new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "Home",
			component: lazyLoading("Home")
		},
		{
			path: "/M",
			name: "M",
			component: lazyLoading("M")
		},
		{
			path: "/randanimals",
			name: "Randanimals",
			component: lazyLoading("Randanimals")
		},
		{
			path: "/noisy",
			name: "Noisy",
			component: lazyLoading("Noisy")
		}
	]
})
