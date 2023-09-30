import { redirect } from '@sveltejs/kit';
export const load = async () => {};

export const actions = {
	logout: async ({ cookies }) => {
		cookies.set('jwtToken', '', {
			path: '/',
			expires: new Date(0)
		});
		throw redirect(302, '/auth/login');
	}
};
