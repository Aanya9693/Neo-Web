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

	let otp = '';
	let loading = false;
	let areYouSure = false;
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

<div class="w-full h-screen">
	<Modal>
		<main class="flex justify-center items-center mt-4">
			{#if form?.success}
				<div
					class="w-[680px] rounded-2xl px-16 py-4 flex justify-evenly flex-col bg-primary-dark text-white text-sm relative"
				>
					<div class="d">
						<h1 class="font-semibold text-2xl leading-6 my-4">
							Neucron has sent you a email verification request
						</h1>
						<div class="font-semibold text-base leading-6 opacity-60">
							You’ve received a email verification request for Neucron with payment due on September
							25, 2022
						</div>
						<div class="py-4 font-semibold text-base leading-6 opacity-60">
							You can view the payment details by clicking the button below.
						</div>
						<div class="font-semibold text-base leading-6 opacity-60">
							You can email <span class="text-primary">rohan@timechain.io</span> with any question
						</div>
					</div>
					<div class="mt-8 mb-16 text-center">
						<Button
							label="Cancel"
							route="/dashboard/manage"
							className="bg-[#20303E] text-white hover:text-primary-dark"
						/>
					</div>
				</div>
			{:else}
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
						{:else}
							<Title
								title="Email"
								subtitle="Please type your email, then we’ll send a verification code for authentication."
							/>
							<form
								class="flex flex-col"
								method="POST"
								action="?/email"
								use:enhance={() => {
									loading = true;
									return async ({ result }) => {
										invalidateAll();
										await applyAction(result);
										loading = false;
									};
								}}
							>
								<div class="px-10">
									<Input
										type="text"
										name="email"
										value={user?.email}
										errors={form?.errors?.email}
									/>
								</div>
								<div class="mt-8 text-center">
									<Button label="Send Code" htmlType="submit" />
								</div>
							</form>
						{/if}
					</div>
				</div>
			{/if}
		</main>
	</Modal>
	{#if loading}
		<Loading desc="Loading" />
	{/if}
	{#if status}
		<Loading desc="Saved Successfully" />
	{/if}
</div>
