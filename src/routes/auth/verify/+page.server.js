import { error, fail, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { loginUserSchema } from '$lib/schemas';
import { BASE_API_URL } from '$env/static/private';
import { page } from '$app/stores';

export const load = async ({ event, url }) => {


	// console.log('atish', url);
	return {
		email: url.searchParams.get('email')
	};
};

// export const actions = {
// 	login: async ({ cookies, request }) => {
// 		const { formData, errors } = await validateData(await request.formData(), loginUserSchema);
// 		const email = formData.email;
// 		const password = formData.password;
// 		const requestBody = {
// 			email,
// 			password
// 		};
// 		if (errors) {
// 			if (errors.fieldErrors !== null)
// 				return fail(400, {
// 					data: formData,
// 					errors: errors.fieldErrors
// 				});
// 		} else {
// 			try {
// 				const response = await fetch(`${BASE_API_URL}/auth/login`, {
// 					method: 'POST',
// 					headers: {
// 						'Content-Type': 'application/json'
// 					},
// 					body: JSON.stringify(requestBody)
// 				});
// 				const result = await response.json();
// 				if (result.status_code == '200' || result.status_code == '202') {
// 					cookies.set('token', result.data.access_token, {
// 						path: '/',
// 						httpOnly: true,
// 						sameSite: 'strict',
// 						secure: process.env.NODE_ENV === 'production',
// 						maxAge: 60 * 60 * 24 * 30
// 					});
// 					console.log('succcess', result);
// 					return {
// 						success: true
// 					};
// 				} else {
// 					console.log('error', result);
// 					return {
// 						success: false,
// 						message: result.detail
// 					};
// 				}
// 			} catch (err) {
// 				console.log('catch error');
// 				return {
// 					success: false,
// 					message: 'Invalid credentials'
// 				};
// 			}
// 		}
// 		// const form=await superValidate(request,schema);
// 		// const email = form.data.email;
// 		// const password = form.data.password;

// 		// if(form.valid){
// 		// 	console.log(email,password)
// 		// 	return { success: true };
// 		// }
// 		// const user = await db.getUser(email);
// 		// cookies.set('sessionid', await db.createSession(user));

// 		// return { error: true,  };
// 	}
// };
