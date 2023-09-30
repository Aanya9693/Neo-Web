
import { error, fail, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { changePassSchema } from '$lib/schemas';
import { BASE_API_URL } from '$env/static/private';


export const load = async ({ url }) => {
	return {
		token: url.searchParams.get('token')
	}
};


export const actions = {
	setPassword: async ({ request }) => {
		const { formData, errors } = await validateData(await request.formData(), changePassSchema);
		
		if (errors) {
			if (errors.fieldErrors !== null)
				return fail(400, {
					data: formData,
					errors: errors.fieldErrors
				});
		} else {
			const requestBody = {
				password: formData.password,
				token: formData.token
			};

			console.log('requestBody : ', requestBody);
			try {
				const response = await fetch(`${BASE_API_URL}/auth/set_password`, {
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(requestBody)
				});
				const result = await response.json();
				if (result.status_code == '200' || result.status_code == '202') {
					console.log('success', result);
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
