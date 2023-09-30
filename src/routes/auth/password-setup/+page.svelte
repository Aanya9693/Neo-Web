<script>
	import Button from '$lib/buttons/button.svelte';
	import Input from '$lib/components/form/Input.svelte';
	import Loading from '$lib/components/loading.svelte';
	import { goto, invalidateAll } from '$app/navigation';
	import { applyAction, enhance } from '$app/forms';
	import toast, { Toaster } from 'svelte-french-toast';

	import { browser } from '$app/environment';

	export let data;
	export let form;

	console.log('data : ', data);

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
		goto('/auth/login');
	};

	$: if (data?.status == 'success' && browser) {
		window.location.href = data.url;
	}
</script>

<Toaster />

<main>
	<h1
		class="text-secondary text-[18.368px] text-right font-medium !leading-[27.552px] trackning-[0.115px]"
	>
		API Documentation
	</h1>
	<div class="flex justify-center items-center flex-col pt-8 2xl:pt-16">
		<h1 class="text-2xl font-medium !leading-6 uppercase text-secondary text-barlow mb-2">
			Welcome to Neucron!
		</h1>
		<p
			class="text-base font-medium text-center !leading-6 py-4 uppercase text-[#081B2A] text-barlow"
		>
			Before moving ahead, please set up your account details.
		</p>
		<div class="text-center pt-4 2xl:pt-10 w-3/4">
			<form
				class="flex flex-col"
				method="POST"
				action="?/setPassword"
				use:enhance={() => {
					return async ({ result }) => {
						invalidateAll();
						await applyAction(result);
					};
				}}
			>
				<input name="token" type="hidden" value={data?.token}/>
				<div class="flex flex-col h-full mt-5">
					<Input
						type="password"
						label="set new password"
						name="password"
						htmlType="password"
						errors={form?.errors?.password}
					/>
				</div>
				<div class="flex flex-col h-full mt-5">
					<Input
						type="password"
						label="confirm password"
						name="cPassword"
						htmlType="password"
						errors={form?.errors?.cPassword}
					/>
				</div>
				<div class="flex space-x-2 mt-2">
					<input type="checkbox" name="" id="" />
					<p class="text-[#081B2A] text-barlow text-[10px] font-normal !leading-4">
						Would you like to receive our email from our marketing team?
					</p>
				</div>
				<div class="flex justify-center">
					<Button
						label="Set Password"
						htmlType="submit"
						className="bg-secondary text-[14px] md:text-[18px] font-medium text-primary rounded-sm px-6 sm:px-12 py-2 whitespace-nowrap hover:text-secondary hover:bg-primary"
					/>
				</div>
			</form>

			{#if status}
				<Loading desc="Creating Account" />
			{/if}
		</div>
	</div>
</main>
