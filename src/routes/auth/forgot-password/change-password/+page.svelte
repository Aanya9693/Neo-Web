<script>
	import Button from '$lib/buttons/button.svelte';
	import GoogleButton from '$lib/buttons/google.svelte';
	import { onMount } from 'svelte';
	import Input from '$lib/components/form/Input.svelte';
	import Loading from '$lib/components/loading.svelte';
	import { applyAction, enhance } from '$app/forms';
	import { goto, invalidateAll } from '$app/navigation';
	import toast, { Toaster } from 'svelte-french-toast';
	import Logo from '$lib/logo.svelte';
	import Popinput from '$lib/components/form/popinput.svelte';

	export let data;
	export let form;
	$: status = false;
	$: if (form?.success) {
		status = true;
		setTimeout(alertFunc, 1000);
	}
	const alertFunc = () => {
		status = false;
		goto(`/auth/forgot-password/successful`);
	};
</script>

<main class="md:flex bg-[#081B2A]">
	<div class="w-full bg-[#081B2A] h-screen md:w-1/2 bg-[#081B2A] pb-5 flex">
		<div class="absolute top-0 left-0 p-14">
			<Logo size="big" />
		</div>
		<div class="absolute top-0 left-0 md:w-1/2 h-full flex justify-center">
			<div class="flex items-center">
				<img src="/resetpass3.svg" alt="" />
			</div>
		</div>
	</div>
	<div
		class="bg-white md:w-1/2 flex justify-center items-center"
		style="border-radius: 32px 0px 0px 32px;"
	>
		<div class="absolute top-0 right-0 p-14">
			<h1 class="text-secondary text-[18.368px] text-right !leading-[27.552px] trackning-[0.115px]">
				API Documentation
			</h1>
		</div>
		<div class="flex justify-center items-center flex-col pt-16 2xl:pt-16">
			<h1 class="text-[24px] font-medium !leading-6 text-secondary text-barlow mb-2">
				NEW PASSWORD
			</h1>
			<div class="pt-4 2xl:pt-5 md:w-3/4">
				<p class="text-[16px] font-medium text-center text-[#081B2A] text-barlow mb-8">
					Please check your email for next steps to reset your password
				</p>
				<form
					class="flex flex-col font-medium"
					method="POST"
					action="?/reset"
					use:enhance={() => {
						return async ({ result }) => {
							invalidateAll();
							await applyAction(result);
						};
					}}
				>
					<input type="hidden" name="token" value={data?.token} />
					<div class="flex flex-col h-full mt-5">
						<Popinput
							label="Password"
							name="password"
							htmlType="password"
							errors={form?.errors?.password}
						/>
					</div>
					<div class="flex flex-col h-full mt-5">
						<Popinput
							label="Re-type Password"
							name="cPassword"
							htmlType="password"
							errors={form?.errors?.password}
							class={`mx-4`}
						/>
					</div>
					<div class="flex justify-center md:mt-12">
						<Button
							label="Reset Password"
							htmlType="submit"
							className="bg-secondary text-[14px] md:text-[16px] font-medium text-primary rounded-sm px-6 sm:px-10 py-2 hover:text-secondary hover:bg-primary"
						/>
					</div>
				</form>
				<!-- {#if status}
                    <Loading desc="Loading" />
                    <p>Successfully logged in! Welcome back, {data?.user?.name}</p>
                {/if} -->
			</div>
		</div>
	</div>
</main>
