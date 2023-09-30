<script>
	import Button from '$lib/buttons/button.svelte';
	import GoogleButton from '$lib/buttons/google.svelte';
	import { onMount } from 'svelte';
	import Input from '$lib/components/form/Input.svelte';
	import Loading from '$lib/components/loading.svelte';
	import { applyAction, enhance } from '$app/forms';
	import { goto, invalidateAll } from '$app/navigation';
	import toast, { Toaster } from 'svelte-french-toast';

	export let data;
	export let form;

	// $: if (form?.message) {
	// 	toast.error(form?.message, {
	// 		position: 'top-right'
	// 	});
	// }
	// $: status = false;
	// $: if (form?.success) {
	// 	status = true;
	// 	setTimeout(alertFunc, 1000);
	// }
	// const alertFunc = () => {
	// 	status = false;
	// 	goto('/dashboard/wallet');
	// };
</script>

<Toaster />
<!-- <style>
	.horizontal-breaking-word {
		line-height: 0.1em;
		margin: 10px 0 20px;
	}
</style> -->
<main>
	<h1
		class="text-secondary text-[18.368px] text-right font-medium !leading-[27.552px] trackning-[0.115px]"
	>
		API Documentation
	</h1>
	<div class="flex justify-center items-center flex-col pt-8 2xl:pt-16">
		<img src="/logo-green.svg" alt="neucron" class="pt-10 pb-3" />
		<h1 class="text-2xl font-medium !leading-6 uppercase text-secondary text-barlow mb-2">
			Verify your Email
		</h1>
		<p
			class="text-base font-medium text-center !leading-6 py-4 uppercase text-[#081B2A] text-barlow"
		>
			You're one step away from unlocking Neucron. We've shared a verification request with your
			email address ({data.email}). Please confirm it to access Neucron.
		</p>
		<div class="text-center pt-4 2xl:pt-10 w-3/4">
			<form
				class="flex flex-col"
				method="POST"
				action="?/login"
				use:enhance={() => {
					return async ({ result }) => {
						invalidateAll();
						await applyAction(result);
					};
				}}
			>
				<div class="flex justify-center">

					<!-- <a class="bg-primary text-primary-dark w-full hover:text-primary hover:bg-primary-dark" href="mailto:info@example.com">Verify my  email</a> -->
					<Button
						label="Verify my  email"
						htmlType="submit"
						verify={true}
						className="bg-primary text-primary-dark w-full hover:text-primary hover:bg-primary-dark"
					/>
				</div>
			</form>

			<!-- {#if status}
				<Loading desc="Loading" />
				<p>Successfully logged in! Welcome back, {data?.user?.name}</p>
				{/if} -->
		</div>
		<div class="mt-10 text-secondary text-barlow font-normal !leading-4">
			If you haven't received the verification email,
		</div>
		<div class="my-2 text-secondary text-barlow font-normal !leading-4">
			please check your spam folder. Otherwise, click on <span class="font-semibold"
				><a href="/">resend</a>.</span
			>
		</div>
	</div>
</main>
