import {error,fail,redirect} from '@sveltejs/kit';
import {validateData } from '$lib/utils';
import { firstLastNameSchema } from '$lib/schemas';
import {BASE_API_URL} from '$env/static/private';

export const load = async ({locals,event}) =>{
	return{
        user:locals.user,
    }
}
export const actions = {
	names: async ({locals, cookies, request, fetch }) => {
		const {formData,errors}=await validateData(await request.formData(),firstLastNameSchema)
		console.log(formData)
        const first_name = formData.firstName;
        const last_name = formData.lastName;
		if(errors){
			if(errors.fieldErrors!==null)
			return fail(400,{
				data:formData,
				errors:errors.fieldErrors
			});
		}else{
			try{
				const requestData = {
                    first_name,
                    last_name,
                };
				const response = await fetch(`${BASE_API_URL}/user/name`, {
					method: 'POST',
					body: JSON.stringify(requestData),
					headers: {
						'Authorization': `${cookies.get("jwtToken")}`
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
}
