import { error, fail, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { changePassSchema } from '$lib/schemas';
import { BASE_API_URL } from '$env/static/private';
import { goto } from '$app/navigation';

export const load = async ({ url }) => {
	const accessCode = url.searchParams.get('token') || '';
	if (accessCode) {
		return {
			token: accessCode
		};
	}
	return {
		success: true
	};
};

export const actions = {
	reset: async ({ cookies, request }) => {
		const { formData, errors } = await validateData(await request.formData(), changePassSchema);
		const password = formData.password;
		const token = formData.token;
		const requestBody = {
			password,
			token
		};
		if (errors) {
			if (errors.fieldErrors !== null)
				return fail(400, {
					data: formData,
					errors: errors.fieldErrors
				});
		} else {
			try {
				const response = await fetch(`${BASE_API_URL}/auth/reset_password`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(requestBody)
				});
				const result = await response.json();
				if (result.status_code == '200' || result.status_code == '202') {
					console.log('succcess', result);
					return {
						success: true
					};
				} else {
					console.log('error', result);
					return {
						success: false,
						message: result.detail
					};
				}
			} catch (err) {
				console.log('catch error');
				return {
					success: false,
					message: 'Invalid credentials'
				};
			}
		}
	}
};
