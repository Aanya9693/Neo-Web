import { redirect } from '@sveltejs/kit';
import { BASE_API_URL } from '$env/static/private';
// import { userInfo } from '$lib/stores/UserStore.js';
export const load = async ({ locals, cookies, fetch }) => {
    // console.log('atish');
    // console.log('Layout dashboard',locals);

    if (!cookies.get("jwtToken")) {
        throw redirect(303, '/auth/login')
    }

    return {
        userInfo: await getUserInfo(fetch, cookies.get("jwtToken")),
    }
}

const getUserInfo = async (fetch, jwtToken) => {
    try {
        const response = await fetch(`${BASE_API_URL}/user/info`, {
            method: 'GET',
            headers: {
                'Authorization': jwtToken
            }
        });

        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        const result = await response.json();
        const userInfo = result?.data;

        console.log("User Info : ", userInfo);
        return userInfo;
    } catch(e) {
        console.log("Get user info error : ", e);
        return null; 
    }
};
