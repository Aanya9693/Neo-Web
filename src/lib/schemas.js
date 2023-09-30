import { message } from 'sveltekit-superforms/server';
import { z } from 'zod';

export const loginUserSchema = z.object({
	email: z
		.string({ required_error: 'Email is required' })
		.email({ message: 'Email must be a valid email' }),
	password: z
		.string({ required_error: 'Password is required' })
		.min(2, { message: 'Password is required' })
});

export const firstLastNameSchema = z.object({
	firstName: z
		.string({ required_error: 'First name is required' })
		.regex(/^[a-zA-Z\s]*$/, { message: 'First name can only contain letters and spaces.' })
		.min(2, { message: 'First name is required' })
		.max(64, { message: 'First name must be less than 64 characters' }),
	lastName: z
		.string({ required_error: 'Last name is required' })
		.regex(/^[a-zA-Z\s]*$/, { message: 'Last name can only contain letters and spaces.' })
		.min(2, { message: 'Last name is required' })
		.max(64, { message: 'Last name must be less than 64 characters' })
});

export const createWalletSchema = z.object({
	wallet: z
		.string({ required_error: 'Wallet is required' })
		.min(2, { message: 'Wallet is required' })
		.max(64, { message: 'Wallet must be less than 64 characters' }),
	account: z
		.string({ required_error: 'Account is required' })
		.min(2, { message: 'Account is required' })
		.max(64, { message: 'Account must be less than 64 characters' })
});

export const userNameSchema = z.object({
	userName: z
		.string({ required_error: 'user name is required' })
		.min(2, { message: 'user name is required' })
		.max(64, { message: 'user name must be less than 64 characters' })
});
export const emailSchema = z.object({
	email: z
		.string({ required_error: 'Email is required' })
		.email({ message: 'Email must be a valid email' })
});
export const changePassSchema = z
	.object({
		token: z.string(),
		password: z
			.string({ required_error: 'Password is required' })
			.regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
				message: 'Password Must be atleast 1 uppercase, 1 lowercase & 1 numeric letter'
			}),
		cPassword: z
			.string({ required_error: 'Confirm password is required' })
			.regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
				message: 'Confirm password Must be atleast 1 uppercase, 1 lowercase & 1 numeric letter'
			})
	})
	.superRefine(({ cPassword, password }, ctx) => {
		if (cPassword !== password) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Password & Confirm password must match',
				path: ['password']
			});
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Password & Confirm password must match',
				path: ['cPassword']
			});
		}
	});

export const registerUserSchema = z.object({
	email: z
		.string({ required_error: 'Email is required' })
		.email({ message: 'Email must be a valid email' })
});
export const registerMobileSchema = z.object({
	number: z
		.string()
		.min(10, {
			message: 'Please type your number, then we’ll send a verification code for authentication.'
		})
		.max(14, {
			message: 'Please type your number, then we’ll send a verification code for authentication.'
		})
});

export const mobileOTPSchema = z.object({
	number: z.number().min(4, { message: 'OTP is invalid' }).max(8, {
		message: 'Please type a valid otp, then we’ll send a verification code for authentication.'
	})
});
export const registerPanSchema = z.object({
	pan: z
		.string({ required_error: 'PAN is required' })
		.min(10, { message: 'PAN must be at least 10 characters' })
});
export const registerUPISchema = z.object({
	upi: z.string({ required_error: 'UPI is required' }).min(4, { message: 'UPI is required' })
});
export const registerAadharSchema = z.object({
	aadhar: z
		.string({ required_error: 'Aadhar is required' })
		.min(12, { message: 'Aadhar must be at least 12 characters' })
});
export const aadharOTPSchema = z.object({
	otp: z
		.string({ required_error: 'OTP is required' })
		.min(6, { message: 'OTP must be at least 6 characters' })
});
export const phoneOTPSchema = z.object({
	otp: z
		.string({ required_error: 'OTP is required' })
		.min(4, { message: 'OTP must be at least 4 characters' })
});

export const createAppSchema = z.object({
	app_name: z
		.string({ required_error: 'App name is required' })
		.min(2, { message: 'App name is required' })
		.max(64, { message: 'App name must be less than 64 characters' })
});
export const contactFormSchema = z.object({
	name: z
		.string({ required_error: 'Name is required' })
		.min(2, { message: 'Name is required' })
		.max(64, { message: 'Name must be less than 64 characters' }),
	email: z
		.string({ required_error: 'Email is required' })
		.email({ message: 'Email must be a valid email' }),
	looking_for: z
		.string({ required_error: 'Contacting reason is required' })
		.min(2, { message: 'Contacting reason is required' }),
	message: z
		.string({ required_error: 'Message is required' })
		.min(2, { message: 'Message is required' }),
	phone_number: z
		.string({ required_error: 'Phone is required' })
		.min(10, { message: 'Phone must be at least 10 characters' })
		.max(14, { message: 'Phone must be less than 14 characters' }),
	terms: z
		.boolean()
		.default(false)
		.refine((value) => value === true, {
			message: 'You must consent to the privacy policy'
		})
});
export const joinWaitlistSchema = z.object({
	emailID: z
		.string({ required_error: 'Email is required.' })
		.email({ message: 'Email must be valid.' })
});
