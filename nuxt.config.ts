// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	extends: [
		"@shopware-pwa/composables-next/nuxt-layer",
		"@shopware-pwa/cms-base",
	],

	runtimeConfig: {
		shopware: {
			/**
			 * SSR Shopware Endpoint
			 * More here: https://frontends.shopware.com/getting-started/templates/custom-vue-project.html#shopware-endpoint-on-the-ssr-mode
			 */
			// endpoint: "",
		},
		public: {
			contentful: {
				environment: process.env.CONTENTFUL_ENVIRONMENT!,
				space: process.env.CONTENTFUL_SPACE_ID!,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
			},
		},
	},

	shopware: {
		accessToken: `${process.env.NUXT_PUBLIC_SHOPWARE_ACCESS_TOKEN}`,
		endpoint: `${process.env.NUXT_PUBLIC_SHOPWARE_ENDPOINT}`,
		devStorefrontUrl: "",
	},

	routeRules: {
		"/": {
			isr: 60 * 60 * 24,
		},
		"/checkout": {
			ssr: false,
			headers: {
				"Cache-Control": "no-cache, no-store, must-revalidate",
			},
		},
		"/checkout/**": {
			ssr: false,
		},
		"/login": {
			ssr: false,
		},
		"/register": {
			ssr: false,
		},
		"/reset-password": {
			ssr: false,
		},
		"/wishlist": {
			ssr: false,
		},
		"/account": {
			ssr: false,
		},
		"/account/**": {
			ssr: false,
		},
		"/search": {
			ssr: false,
		},
		"/search/**": {
			ssr: false,
		},
		"/**": {
			isr: 60 * 60 * 24,
		},
	},

	/**
	 * Commented because of the StackBlitz error
	 * Issue: https://github.com/shopware/frontends/issues/88
	 */
	typescript: {
		// typeCheck: true,
		strict: true,
	},

	modules: [
		"@vueuse/nuxt",
		"@shopware-pwa/nuxt3-module",
		"@nuxt/devtools",
		"@nuxtjs/i18n",
		"@nuxt/ui",
	],

	// components: true,
	components: {
		dirs: [
			{
				path: "~/components",
				priority: 2,
			},
		],
		global: true,
	},

	vueuse: {
		ssrHandlers: true,
	},

	nitro: {
		compressPublicAssets: true,
	},

	css: [
		// "@unocss/reset/tailwind-compat.css", // needed to reset styles see https://unocss.dev/guide/style-reset (@unocss/reset)
	],

	router: {
		options: {
			linkActiveClass: "link-active",
			linkExactActiveClass: "link-exact-active text-primary",
		},
	},

	i18n: {
		strategy: "prefix_except_default",
		defaultLocale: "en-GB",
		detectBrowserLanguage: false,
		langDir: "./i18n/src/langs/",
		vueI18n: "./i18n/config",
		locales: [
			{
				code: "en-GB",
				iso: "en-GB",
				file: "en-GB.ts",
			},
			{
				code: "pl-PL",
				iso: "pl-PL",
				file: "pl-PL.ts",
			},
			{
				code: "testde",
				iso: "de-DE",
				file: "de-DE.ts",
				localeId: "c19b753b5f2c4bea8ad15e00027802d4",
			},
		],
	},

	telemetry: false,
	compatibilityDate: "2024-09-12",

	plugins: ["~/plugins/contentful.ts"],

	ui: {
		global: true,
		disableGlobalStyles: true,
	},

	colorMode: {
		preference: "light",
	},
});
