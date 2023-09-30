import { error, fail, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { BASE_API_URL } from '$env/static/private';

export const load = async ({ locals, event }) => {
	// console.log("in load ")
	return {
		user: locals.user
	};
};

export const actions = {
	default: async ({ locals, cookies, request }) => {
		// console.log("in page server file",request)
		if (!request.files || !request.files.image) {
			return fail(400, {
				error: {
					message: 'Image file is required'
				}
			});
		}
		const formData = new FormData();
		formData.append('file', request.files.image);
		console.log(request.files.image);

		try {
			const response = await fetch(`${BASE_API_URL}/user/avatar`, {
				method: 'POST',
				body: formData,
				headers: {
					Authorization: `${cookies.get('jwtToken')}`
				}
			});

			if (response.ok) {
				console.log('Avatar uploaded successfully');
				return { success: true };
			} else {
				console.log('Avatar upload failed');
				return { success: false, message: 'Avatar upload failed' };
			}
		} catch (error) {
			console.log('Error uploading avatar:', error);
			return { success: false, message: 'Error uploading avatar' };
		}
	}
};
