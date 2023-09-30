<script>
	import { goto, invalidateAll } from '$app/navigation';
	import Title from '$lib/title.svelte';
	import Button from '$lib/buttons/button.svelte';
	import Loading from '$lib/components/loading.svelte';
	import { applyAction, enhance } from '$app/forms';
	import SvelteOtp from '@k4ung/svelte-otp';
	import toast, { Toaster } from 'svelte-french-toast';
	import Input from '$lib/components/form/Input.svelte';

	export let data;
	export let form;

	let otp = '';
	$: if (form?.message) {
		toast.error(form?.message, {
			position: 'top-right'
		});
	}
	$: status = false;
	$: if (form?.otpSuccess) {
		status = true;
		setTimeout(alertFunc, 1000);
	}
	const alertFunc = () => {
		status = false;
		goto('/dashboard/wallet');
	};
</script>

<Toaster />
<div class="mt-16">
	{#if form?.success}
		<Title
			title="Phone Number"
			subtitle={`Enter the 6-digit code we have send on +91 ${form?.number}`}
		/>
		<form
			method="POST"
			action="?/phoneOTP"
			use:enhance={() => {
				return async ({ result }) => {
					invalidateAll();
					await applyAction(result);
				};
			}}
		>
			<div class="pt-4">
				<SvelteOtp
					bind:value={otp}
					numOfInputs={4}
					numberOnly
					inputClass="rounded-md bg-gray-800 text-primary text-2xl font-bold"
					separatorClass="border-white"
					inputStyle="width:55px"
					wrapperClass="flex justify-between"
				/>
				<div class="flex flex-col h-full mt-5">
					<Input type="hidden" name="otp" value={otp} errors={form?.errors?.otp} icon={false} />
				</div>
			</div>
			<div class="mt-4 self-center opacity-75 text-sm mb-1">
				Not received code yet ? <a
					href="/public/kyc/phonenumber"
					class="text-primary hover:underline"
					>Re-Send
				</a>
			</div>
			<Button label="Verify" htmlType="submit" />
		</form>
	{:else}
		<Title
			title="Phone Number"
			subtitle="Please type your number, then we’ll send a verification code for authentication."
		/>
		<form
			class="flex flex-col"
			method="POST"
			action="?/phoneVerify"
			use:enhance={() => {
				return async ({ result }) => {
					invalidateAll();
					await applyAction(result);
				};
			}}
		>
			<div class="relative">
				<span class="absolute inset-y-0 left-0 flex items-center pl-2">
					<img src="/india-flag.svg" class="w-5 h-5" alt="Cloud Lock" />
				</span>
				<span class="absolute inset-y-0 left-8 flex items-center">
					<span class="border-l border-gray-400 mx-2" style="height: 0.75rem;" />
					<span class="text-primary text-base">+91</span>
				</span>
				<input
					type="text"
					name="number"
					value={form?.data?.number ?? ''}
					class="pl-[80px] pr-4 py-2 w-96 border-2 bg-input-light border-none rounded-md overflow-clip whitespace-nowrap focus:ring-primary border-primary text-primary"
				/>
			</div>
			{#if form?.errors}
				<span class="text-red-700 text-left mt-1">{form?.errors?.number}</span>
			{/if}
			<div class="mt-8 text-center">
				<Button label="Send Code" htmlType="submit" />
			</div>
		</form>
	{/if}
	{#if status}
		<Loading desc="Creating Account" />
	{/if}
</div>

<style>
	.here {
		letter-spacing: 2vw;
		border-style: dotted solid dashed double;
	}
	.hide {
		caret-color: transparent;
	}
</style>
