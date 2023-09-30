import { error, fail, redirect } from '@sveltejs/kit';
// import { validateData } from '$lib/utils';
import { loginUserSchema } from '$lib/schemas';
import { BASE_API_URL } from '$env/static/private';
import { z } from 'zod';
import { superValidate, message } from 'sveltekit-superforms/server';

const schema = z.object({
	email: z
		.string({ required_error: 'Email is required' })
		.email({ message: 'Email must be a valid email' }),
	password: z
		.string({ required_error: 'Password is required' })
		.min(2, { message: 'Password is required' })
});

export const load = async ({ cookies }) => {
	const form = await superValidate(schema);

	if (cookies.get("jwtToken")) {
		throw redirect(301, '/dashboard/dashboard');
	}

	return {
		form
	};
}



// export const load = async ({ event, url }) => {
// 	const accessCode = url.searchParams.get('code') || '';
// 	if (accessCode) {
// 		return {
// 			token: accessCode
// 		};
// 	}
// 	return {
// 		success: true
// 	};
// };

export const actions = {
	login: async ({ request, fetch, cookies }) => {

		const submittedData = await request.formData();
		const form = await superValidate(submittedData, schema);

		let actionResponse = {
			status: "failed",
			content: "",
		};

		if (!form.valid) {
			return message(form, actionResponse);
		}

		try {
			const response = await fetch(`${BASE_API_URL}/auth/login`, {
				method: "POST",
				headers: {
					"accept": "*/*",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(form.data),
			});
			const result = await response.json();
			console.log("response ", result, response.ok);
			if (!response.ok) {
				if (response.status === 401) {
					return message(form, { ...actionResponse, content: "Unauthorized access. Please check your credentials." });

				}
				return message(form, { ...actionResponse, content: `HTTP error! status: ${response.status}` });
			}

			// storeUser(result, cookies);
			storeUserInCookies(result, cookies);

		} catch (err) {
			return message(form, { ...actionResponse, content: err.message });
		}
		const appID = await cookies.get('appID');

		console.log("successful login cookie: ", appID);

		if (appID?.length > 0) {

			await cookies.set('appID', "", {
				path: '/',
				maxAge: 0
			});
			console.log("cookie after: ", await cookies.get('appID'));

			throw redirect(302, `/app-authorize?appid=${appID}`);
		}
		return message(form, { ...actionResponse, status: "success", content: "Login successful! You are now logged in." });
	},

	login2: async ({ cookies, request }) => {
		const { formData, errors } = await validateData(await request.formData(), loginUserSchema);
		const email = formData.email;
		const password = formData.password;
		const requestBody = {
			email,
			password
		};
		if (errors) {
			if (errors.fieldErrors !== null)
				return fail(400, {
					data: formData,
					errors: errors.fieldErrors
				});
		} else {
			try {
				const response = await fetch(`${BASE_API_URL}/auth/login`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(requestBody)
				});
				const result = await response.json();
				console.log("login result : ", result);
				if (result.status_code == '200' || result.status_code == '202') {
					cookies.set('jwtToken', result.data.access_token, {
						path: '/',
						httpOnly: true,
						sameSite: 'strict',
						secure: process.env.NODE_ENV === 'production',
						maxAge: 60 * 60 * 24 * 30
					});
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


const storeUserInCookies = (authResponse, cookies) => {
	const { access_token } = authResponse?.data;

	cookies.set('jwtToken', access_token, {
		path: '/',
		httpOnly: true,
		sameSite: 'strict',
		secure: process.env.NODE_ENV === 'production',
		maxAge: 60 * 60 * 24 * 30
	});
}