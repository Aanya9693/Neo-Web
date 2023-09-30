import {redirect} from '@sveltejs/kit';
export const load=async({locals,cookies})=>{

    if(!cookies.get("jwtToken")){
        throw redirect(303,'/auth/login')
    }
}