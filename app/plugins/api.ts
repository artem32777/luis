export default defineNuxtPlugin((nuxtApp) => {
	const api = $fetch.create({

		baseURL: nuxtApp.$config.public.API_URL,

		onRequest({ options }) {
			// интерсептор запросов
		},

		async onResponseError({ response }) {
			// обработчик ошибок
		},

	})

	return {
		provide: {
			api,
		},
	}
})
