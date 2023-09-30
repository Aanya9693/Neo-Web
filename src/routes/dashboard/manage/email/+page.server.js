import {error,fail,redirect} from '@sveltejs/kit';
import {validateData } from '$lib/utils';
import { emailSchema } from '$lib/schemas';
import {BASE_API_URL} from '$env/static/private';

export const load = async ({locals,event}) =>{
	return{
        user:locals.user
    }
}
let email;
export const actions = {
	email: async ({locals, request, fetch }) => {
		const {formData,errors}=await validateData(await request.formData(),emailSchema)
        email = formData.email;
		if(errors){
			if(errors.fieldErrors!==null)
			return fail(400,{
				data:formData,
				errors:errors.fieldErrors
			});
		}else{
			console.log(email)
			// try{
			// 	const response = await fetch(`${BASE_API_URL}/kyc/send_otp?number=${email}`, {
			// 		method: 'GET',
			// 		headers: {
			// 			'Authorization': `Bearer=${locals.token}`
			// 		},
			// 	});
			// 	const result = await response.json();
			// 	if(result.status_code == "202"||result.status_code == "200"){
            //         console.log('success',result);
			// 		return{
			// 			success:true,
            //             email,	
			// 		}	  
			// 	}else{
			// 		console.log('error',result);
			// 		return{
			// 			success:false,
			// 			message:result.data,	
			// 		}	
			// 	}
			// }catch(err){
			// 	console.log('catch error')
			// 	return{
			// 		success:false,
			// 		message:'Invalid credentials'
			// 	}
			// }
		}
    },
}
