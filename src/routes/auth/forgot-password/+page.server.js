import { env } from '$env/dynamic/private';
import { error, fail, redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { userInfo } from '$lib/stores/UserStore.js';
import { validateData } from '$lib/utils';
import { registerUserSchema } from '$lib/schemas';
import { BASE_API_URL } from '$env/static/private';

export const load = async ({ locals, event }) => {
	return {
		userInfo: get(userInfo)
	};
};

export const actions = {
	forgot_password: async ({ request }) => {
		const { formData, errors } = await validateData(await request.formData(), registerUserSchema);
		const email = formData.email;
		// const requestBody = {
		// 	email
		// };

		if (errors) {
			if (errors.fieldErrors !== null)
				return fail(400, {
					data: formData,
					errors: errors.fieldErrors
				});
		} else {
			try {
				console.log('recover-email', email);

				const response = await fetch(
					`${BASE_API_URL}/auth/forgot_password?email=${email}&env=local`,
					{
						method: 'GET',
						headers: {
							'Content-Type': 'application/json'
						}
					}
				);
				const result = await response.json();
				console.log('result', result);
				console.log('response', response);
				if (result.status_code == '200' || result.status_code == '202') {
					console.log('success', result);
					return {
						success: true,
						message: email
					};
				} else {
					console.log('error', result);
					return {
						success: false,
						message: result.detail
					};
				}
			} catch (err) {
				// console.log('catch error');
				console.log(' catch error :', err.message);

				return {
					success: false,
					message: 'Invalid credentials'
				};
			}
		}
	}
};
