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
		title: 'tjacob.dev - Frontend Engineer',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content: 'Tomás Jacob - Frontend Engineer Portfolium',
			},
			{
				hid: 'og:description',
				property: 'og:description',
				content: 'Tomás Jacob - Frontend Engineer Portfolium',
			},
			{ hid:'msapplication', name: 'msapplication-TileColor', content: '#ffffff' },
			{ hid:'them-color', name: 'theme-color', content: '#ffffff' },
			{ hid: 'og:title', property: 'og:title', content: 'tjacob.dev - Frontend Engineer' },
			{ hid: 'twitter:title', property: 'twitter:title', content: 'tjacob.dev - Frontend Engineer' },
			{ hid: 'og:image', property: 'og:image', content: '/thumb.webp' },
			{ hid: 'twitter:image', property: 'twitter:image', content: '/thumb.webp' },
			{ hid: 'og:url', property: 'og:url', content: process.env.BASE_URL },
			{ hid:'twitter:site', name: 'twitter:site', content: process.env.BASE_URL },
			{ hid: 'og:type', property: 'og:type', content: 'website' },
		],
		link: [
			{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
			{ rel: 'icon', type:'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
			{ rel: 'icon', type:'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
			{ rel: 'manifest', href: '/site.webmanifest' },
			{ rel: 'mask-icon', href: '/safari-pinned-tab.svg', color:"#5bbad5" },
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '@/plugins/analytics.js', mode: 'client' },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Env Variables
	publicRuntimeConfig: {
		baseURL: process.env.BASE_URL,
		gaId: process.env.GA_ID,
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
		// https://sitemap.nuxtjs.org/
		'@nuxtjs/sitemap',
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
			'Titillium Web':[400, 600],
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

	},

	// https://sitemap.nuxtjs.org/guide/configuration
	sitemap: {
		hostname: process.env.BASE_URL,
	},
}
