const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Titillium Web"', 'sans-serif'],
			},
			colors: {
				primary: {
					lighter: '#4c956c',
					DEFAULT: '#2c6e49',
					//lighter: '#a3b18a',
					//DEFAULT: '#588157',
				},
				secondary: {
					DEFAULT: '#dad7cd',
					//DEFAULT: '#dad7cd',
				},
				white: '#ffffff',
				gray: colors.gray,
				black: '#141115',
			},
			width: theme => ({
				"28": "7rem",
				"72": "18rem",
				"80": "20rem",
				"88": "22rem",
				"96": "24rem",
				"120": "32rem",
				"200": "52rem",
			}),
			height: theme => ({
				"28": "7rem",
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
				padding: {
					DEFAULT: '1rem',
					sm: '1.25rem',
					md: '2rem',
					lg: '3rem',
					xl: '4rem',
					'2xl': '5rem',
				},
			}),
		},
		container: {
			screens: {
				DEFAULT: '100%',
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1400px",
			}
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
