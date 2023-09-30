import {error,fail,redirect} from '@sveltejs/kit';
import {validateData } from '$lib/utils';
import { registerAadharSchema, aadharOTPSchema } from '$lib/schemas';
import {BASE_API_URL} from '$env/static/private';

export const load = async ({locals,event}) =>{
	
}
let aadhar;
export const actions = {
	aadharVerify: async ({locals, request, fetch }) => {
		const {formData,errors}=await validateData(await request.formData(),registerAadharSchema)
        aadhar = formData.aadhar;
		if(errors){
			if(errors.fieldErrors!==null)
			return fail(400,{
				data:formData,
				errors:errors.fieldErrors,
			});
		}else{
			try{
				const response = await fetch(`${BASE_API_URL}/kyc/send_aadhar_otp?aadhar_number=${aadhar}`, {
					method: 'GET',
					headers: {
						'Authorization': `Bearer=${locals.token}`
					},
				});
				const result = await response.json();
				if(result.status_code == "200"||result.status_code == "200"){
						return{
							success:true	
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
    aadharOTP: async ({locals, request, fetch }) => {
        const {formData,errors}=await validateData(await request.formData(),aadharOTPSchema)
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
				const response = await fetch(`${BASE_API_URL}/kyc/verify_aadhar_otp?otp=${otp}`, {
					method: 'GET',
					headers: {
						'Authorization': `Bearer=${locals.token}`
					},
				});
				const result = await response.json();
				if(result.status_code == "200"||result.status_code == "200"){
					if(result.data.verified){
						console.log('success',result);
						return{
							otpSuccess:true	
						}	  
					}else{
						return{
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
