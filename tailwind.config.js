const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
				'serif': ['"Halant"', ...defaultTheme.fontFamily.serif],
			},
			colors: {
				primary: {
					DEFAULT: '#F19953',
					darker: '#C47335'
				},
				secondary: {
					DEFAULT: '#2660A4',
				},
				white: '#FFF7F2',
				gray: colors.gray,
				black: '#1C1C1C',
			},
			width: theme => ({
				"72": "18rem",
				"80": "20rem",
				"88": "22rem",
				"96": "24rem",
				"120": "32rem",
				"200": "52rem",
			}),
			height: theme => ({
				"72": "18rem",
				"80": "20rem",
				"88": "22rem",
				"96": "24rem",
				"104": "26rem",
				"112": "28rem",
				"120": "32rem",
				"136": "36rem",
				"152": "40rem",
				"168": "44rem",
				"184": "48rem",
				"200": "52rem",
			}),
			container: (theme) => ({
				center: true,
				padding: theme("spacing.4"),
			}),
		}
	},
	variants: {
		borderWidth: ['responsive', 'hover', 'focus', 'group-hover'],
		textColor: ['responsive', 'hover', 'focus', 'group-hover'],
		transform: ['responsive', 'hover', 'focus', 'group-hover'],
		translate: ['responsive', 'hover', 'focus', 'group-hover'],
		gradientColorStops: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
		backgroundOpacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
		opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
		margin: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
		transitionProperty: ['responsive', 'hover', 'focus','active'],
		outline: ['responsive', 'hover', 'focus','active'],
		borderOpacity: ['responsive', 'hover', 'focus','active'],
		scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
	},
	plugins:[
		// https://github.com/iunteq/tailwindcss-textshadow
		require('tailwindcss-textshadow'),
	],
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'components/**/*.vue',
			'layouts/**/*.vue',
			'pages/**/*.vue',
			'plugins/**/*.js',
			'nuxt.config.js',
			// TypeScript
			'plugins/**/*.ts',
			'nuxt.config.ts'
		]
	}
}
