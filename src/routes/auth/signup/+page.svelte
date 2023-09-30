<script context="module">
	import Button from '$lib/buttons/button.svelte';
	import Input from '$lib/components/form/Input.svelte';
	import GoogleButton from '$lib/buttons/google.svelte';
	import CopyToClipboard from '$lib/copy-to-clipboard.svelte';
</script>

<script>
	import { userInfo } from '$lib/stores/UserStore';
	import Loading from '$lib/components/loading.svelte';
	import { goto, invalidateAll } from '$app/navigation';
	import { applyAction, enhance } from '$app/forms';
	import toast, { Toaster } from 'svelte-french-toast';

	export let data;
	export let form;

	$: if (!form?.success && form?.message) {
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
		goto(`/auth/verify?email=${form?.message}`);
	};
</script>

<Toaster />
	<!-- {#if data.userInfo?.accessToken}
		<div class="h-full w-full">
			<h2 class="bg-[#141d24] p-2 rounded mb-6">👍 Successfully, logged in</h2>
			<CopyToClipboard label="Your Access Token" content={data.userInfo.accessToken} />
		</div>
	{:else}
		<form
			class="flex flex-col"
			method="POST"
			action="?/register"
			use:enhance={() => {
				return async ({ result }) => {
					invalidateAll();
					await applyAction(result);
				};
			}}
		>
			<div class="flex flex-col h-full mt-5">
				<Input
					type="text"
					label="email"
					name="email"
					value={form?.data?.email ?? ''}
					errors={form?.errors?.email}
				/>
			</div>
			<div class="flex justify-center">
				<Button label="Sign Up" htmlType="submit" className="bg-primary text-primary-dark w-full" />
			</div>
		</form>
		<div class="my-5 self-center text-center opacity-75 text-sm">
			Allready have an account ?
			<a href="/public/authentication/signin" class="text-primary hover:underline">Sign In</a>
		</div>

		<div class="w-full my-10 border-b border-b-solid text-center horizontal-breaking-word">
			<span class="px-2 text-white bg-primary-dark">Or Sign in With</span>
		</div>
		<div class="flex justify-center">
			<GoogleButton />
		</div>
		{#if status}
			<Loading desc="Creating Account" />
		{/if}
	{/if}
	<style>
		.horizontal-breaking-word {
			line-height: 0.1em;
			margin: 10px 0 20px;
		}
	</style> -->

<main>
	<h1
		class="text-secondary text-[18.368px] text-right font-medium !leading-[27.552px] trackning-[0.115px]"
	>
		<a href="https://api.neucron.io/docs/"> API Documentation </a>
	</h1>
	<div class="flex justify-center items-center flex-col pt-16 2xl:pt-16">
		<h1 class="text-2xl font-medium !leading-6 uppercase text-secondary text-barlow mb-2">
			Create your account
		</h1>
		<div class="text-center pt-4 2xl:pt-10 md:w-2/3">
			<p
				class="text-base font-medium text-center !leading-6 mb-8 text-[#081B2A] text-barlow"
			>
				Create, Manage, and Secure your digital assets with Neucron, the wallet that does it all.
			</p>
			<form
				class="flex flex-col"
				method="POST"
				action="?/register"
				use:enhance={() => {
					return async ({ result }) => {
						invalidateAll();
						await applyAction(result);
					};
				}}
			>
				<div class="flex flex-col h-full">
					<Input
						type="text"
						label="email"
						name="email"
						value={form?.data?.email ?? ''}
						errors={form?.errors?.email}
					/>
				</div>
				<div class="flex space-x-2 mt-2">
					<input type="checkbox" name="" id="" />
					<p class="text-[#081B2A] text-barlow text-[10px] font-normal !leading-4">
						I accept the Terms Conditions and Privacy Policy
					</p>
				</div>
				<div class="flex justify-center md:mt-10">
					<Button
						label="Sign Up"
						htmlType="submit"
						className="bg-secondary text-[14px] md:text-[18px] font-medium text-primary rounded-sm px-6 sm:px-12 py-2 whitespace-nowrap hover:text-secondary hover:bg-primary"

					/>
				</div>
			</form>

			<div class="my-5 self-center text-center opacity-75 text-sm">
				Already have an account?
				<a
					href="/auth/login"
					class="text-secondary text-md font-semibold hover:underline">Sign In</a
				>
			</div>

			<div
				class="w-full my-10 border-dashed border-b-2 relative text-center horizontal-breaking-word"
			>
				<span
					class="px-2 text-secondary text-base font-normal !leading-4 absolute -top-2 left-[35%] bg-white text-barlow"
					>Or Sign in With</span
				>
			</div>
			<div class="flex justify-center">
				<GoogleButton />
			</div>
			{#if status}
				<Loading desc="Loading" />
				<p>Successfully logged in! Welcome back, {data?.user?.name}</p>
			{/if}
		</div>
	</div>
</main>
