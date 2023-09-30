import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, url }) => {
	if (url.pathname === '/public/authentication/reset-password') {
		console.log(url);
		throw new redirect(301, `/auth/forgot-password/change-password${url.search}`);
	}
	return {
		user: locals.user
	};
};
