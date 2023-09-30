import { env } from '$env/dynamic/private';
import { error, fail, redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { userInfo } from '$lib/stores/UserStore.js';
import { validateData } from '$lib/utils';
import { registerUserSchema } from '$lib/schemas';
import { BASE_API_URL } from '$env/static/private';
import { dev } from "$app/environment";

var appID;

export const load = async ({ url }) => {

	const _params = new URLSearchParams(url.search);
    appID = _params.get('appid');

	return {
		userInfo: get(userInfo)
	};
};

export const actions = {
	register: async ({ cookies, request }) => {

		const { formData, errors } = await validateData(await request.formData(), registerUserSchema);
		const email = formData.email;
		const requestBody = {
			// first_name,
			// last_name,
			email
			// password
		};

		if (errors) {
			if (errors.fieldErrors !== null)
				return fail(400, {
					data: formData,
					errors: errors.fieldErrors
				});
		} else {
			try {
				const response = await fetch(`${BASE_API_URL}/auth/signup_email?email=${email}${dev ? "&env=local" : ""}`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				});
				const result = await response.json();
				if (result.status_code == '200' || result.status_code == '202') {
					console.log('signup success', result);
					console.log("appID", appID);


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
				console.log('catch error');
				return {
					success: false,
					message: 'Invalid credentials'
				};
			}
		}

		// const form=await superValidate(request,schema);

		// const data = await request.formData();
		// const name = form.data.name;
		// const email = form.data.email;
		// const password = form.data.password;
		// const info = get(userInfo);
		// @ts-ignore
		// info["email"] = email;
		// console.log(name,email,password,form.valid)
		// if(form.valid){
		// 	return { success: true };
		// }
		// const requestBody = {
		// 	name,
		// 	email,
		// 	password
		// };

		// const response = await fetch(env.BASE_URL + "auth/signup", {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify(requestBody)
		// });

		// const result = await response.json();

		// if(result.status_code == "202"){
		// 	// @ts-ignore
		// 	info["accessToken"] = result.data;
		// }

		// userInfo.set(info);

		// const user = await db.getUser(email);
		// cookies.set('sessionid', await db.createSession(user));

		// return { email };
	}
};

// export async function load({ url }) {

// 	const accessCode = url.searchParams.get('code') || "";
// 	if (accessCode) {
// 		return {
// 			token: accessCode,
// 		}
// 	}
//   }
