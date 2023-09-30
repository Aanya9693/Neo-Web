import { BASE_API_URL } from '$env/static/private';
import * as Sentry from '@sentry/sveltekit';

export const handle = async ({ event, resolve }) => {
	try {
		const token = event.cookies.get('jwtToken');
		if (token) {
			const response = await fetch(`${BASE_API_URL}/user/info`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `${token}`
				}
			});

			if (!response.ok) {
				throw new Error(`API request failed with status: ${response.status}`);
			}

			const result = await response.json();
			event.locals.user = result.data;
		}
	} catch (error) {
		Sentry.captureException(error);
	}

	// console.log('Resolving event');
	return await resolve(event);
};

Sentry.init({
	dsn: 'https://b7642ae2628dcb64bd38af456f10268a@o4505713435213824.ingest.sentry.io/4505713438752768',
	tracesSampleRate: 1.0,
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0
});
