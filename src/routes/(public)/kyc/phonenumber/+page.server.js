// import { env } from '$env/dynamic/private';
import {error,fail,redirect} from '@sveltejs/kit';
import { get } from 'svelte/store';
import { userInfo } from '$lib/stores/UserStore.js';
import {validateData } from '$lib/utils';
import { registerMobileSchema,phoneOTPSchema } from '$lib/schemas';
import {BASE_API_URL} from '$env/static/private';

export const load = async ({locals,event}) =>{
	// const form = superValidate(event,schema);
	return {
		userInfo: get(userInfo),
		// form
	}
}
let number;
export const actions = {
	phoneVerify: async ({locals, request, fetch }) => {
		const {formData,errors}=await validateData(await request.formData(),registerMobileSchema)
		 number = formData.number;
		if(errors){
			if(errors.fieldErrors!==null)
			return fail(400,{
				data:formData,
				errors:errors.fieldErrors
			});
		}else{
			try{
				const response = await fetch(`${BASE_API_URL}/kyc/send_otp?number=${number}`, {
					method: 'GET',
					headers: {
						'Authorization': `Bearer=${locals.token}`
					},
				});
				const result = await response.json();
				if(result.status_code == "202"||result.status_code == "200"){
                    console.log('success',result);
					return{
						success:true,
                        number,	
					}	  
				}else{
					console.log('error',result);
					return{
						success:false,
						message:result.data,	
					}	
				}
			}catch(err){
				console.log('catch error')
				return{
					success:false,
					message:'Invalid credentials'
				}
			}
		}
    },
    phoneOTP: async ({locals, request, fetch }) => {
        const {formData,errors}=await validateData(await request.formData(),phoneOTPSchema)
        const otp = formData.otp;
		if(errors){
			if(errors.fieldErrors!==null)
			return fail(400,{
				data:formData,
				errors:errors.fieldErrors,
                success:true,
			});
		}else{
			try{
                const response = await fetch(`${BASE_API_URL}/kyc/verify_otp?otp=${otp}&number=${number}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer=${locals.token}`
                    },
                });
                const result = await response.json();
                if(result.status_code == "202"||result.status_code == "200"){
                    console.log('success',result);
                    return{
                        otpSuccess:true	
                    }	  
                }else{
					console.log('error',result);
					return{
                        success:true,
						otpSuccess:false,
			    		message:result.data,	
					}	
				}
			}catch(err){
				console.log('catch error')
				return{
                    success:true,
					otpSuccess:false,
					message:'Invalid credentials'
				}
			}
		}
    }
}
