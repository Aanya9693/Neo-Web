// import { env } from '$env/dynamic/private';
import {error,fail,redirect} from '@sveltejs/kit';
// import { get } from 'svelte/store';
// import { userInfo } from '$lib/stores/UserStore.js';
// import {validateData } from '$lib/utils';
// import { mobileOTPSchema } from '$lib/schemas';
import {BASE_API_URL} from '$env/static/private';

export const load = async ({locals,event}) =>{
    
	
}

export const actions = {
	register: async ({locals, request, fetch }) => {
		// const {formData,errors}=await validateData(await request.formData(),mobileOTPSchema)
		// const number = formData.otp;
        const data=await request.formData();
        const otp=data.get('otp');
        // const name=data.get('name');
        console.log(otp)
        // if(!otp){
        //     return fail(400,{invalid:true})
        // }
        // 	try{
		// 		const response = await fetch(`${BASE_API_URL}/kyc/verify_otp?otp=${otp}&number=${number}`, {
		// 			method: 'GET',
		// 			headers: {
		// 				'Authorization': `Bearer=${locals.token}`
		// 			},
		// 		});
		// 		const result = await response.json();
		// 		if(result.status_code == "202"){
		// 			return{
		// 				success:true	
		// 			}	  
		// 		}
        //         console.log('atish');
                
        //         return{
        //             success:true
        //         }
		// 	}catch(err){
		// 		return{
		// 			success:false	
		// 		}	
		// 	}

		// if(errors){
		// 	if(errors.fieldErrors!==null)
		// 	return fail(400,{
		// 		data:formData,
		// 		errors:errors.fieldErrors
		// 	});
		// }else{
		// 	try{
		// 		const response = await fetch(`${BASE_API_URL}/kyc/send_otp?number=${number}`, {
		// 			method: 'GET',
		// 			headers: {
		// 				'Authorization': `Bearer=${locals.token}`
		// 			},
		// 		});
		// 		const result = await response.json();
		// 		if(result.status_code == "202"){
		// 			return{
		// 				success:true	
		// 			}	  
		// 		}
        //         console.log('atish');
                
        //         return{
        //             success:true
        //         }
		// 	}catch(err){
		// 		return{
		// 			success:false	
		// 		}	
		// 	}	
		// }
    }
}
// export const action={register};