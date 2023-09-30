const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,mjs,jsx,ts,tsx,svelte}', './public/index.html'],
	safelist: [],
	// whitelistPatterns: [/svelte-/],
	theme: {
		extend: {
			colors: {
				// primary: '#54DEB2;',
				primary: '#06E7ED',
				// 'primary-dark': '#0C151E',
				'primary-dark': '#081B2A',
				'primary-dark-highlight': '#243341',
				// 'primary-light': 'rgba(24, 33, 41, 0.4)',
				'primary-light': '#112D44',
				'modal-overlay': 'rgba(0, 0, 0, 0.6)',
				'input-light': '#243341',
				'bg-secondary': 'rgba(17, 45, 68, 0.50)',
				'secondary-grey': 'rgba(146, 176, 201, 0.20)',
				'light-grey': 'rgba(146, 176, 201, 0.10)'
			},
			fontFamily: {
				barlow: ['"Barlow"', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [
		require('daisyui'),
		require('@tailwindcss/forms')({
			strategy: 'base', // only generate global styles
			strategy: 'class' // only generate classes
		})
	],
	daisyui: {
		themes: [
			{
				neucron: {
					primary: '#07E1E8',
					secondary: '#112D44',
					accent: '#0D121F',
					neutral: '#33444F',
					'base-100': '#F3F5F7'
				}
			}
		]
	}
};
