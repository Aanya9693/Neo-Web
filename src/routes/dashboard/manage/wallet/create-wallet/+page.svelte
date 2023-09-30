<script>
	import { applyAction, enhance } from '$app/forms';
	import { goto, invalidateAll } from '$app/navigation';
	import Button from '$lib/buttons/button.svelte';
	import Loading from '$lib/components/loading.svelte';
	import Modal from '$lib/components/modal.svelte';
	import Title from '$lib/title.svelte';
	import toast, { Toaster } from 'svelte-french-toast';
	import Input from '$lib/components/form/Input.svelte';
	export let data;
	export let form;

	let otp = '';
	let loading = false;
	$: if (form?.message) {
		toast.error(form?.message, {
			position: 'top-right'
		});
	}
	$: status = false;
	$: if (form?.success) {
		if (loading) {
			status = true;
			setTimeout(alertFunc, 1000);
		}
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
				class="w-[560px] rounded-2xl px-16 pb-20 pt-4 flex justify-evenly flex-col bg-primary-dark text-white text-sm relative"
			>
				<div class="login-card-inner h-full w-full">
					<Title title="CREATE WALLET" subtitle="LoremipsumLoremipsumLoremipsumLoremipsum" />
					<form
						class="flex flex-col"
						method="POST"
						action="?/create"
						use:enhance={() => {
							loading = true;
							return async ({ result }) => {
								loading = true;
								invalidateAll();
								await applyAction(result);
								loading = false;
							};
						}}
					>
						<div class="mt-10">
							<div class="flex flex-col h-full">
								<Input
									type="text"
									label="Wallet"
									name="wallet"
									placeholder="Newteamname"
									value={form?.data?.wallet ?? ''}
									errors={form?.errors?.wallet}
								/>
							</div>
							<div class="flex flex-col h-full mt-8">
								<Input
									type="text"
									label="Account"
									name="account"
									placeholder="Youremail@.com"
									value={form?.data?.account ?? ''}
									errors={form?.errors?.account}
								/>
							</div>
						</div>
						<div class="my-8 text-center">
							<Button label="Add" htmlType="submit" />
						</div>
					</form>
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
