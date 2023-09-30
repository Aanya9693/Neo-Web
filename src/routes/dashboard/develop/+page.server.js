import { error, fail, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { loginUserSchema } from '$lib/schemas';
import { BASE_API_URL } from '$env/static/private';

export const load = async ({ locals, cookies }) => {
    try {
        const getApps = async () => {
            const res = await fetch(`${BASE_API_URL}/develop/app/list`, {
                method: 'GET',
                headers: {
                    Authorization: `${cookies.get('jwtToken')}`
                }
            });

            if (!res.ok) {
                throw new Error(`Failed to fetch apps. Status code: ${res.status}`);
            }

            const result = await res.json();
            return result.data.list;
        };

        return {
            apps: await getApps()
        };
    } catch (error) {
        console.error("An error occurred while loading apps:", error);
        return error({
            statusCode: 500,
            message: "An error occurred while loading apps."
        });
    }
};
