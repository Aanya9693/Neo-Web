
import { z } from 'zod';
import { fail } from '@sveltejs/kit';

import { BASE_API_URL } from '$env/static/private';
import { superValidate, message } from 'sveltekit-superforms/server';

// import { page } from '$app/stores';
// import { get } from 'svelte/store';


const schema = z
	.object({
		fullName: z
			.string().min(1, 'Fullname is required'),
		password: z
			.string()
			.regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, 'Password Must be atleast 1 uppercase, 1 lowercase & 1 numeric letter')
	});

let token = "";
let oldPassword = "";


export const load = async ({ locals, url }) => {

	// console.log("showSetPasssowrdPopup : ", url.searchParams.get("showSetPasssowrdPopup"));
	// console.log("tempPassword : ", url.searchParams.get("tempPassword"))
	// console.log("accessToken : ", url.searchParams.get("accessToken"))
	const form = await superValidate(schema);

	token = url.searchParams.get("accessToken");
	// oldPassword = url.searchParams.get("tempPassword");
	// console.log("manage-page.sverver");
	// console.log(url.searchParams.get("showSetPasswordPopup"));
	return {
		user: locals.user,
		showSetPasswordPopup: url.searchParams.get("showSetPasswordPopup"),
		tempPassword: url.searchParams.get("showSetPasswordPopup"),
		accessToken: url.searchParams.get("accessToken"),
		form,
	}
}


export const actions = {
	//set password
	updateuserProfile: async ({ request, cookies }) => {		
		let formData = await request.formData();
		const form = await superValidate(formData, schema);


		console.log("jwtToken : ", cookies.get("jwtToken"));
		console.log("oldPassword : ", oldPassword);
		// console.log("BASE_API_URL : ", BASE_API_URL);
		let actionResponse = {
			status: 'failed',
			content: 'Validation failed'
		};

		if (!form.valid) {
			return message(form, actionResponse);
		}

		try {

			const userNameResponse = await fetch(`${BASE_API_URL}/user/name`, {
				method: 'POST',
				headers: {
					"accept": "*/*",
					"Authorization": `${cookies.get("jwtToken")}`
				},            
				body: JSON.stringify({
					first_name: form.data.fullName,
					last_name: "",
				})
			});

			// console.log("User Name userNameResponse : ", userNameResponse);
			const userNameResult = await userNameResponse.json();

			console.log("User Name result : ", userNameResult);

			const isUserNameUpdateSuccessfull = userNameResult.status_code >= 200 && userNameResult.status_code <= 300;
			if (!isUserNameUpdateSuccessfull) {
				return message(form, {
					...actionResponse,
					content: userNameResult.message,
				});
			}

			const setPasswordResponse = await fetch(`${BASE_API_URL}/auth/change_password`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `${cookies.get("jwtToken")}`
				},
				body: JSON.stringify({
					new_password: form.data.password,
					old_password: oldPassword,
				})
			});
			const setPasswordResult = await setPasswordResponse.json();
			console.log("setPasswordResultresulet : ", setPasswordResult);

			const isSetPasswordSuccessfull = setPasswordResult.status_code >= 200 && setPasswordResult.status_code <= 300;

			if (!isSetPasswordSuccessfull) {
				return message(form, {
					...actionResponse,
					content: setPasswordResult.message,
				});
			}


			return message(form, {
				status: "success",
				content: "User profile update successful.",
			})

		} catch (err) {
			return message(form, { ...actionResponse, content: err });
		}
	}
};
