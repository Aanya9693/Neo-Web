import {error,fail,redirect} from '@sveltejs/kit';
import {validateData } from '$lib/utils';
import { userNameSchema } from '$lib/schemas';
import {BASE_API_URL} from '$env/static/private';

export const load = async ({locals,event}) =>{

}
export const actions = {
	users: async ({locals, request, fetch }) => {
		const {formData,errors}=await validateData(await request.formData(),userNameSchema)
		 const userName = formData.userName;
		if(errors){
			if(errors.fieldErrors!==null)
			return fail(400,{
				data:formData,
				errors:errors.fieldErrors
			});
		}else{
            console.log(userName)
			// try{
			// 	const response = await fetch(`${BASE_API_URL}/kyc/send_otp?number=${number}`, {
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
            //             number,	
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
