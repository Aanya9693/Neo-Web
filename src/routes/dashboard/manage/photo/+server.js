import { BASE_API_URL } from '$env/static/private';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, cookies, fetch }) {
    try {
        const idToken = cookies.get('jwtToken');
        console.log("in server file")

        const formData = await request.formData();
        const options = {
            method: 'POST',
            headers: {
                Authorization: `${idToken}`
            },
            body: formData
        };

        const response = await fetch(`${BASE_API_URL}/user/avatar`, options);
        const result = await response.json();
        return json(result);
    } catch (error) {
        console.error("An error occurred:", error);
        // You can choose to handle the error here, such as returning an error response
        return json({ error: 'An error occurred while processing the request.' }, 500);
    }
}
