const IS_DEVELOPMENT = import.meta.env.NODE_ENV === 'development'

export default defineNuxtConfig({

	modules: [
		'@nuxt/eslint',
		'nuxt-typed-router',
		'@nuxt/icon',
	],

	pages: { pattern: ['**/*.vue', '!**/_components/**'] },

	components: false,

	imports: { scan: false },

	devtools: { enabled: IS_DEVELOPMENT },

	app: {
		head: {
			htmlAttrs: { lang: 'ru' },
			titleTemplate: '%s | LUIS+',
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0',
				},
			],
		},
	},

	css: ['@/assets/styles/index.scss'],

	runtimeConfig: {
		public: {
			API_URL: 'https://cataas.com',
			IS_DEVELOPMENT,
		},
	},
	compatibilityDate: '2025-07-15',

	nitro: {
		routeRules: {
			'/': { prerender: true },
			'/stickers': { prerender: true },
		},
	},

	eslint: {
		config: {
			typescript: true,
			stylistic: {
				indent: 'tab',
				semi: false,
				quotes: 'single',
				commaDangle: 'always-multiline',
				braceStyle: '1tbs',
			},
		},
	},

	icon: {
		provider: 'server',
		customCollections: [
			{
				prefix: 'i',
				dir: './app/assets/icons',
			},
		],
	},

})
