import {error,fail,redirect} from '@sveltejs/kit';
import {validateData } from '$lib/utils';
import { registerMobileSchema,phoneOTPSchema } from '$lib/schemas';
import {BASE_API_URL} from '$env/static/private';

export const load = async ({locals,event}) =>{
	return{
        user:locals.user
    }
}
let number;
export const actions = {
	phoneVerify: async ({locals, cookies, request, fetch }) => {
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
						'Authorization': `${cookies.get("jwtToken")}`
					},
				});
				const result = await response.json();
				if(result.status_code == "200"||result.status_code == "202"){
                    console.log('success',result);
					return{
						success:true,
                        number,	
					}	  
				}else{
					console.log('error',result);
					return{
						success:false,
						message:result.detail,	
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
    phoneOTP: async ({locals, cookies, request, fetch }) => {
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
                        'Authorization': `${cookies.get("jwtToken")}`
                    },
                });
                const result = await response.json();
                if(result.status_code == "200"||result.status_code == "202"){
					if(result.data.verified){
						console.log('success',result);
						return{
							otpSuccess:true	
						}	  
					}else{
						return{
							success:true,
							otpSuccess:false,
							message:result.data.verified,	
						}
					}
                }else{
					console.log('error',result);
					return{
                        success:true,
						otpSuccess:false,
			    		message:result.detail,	
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
