<script>
	import { applyAction, enhance } from '$app/forms';
	import { goto, invalidateAll, afterNavigate } from '$app/navigation';
	import Button from '$lib/buttons/button.svelte';
	import Loading from '$lib/components/loading.svelte';
	import Modal from '$lib/components/modal.svelte';
	import toast, { Toaster } from 'svelte-french-toast';
	import Input from '$lib/components/form/Input.svelte';

	//one step previous page
	import { base } from '$app/paths';
	let previousPage = base;

	afterNavigate(({ from }) => {
		previousPage = from?.url.pathname || previousPage;
	});

	export let data;
	const { user } = data;
	export let form;

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
		goto('/dashboard/develop');
	};
</script>

<Toaster />
<div class="w-full h-screen">
	<Modal>
		<main class="flex justify-center items-center mt-4">
			<div
				class="w-[560px] rounded-2xl px-16 py-4 flex justify-evenly flex-col bg-secondary text-white text-sm relative"
			>
				<div class="login-card-inner h-full w-full">
					<div class="flex flex-col items-center justify-center gap-2 mt-16">
						<h3 class="text-2xl text-center font-semibold leading-7">New App</h3>
						<p class="text-[10px] font-normal leading-3">Give it a exciting name to your App.!</p>
					</div>
					<form
						class="flex flex-col"
						method="POST"
						action="?/app"
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
						<div class="grid gap-x-10">
							<div class="flex flex-col h-full mt-5">
								<Input
									type="text"
									label="app name"
									name="app_name"
									value={user?.app_name}
									errors={form?.errors?.app_name}
								/>
							</div>
						</div>
						<div class="py-8 text-center flex space-x-6 justify-center">
							<Button
								label="Submit"
								htmlType="submit"
								className="w-full bg-primary text-[#0C151E]"
							/>
							<Button
								label="Cancel"
								route={previousPage}
								className="w-full bg-[#081B2A] text-[#fff] hover:text-[#081B2A]"
							/>
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
		<Loading desc="Data saved successfully" />
	{/if}
</div>
