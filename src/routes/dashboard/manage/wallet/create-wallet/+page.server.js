import {error,fail,redirect} from '@sveltejs/kit';
import {validateData } from '$lib/utils';
import { createWalletSchema } from '$lib/schemas';
import {BASE_API_URL} from '$env/static/private';
// import {BASE_API_URL} from '../../../../config/api';

export const load = async ({locals,event}) =>{
    
}
export const actions = {
	create: async ({locals, request, fetch }) => {
		const {formData,errors}=await validateData(await request.formData(),createWalletSchema)
		const wallet = formData.wallet;
		const account = formData.account;
		if(errors){
			if(errors.fieldErrors!==null)
			return fail(400,{
				data:formData,
				errors:errors.fieldErrors
			});
		}else{
			// try{
			// 	const response = await fetch(`${BASE_API_URL}/kyc/verify_pan?pan_number=${pan}`, {
			// 		method: 'GET',
			// 		headers: {
			// 			'Authorization': `Bearer=${locals.token}`
			// 		},
			// 	});
			// 	const result = await response.json();
			// 	if(result.status_code == "202"||result.status_code == "200"){
			// 		console.log('success',result);
			// 		return{
			// 			success:true	
			//     	}	  
			// 	}else{
			// 		console.log('error',result);
			// 		return{
			// 			success:false,
			// 			message:result.detail,	
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
