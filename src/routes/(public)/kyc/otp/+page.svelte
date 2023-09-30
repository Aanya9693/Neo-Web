<script>
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	// @ts-ignore
	import Button from '$lib/buttons/button.svelte';
	import Title from '$lib/title.svelte';
	import SvelteOtp from '@k4ung/svelte-otp';

	export let data;
	export let form;
	let otp = '';
	$: console.log(otp);
</script>

<div class="mt-16">
	<Title title="Phone Number" subtitle="Enter the 6-digit code we have send on +91 9131864894" />
	<form
		method="POST"
		action="?/register"
		use:enhance={() => {
			return async ({ result }) => {
				invalidateAll();
				await applyAction(result);
			};
		}}
	>
		<div class="pt-4">
			<input type="hidden" name="otp" value={otp} />
			<SvelteOtp
				bind:value={otp}
				inputClass="rounded-md bg-gray-800 text-primary text-2xl font-bold"
				separatorClass="border-white"
				inputStyle="width:55px"
				wrapperClass="flex justify-between"
			/>
			<!-- <input
				type="text"
				class={`w-full h-[46px] border border-[#D9D9D94A] button-strip here bg-[#D9D9D94A] rounded-[8px] text-center text-[20px] font-semibold`}
				name="otp"
				id=""
			/>
			{#if form?.invalid}
				<p class="text-red-700 text-left mt-1">Otp is required field</p>
			{/if} -->
		</div>
		<div class="mt-4 self-center opacity-75 text-sm mb-1">
			Not received code yet ? <a href="/public/kyc/phonenumber" class="text-primary hover:underline"
				>Re-Send
			</a>
		</div>
		<Button label="Verify" htmlType="submit" />
	</form>
</div>

<style>
	.here {
		letter-spacing: 2vw;
		border-style: dotted solid dashed double;
	}
	.hide {
		caret-color: transparent;
	}
</style>
