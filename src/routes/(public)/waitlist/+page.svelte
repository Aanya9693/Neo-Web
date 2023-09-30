<script>
	import Waitlistcard from '$lib/landing/waitlistcard.svelte';
	import SectionHeader from '$lib/landing/sectionHeader.svelte';
	import PageHeader from '$lib/landing/PageHeader.svelte';
	import Security from '$lib/landing/svg/security.svelte';
	import Asset from '$lib/landing/svg/asset.svelte';
	import Scalability from '$lib/landing/svg/scalability.svelte';
	import Operational from '$lib/landing/svg/operational.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	export let data = {};
	const { form, enhance, errors, message, delayed } = superForm(data.form);
	const cards = [
		{
			title: 'Security',
			desc: 'Automatic payments help you to arrange payments on a certain date without doing it manually again.',
			img: Security
		},
		{
			title: 'Asset tracking',
			desc: 'Automatic payments help you to arrange payments on a certain date without doing it manually again.',
			img: Asset
		},
		{
			title: 'Scalability',
			desc: 'Automatic payments help you to arrange payments on a certain date without doing it manually again.',
			img: Scalability
		},
		{
			title: 'Operational Efficiency',
			desc: 'Automatic payments help you to arrange payments on a certain date without doing it manually again.',
			img: Operational
		}
	];
</script>

<div class="mt-24">
	<PageHeader
		title="Issue, manage, and transfer <br> digital assets"
		description="A unique solution catering to organizations, governmental sectors, businesses, and <br> individual users."
	/>
	<div class="absolute right-0 -top-24 hidden md:block">
		<img src="/landing/arrow-r.svg" alt="arrow" />
	</div>
	<div class="absolute left-0 -top-24 hidden md:block">
		<img src="/landing/arrow-l.svg" alt="arrow" />
	</div>
	<div class="flex justify-center relative flex-col items-center my-9 px-4 md:px-0">
		{#if !data.waitListJoined}
			<form
				class="relative flex flex-row items-center w-full md:w-auto my-2"
				action="/waitlist?/joinWaitlist"
				method="POST"
				use:enhance
				novalidate
			>
				<input
					type="emailID"
					name="emailID"
					bind:value={$form.emailID}
					aria-invalid={$errors.emailID ? 'true' : undefined}
					class="text-white bg-secondary w-full md:w-[390px] py-4 px-6 rounded-full"
				/>
				<button
					type="submit"
					class="absolute top-1/2 transform -translate-y-1/2 text-lg right-1 bg-[#06E7ED] text-[#112D44] font-semibold py-2 px-5 rounded-3xl"
					>Join the waitlist</button
				>
			</form>
		{:else}
			<div class="text-white bg-secondary w-full md:w-[390px] py-2 px-3 rounded-full">
				<p class="bg-[#06E7ED] text-secondary font-semibold py-3 px-6 rounded-3xl text-center">
					You have joined our waitlist!
				</p>
			</div>
		{/if}
		{#if $errors.emailID != null}
			<span class="text-red-400 text-xs font-medium">{$errors.emailID[0]}</span>
		{/if}
		{#if $message?.status == 'failed' && $message.content}
			<p class="bg-red-100 p-4 text-red-400 text-xs font-semibold rounded mb-2">
				{$message.content}
			</p>
		{/if}
		<!-- {#if $message?.status == 'success' && $message.content}
			<p class="bg-green-100 p-4 text-green-400 text-xs font-semibold rounded mb-2">
				{$message.content}
			</p>
		{/if} -->
		<div class="md:m-16 relative">
			<img src="/landing/dashboard-coming-soon.png" class="relative" alt="" />
			<div class="absolute inset-0 bg-[#112D44]/70 flex items-center justify-center coming-soon">
				Coming Soon....
			</div>
		</div>
	</div>

	<section class="relative md:mb-40 mx-auto max-w-[1440px]">
		<div class="md:px-20 text-center justify-center items-center">
			<!-- <div class="my-8 md:mb-32 text-center ">
						<div class="my-5 md:text-center justify-center items-center mx-auto md:w-3/5">
							<p class="mb-5 text-2xl md:text-[40px] md:whitespace-nowrap font-semibold text-secondary text-center">Features</p>
							<p class="text-xs md:text-xl font-medium text-grey">A unique solution catering to organizations, governmental sectors, businesses, and individual users</p>
						</div>
				</div> -->
			<div class="md:mb-24">
				<SectionHeader
					title="Features"
					description="A unique solution catering to organizations, governmental sectors, businesses, <br>and individual users"
				/>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-8 md:px-0 my-12">
				{#each cards as card, index}
					<Waitlistcard {card} {index} />
				{/each}
			</div>
		</div>
	</section>
</div>

<style>
	.coming-soon {
		color: #f0f1f5;
		text-align: center;
		font-family: Barlow;
		font-size: 48px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		text-transform: capitalize;
	}
</style>
