import { BASE_API_URL } from '$env/static/private';
import { superValidate, message } from 'sveltekit-superforms/server';
import { joinWaitlistSchema } from '$lib/schemas.js';
export const load = async ({ cookies }) => {
	const form = await superValidate(joinWaitlistSchema);
	const waitListJoined = cookies.get('waitListJoined', { path: '/' }) || false;
	return {
		form,
		waitListJoined: Boolean(waitListJoined)
	};
};
export const actions = {
	joinWaitlist: async ({ request, fetch, cookies }) => {
		const submittedData = await request.formData();
		const form = await superValidate(submittedData, joinWaitlistSchema);
		console.log(form.data);

		let actionResponse = {
			status: 'failed',
			content: ''
		};

		if (!form.valid) {
			return message(form, actionResponse);
		}
		try {
			const response = await fetch(
				`${BASE_API_URL}/neucron/joinwaitlist?emailID=${form.data.emailID}`,
				{
					method: 'POST',
					headers: {
						accept: '*/*',
						'Content-Type': 'application/json'
					}
				}
			);
			const result = await response.json();
			console.log('response ', result, response.ok);
			if (!response.ok) {
				if (response.status === 401) {
					return message(form, {
						...actionResponse,
						content: 'Bad Request'
					});
				}
				return message(form, {
					...actionResponse,
					content: `HTTP error! status: ${response.status}`
				});
			}
			cookies.set('waitListJoined', true, { path: '/' });
			return message(form, {
				...actionResponse,
				status: 'success',
				content: 'Thank you for joining our waitlist!'
			});
		} catch (err) {
			return message(form, { ...actionResponse, content: err.message });
		}
	}
};
