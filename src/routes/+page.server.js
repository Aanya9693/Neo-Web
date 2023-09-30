import { BASE_API_URL } from '$env/static/private';
import { superValidate, message } from 'sveltekit-superforms/server';
import { contactFormSchema } from '$lib/schemas';
// import { BASE_API_URL } from "./config/api";

export const load = async ({ cookies }) => {
	const form = await superValidate(contactFormSchema);
	// let formIsSubmitted = cookies.get('contactFormSubmitted', { path: '/' });
	return {
		plans: getPlans(),
		testimonials: getTestimonials(),
		form,
		// formIsSubmitted: Boolean(formIsSubmitted)
	};
};



const getPlans = () => {
	return [
		{
			title: 'Free',
			subtitle: 'Perfect plan to get started',
			tenure: 'month',
			type: 'free',
			price: '$0',
			description: 'A free plan grants you access to some cool features of Spend.In.',
			features: [
				{
					text: 'Sync accross device',
					status: true
				},
				{
					text: '5 workspace',
					status: true
				},
				{
					text: 'Collaborate with 5 user',
					status: true
				},
				{
					text: 'Sharing permission',
					status: false
				},
				{
					text: 'Admin tools',
					status: false
				},
				{
					text: '100+ integrations',
					status: false
				}
			]
		},
		{
			title: 'Pro',
			subtitle: 'Perfect plan for professionals!',
			tenure: 'month',
			type: 'pro',
			price: '$12',
			description: 'For professional only! Start arranging your expenses with our best templates.',
			features: [
				{
					text: 'Sync accross device',
					status: true
				},
				{
					text: '5 workspace',
					status: true
				},
				{
					text: 'Collaborate with 5 user',
					status: true
				},
				{
					text: 'Sharing permission',
					status: true
				},
				{
					text: 'Admin tools',
					status: true
				},
				{
					text: '100+ integrations',
					status: false
				}
			]
		},
		{
			title: 'Ultimate',
			subtitle: 'Best suits for great company!',
			tenure: 'month',
			type: 'ultimate',
			price: '$33',
			description: 'If you a finance manager at big  company, this plan is a perfect match.',
			features: [
				{
					text: 'Sync accross device',
					status: true
				},
				{
					text: '5 workspace',
					status: true
				},
				{
					text: 'Collaborate with 5 user',
					status: true
				},
				{
					text: 'Sharing permission',
					status: true
				},
				{
					text: 'Admin tools',
					status: true
				},
				{
					text: '100+ integrations',
					status: true
				}
			]
		},

		// Year tenure
		{
			title: 'Free',
			subtitle: 'Perfect plan to get started',
			tenure: 'year',
			type: 'free',
			price: '$0',
			description: 'A free plan grants you access to some cool features of Spend.In.',
			features: [
				{
					text: 'Sync accross device',
					status: true
				},
				{
					text: '5 workspace',
					status: true
				},
				{
					text: 'Collaborate with 5 user',
					status: true
				},
				{
					text: 'Sharing permission',
					status: false
				},
				{
					text: 'Admin tools',
					status: false
				},
				{
					text: '100+ integrations',
					status: false
				}
			]
		},
		{
			title: 'Pro',
			subtitle: 'Perfect plan for professionals!',
			tenure: 'year',
			type: 'pro',
			price: '$110',
			description: 'For professional only! Start arranging your expenses with our best templates.',
			features: [
				{
					text: 'Sync accross device',
					status: true
				},
				{
					text: '5 workspace',
					status: true
				},
				{
					text: 'Collaborate with 5 user',
					status: true
				},
				{
					text: 'Sharing permission',
					status: true
				},
				{
					text: 'Admin tools',
					status: true
				},
				{
					text: '100+ integrations',
					status: false
				}
			]
		},
		{
			title: 'Ultimate',
			subtitle: 'Best suits for great company!',
			tenure: 'year',
			type: 'ultimate',
			price: '$349',
			description: 'If you a finance manager at big  company, this plan is a perfect match.',
			features: [
				{
					text: 'Sync accross device',
					status: true
				},
				{
					text: '5 workspace',
					status: true
				},
				{
					text: 'Collaborate with 5 user',
					status: true
				},
				{
					text: 'Sharing permission',
					status: true
				},
				{
					text: 'Admin tools',
					status: true
				},
				{
					text: '100+ integrations',
					status: true
				}
			]
		}
	];
};

const getTestimonials = () => {
	return [
		{
			avatar: 'https://lemontours.vercel.app/home/reviews/smith.png',
			rating: 5,
			review: `Neucron.io has revolutionized how we manage our digital assets. The seamless integration and
		robust infrastructure have streamlined our operations, providing security and peace of mind.
		Highly recommended!`,
			username: 'John Doe',
			duration: 'One Year With Us'
		},
		{
			avatar: 'https://lemontours.vercel.app/home/reviews/lily.png',
			rating: 4,
			review: `I find this very helpful, when ever I need to make a payment it just smooth.`,
			username: 'Jane Doe',
			duration: 'Two Year With Us'
		},
		{
			avatar: 'https://lemontours.vercel.app/home/reviews/casandra.png',
			rating: 5,
			review: `Neucron.io has revolutionized how we manage our digital assets. The seamless integration and
			robust infrastructure have streamlined our operations, providing security and peace of mind.
			Highly recommended!`,
			username: 'Casandra',
			duration: 'Three Year With Us'
		}
	];
};
export const actions = {
	contact_us: async ({ request, fetch, cookies }) => {
		const submittedData = await request.formData();
		const form = await superValidate(submittedData, contactFormSchema);
		let actionResponse = {
			status: 'failed',
			content: ''
		};
		if (!form.valid) {
			return message(form, actionResponse);
		}
		try {
			const response = await fetch(`${BASE_API_URL}/neucron/contactus`, {
				method: 'POST',
				headers: {
					accept: '*/*',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(form.data)
			});
			const result = await response.json();
			// console.log("Result : ", result);
			if (!response.ok) {
				if (response.status === 401) {
					return message(form, {
						...actionResponse,
						content: 'Error! Please try again later.'
					});
				}
				return message(form, {
					...actionResponse,
					content: `HTTP error! status: ${response.status}`
				});
			}
			// cookies.set('contactFormSubmitted', true, { path: '/' });
			return message(form, {
				...actionResponse,
				status: 'success',
				content: 'Submitted successfully.'
			});
		} catch (error) {
			return message(form, { ...actionResponse, content: error.message });
		}
	}
};
