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
	$: if (form?.success) {
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
					{:else}
						<form
							class="flex flex-col"
							method="POST"
							action="?/users"
							use:enhance={() => {
								loading = true;
								return async ({ result }) => {
									invalidateAll();
									await applyAction(result);
									loading = false;
								};
							}}
						>
							<div class="grid grid-cols-1 gap-x-10">
								<div class="flex flex-col h-full mt-5">
									<div class="px-10">
										<Input
											type="text"
											label="user name"
											name="userName"
											value={form?.data?.userName ?? ''}
											errors={form?.errors?.userName}
										/>
									</div>
								</div>
							</div>
							<div class="py-8 text-center">
								<Button label="Submit" htmlType="submit" />
							</div>
						</form>
					{/if}
				</div>
			</div>
		</main>
	</Modal>
	{#if status}
		<Loading desc="Loading" />
	{/if}
</div>
