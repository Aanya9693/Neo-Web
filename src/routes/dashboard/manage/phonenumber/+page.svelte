<script>
	import { applyAction, enhance } from '$app/forms';
	import { goto, invalidateAll } from '$app/navigation';
	import Button from '$lib/buttons/button.svelte';
	import Loading from '$lib/components/loading.svelte';
	import Modal from '$lib/components/modal.svelte';
	import Title from '$lib/title.svelte';
	import Logo from '$lib/logo.svelte';
	import SvelteOtp from '@k4ung/svelte-otp';
	import toast, { Toaster } from 'svelte-french-toast';
	import Input from '$lib/components/form/Input.svelte';
	import Alert from '../alert.svelte';

	export let data;
	const { user } = data;
	export let form;

	let areYouSure = false;
	let otp = '';
	let loading = false;
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
		goto('/dashboard/manage');
	};
</script>

<Toaster />
<div class="w-full h-screen">
	<Modal>
		<main class="flex justify-center items-center mt-4">
			<div
				class="w-[560px] rounded-2xl px-16 py-4 flex justify-evenly flex-col bg-primary-dark text-white text-sm relative"
			>
				<div class="login-card-inner h-full w-full">
					<div class="flex flex-col items-center justify-center gap-2 mb-16">
						<img src="/cloud-lock.svg" class="ml-5" alt="Cloud Lock" />
						<Logo icon={false} />
						<p class="text-xs text-center">
							Lorem ipsum dolor sit amet consectetur. Dolor vel massa non egestas lorem.met
							consectetur. Dolor vel massa m
						</p>
					</div>
					{#if !areYouSure}
						<Alert on:open={() => (areYouSure = !areYouSure)} />
					{:else if form?.success}
						<Title
							title="Phone Number"
							subtitle={`Enter the 6-digit code we have send on +91 ${form?.number}`}
						/>
						<form
							method="POST"
							action="?/phoneOTP"
							use:enhance={() => {
								loading = true;
								return async ({ result }) => {
									invalidateAll();
									await applyAction(result);
									loading = false;
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
									wrapperClass=""
								/>
								<div class="flex flex-col h-full mt-5">
									<Input
										type="hidden"
										name="otp"
										value={otp}
										errors={form?.errors?.otp}
										icon={false}
									/>
								</div>
							</div>
							<div class="mt-4 self-center opacity-75 text-sm mb-1">
								Not received code yet ? <a
									href="/dashboard/manage/phonenumber"
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
								loading = true;
								return async ({ result }) => {
									invalidateAll();
									await applyAction(result);
									loading = false;
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
									value={user?.phone_number}
									class="pl-[80px] pr-4 py-2 w-96 border-2 bg-input-light border-none rounded-md overflow-clip whitespace-nowrap focus:ring-primary border-primary text-primary"
								/>
							</div>
							{#if form?.errors?.number}
								{#each form?.errors?.number as error}
									<span class="text-red-700 text-left mt-1">{error}</span>
								{/each}
							{/if}

							<div class="mt-8 text-center">
								<Button label="Send Code" htmlType="submit" />
							</div>
						</form>
					{/if}
				</div>
			</div>
		</main>
	</Modal>
	{#if loading}
		<Loading desc="Loading" />
	{/if}
	{#if status}
		<Loading desc="Successfully Verifed" />
	{/if}
</div>
