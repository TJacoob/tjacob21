const fontawesome = require('./configs/fontawesome');

export default {
	server: {
		port: process.env.PORT, // default: 3000
		host: process.env.HOST // default: localhost
	},

	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'tjacob21',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Env Variables
	publicRuntimeConfig: {
		baseURL: process.env.BASE_URL,
	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		// https://github.com/nuxt/postcss8
		'@nuxt/postcss8',
		// https://www.npmjs.com/package/@nuxtjs/fontawesome
		'@nuxtjs/fontawesome',
		// https://github.com/nuxt-community/google-fonts-module
		"@nuxtjs/google-fonts",
		// https://image.nuxtjs.org/
		'@nuxt/image',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/content
		'@nuxt/content',
	],

	// https://tailwindcss.nuxtjs.org/
	tailwindcss: {
		//jit: true,
		cssPath: '~/assets/scss/tailwind.scss',
		//configPath: 'tailwind.config.js',
		exposeConfig: false,
		config: {}
	},

	// https://google-fonts.nuxtjs.org/
	googleFonts: {
		families: {
			'Halant':[600],
			'Nunito Sans':[400],
		},
		display: 'swap',
		prefetch: true,
		preconnect: true,
		preload:true,
	},

	// https://www.npmjs.com/package/@nuxtjs/fontawesome
	fontawesome: fontawesome,

	// https://image.nuxtjs.org/api/options
	image: {
		// Options
	},

	// Content module configuration: https://go.nuxtjs.dev/config-content
	content: {},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
