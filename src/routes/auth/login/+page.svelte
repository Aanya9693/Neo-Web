<script>
	import Button from '$lib/buttons/button.svelte';
	import GoogleButton from '$lib/buttons/google.svelte';
	// import { onMount } from 'svelte';
	import Input from '$lib/components/form/Input.svelte';
	import Loading from '$lib/components/loading.svelte';
	import { superForm } from 'sveltekit-superforms/client';


	// import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte";

	export let data;
	
	const { form, enhance, errors, message, delayed } = superForm(data.form);
</script>

<!-- <Toaster /> -->
<main>
	<h1
		class="pt-2 text-secondary text-[18.368px] text-right !leading-[27.552px] trackning-[0.115px]"
	>
		API Documentation
	</h1>
	<div class="flex justify-center items-center flex-col pt-14 2xl:pt-16">
		<h1 class="text-[24px] font-medium !leading-6 uppercase text-secondary text-barlow mb-2">
			Welcome back!
		</h1>
		<div class="pt-4 2xl:pt-10 md:w-2/3">
			<p class="text-[16px] font-normal text-center text-[#081B2A] text-barlow mb-10">
				Sign In and securely store and manage your digital assets with Neucron.
			</p>

			{#if $message?.status == 'failed' && $message.content}
				<p class="bg-red-100 p-4 text-red-400 text-xs font-semibold rounded mb-2">
					{$message.content}
				</p>
			{/if}
			{#if $message?.status == 'success' && $message.content}
				<p class="bg-green-100 p-4 text-green-400 text-xs font-semibold rounded mb-2">
					{$message.content}
				</p>
			{/if}

			<!-- <SuperDebug data={$form} /> -->
			<form class="flex flex-col" method="POST" action="?/login" use:enhance novalidate>
				<div class="flex flex-col h-full">
					<Input
						type="text"
						label="email"
						name="email"
						bind:value={$form.email}
						errors={$errors?.email}
					/>
				</div>
				<div class="flex flex-col h-full mt-5">
					<Input
						label="password"
						name="password"
						htmlType="password"
						bind:value={$form.password}
						errors={$errors?.password}
					/>
				</div>
				<a
					href="/auth/forgot-password"
					class="text-secondary text-left mt-0.5 hover:underline text-barlow text-xs font-medium !leading-[14px]"
					>Forgot Password?</a
				>
				<div class="flex justify-center">
					<Button
						label="Sign In"
						htmlType="submit"
						className="bg-secondary text-[14px] md:text-[18px] font-medium text-primary rounded-sm px-6 sm:px-12 py-2 whitespace-nowrap hover:text-secondary hover:bg-primary"
					/>
				</div>
			</form>
			<div class="my-5 self-center text-center opacity-75 text-sm">
				Don’t have account ?
				<a href="/auth/signup" class="text-secondary text-md font-semibold hover:underline"
					>Sign Up</a
				>
			</div>

			<div
				class="my-14 w-full text-secondary my-10 border-dashed border-b-2 relative text-center horizontal-breaking-word"
			>
				<span
					class="px-2 text-secondary font-normal !leading-4 absolute -top-2 left-[35%] bg-white text-barlow"
					>Or Sign in With</span
				>
			</div>
			<div class="flex justify-center">
				<GoogleButton />
			</div>
			{#if $message?.status == 'success'}
				<Loading desc="Loading" />
				<p>Successfully logged in! Welcome back, {data?.user?.name}</p>
			{/if}
		</div>
	</div>
</main>
