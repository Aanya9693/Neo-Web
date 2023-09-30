import { error, fail, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { createAppSchema } from '$lib/schemas';
import { BASE_API_URL } from '$env/static/private';

export const load = async ({ locals, event }) => {
	return {
		user: locals.user
	};
};
export const actions = {
	app: async ({ locals, request, fetch }) => {
		const { formData, errors } = await validateData(await request.formData(), createAppSchema);
		const app_name = formData.app_name;
		const body = {
			app_name: app_name
		};
		if (errors) {
			if (errors.fieldErrors !== null)
				return fail(400, {
					data: formData,
					errors: errors.fieldErrors
				});
		} else {
			try {
				const response = await fetch(`${BASE_API_URL}/develop/app/create`, {
					method: 'POST',
					headers: {
						Authorization: `Bearer=${locals.token}`
					},
					body: JSON.stringify(body)
				});
				const result = await response.json();
				console.log('data', result, app_name);
				if (result.status_code == '202' || result.status_code == '200') {
					console.log('success', result);
					return {
						success: true
					};
				} else {
					console.log('error', result);
					return {
						success: false,
						message: result.data
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
