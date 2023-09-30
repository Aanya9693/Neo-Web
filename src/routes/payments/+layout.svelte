<script>
	import PageHeader from '$lib/landing/productHeader.svelte';
	import Footer from '../../lib/footer.svelte';
	import Header from '../../lib/header.svelte';
	import { goto } from '$app/navigation';
	let APIDOCS = 'https://api.neucron.io/docs/';

	export let plan = {
		features: [
			{
				mode: 'Integrated',
				Instant: 'Online Transaction',
				Stream: 'Real-Time Transfers',
				Programmable: 'Conditional Payments',
				Micro: 'Tip Jars and Donation',
				Conditional: 'Conditional Time Payment',
				Automated: 'Automated subscription renewals',
				Advanced: 'Integrated payment gateways'
			},
			{
				mode: 'Route',
				Instant: 'Mass Payout',
				Stream: 'Subscription Billing',
				Programmable: 'Revenue Sharing',
				Micro: 'Micropayments',
				Conditional: 'Dynamic Affiliate Payment',
				Automated: 'Automated Bill Payment',
				Advanced: 'Marketplace transactions'
			},
			{
				mode: 'Fusion',
				Instant: 'Crowd Funding',
				Stream: 'Recurring Payment',
				Programmable: 'Escrow Transactions',
				Micro: 'In-App Purchases',
				Conditional: 'Escrow with conditional release',
				Automated: 'Automated payroll processing',
				Advanced: 'Payment gateway integrations'
			},
			{
				mode: 'Matrix',
				Instant: 'Shared Expenses',
				Stream: 'Live Streaming Subscription',
				Programmable: 'Collaborative Projects',
				Micro: 'Crowdsourced Funding',
				Conditional: 'Collaborative revenue sharing',
				Automated: 'Automated revenue distribution',
				Advanced: 'Cross-platform payment solutions'
			}
		]
	};
</script>

<header class="fixed top-0 w-full bg-transparent z-50">
	<Header />
</header>
<div class="absolute -left-44 -top-8 hidden md:block">
	<img src="/onboarding/arrow-l.svg" alt="arrow" />
</div>
<main class="md:mt-40 mt-24">
	<div class="items-center justify-center md:mb-20">
		<div
			class="px-2 font-barlow flex text-center justify-center relative flex-col items-center md:px-4 md:w-3/4 w-full mx-auto"
		>
			<PageHeader
				title="Effortless payments for your business, at scale"
				description="Neucron empowers businesses to Thrive, Grow, and Succeed with Seamless Payments and Scalable
					Financial Infrastructure."
			/>
			<div class="md:mt-8 md:flex justify-center text-center items-center md:mb-0 mb-10">
				<button
					type="button"
					class=" bg-secondary md:mr-4 text-[16px] text-center md:text-[18px] font-semibold leading-6 md:!leading-7 text-primary rounded-sm md:px-6 p-2 hover:text-secondary hover:bg-primary border-2 border-secondary hover:border-primary md:my-1 my-6"
					on:click={() => {
						goto(APIDOCS);
					}}
				>
					Talk to an Expert
				</button>
				<p class="text-secondary font-normal hover:underline" id="text">
					REQUEST A SANDBOX ACCOUNT
				</p>
			</div>
			<!-- <div
				class="font-barlow md:flex justify-center relative items-center my-10 px-4 md:px-0 w-full md:w-auto text-center md:text-left md:pb-10"
			> -->
		</div>
	</div>
	<div class="">
		<img src="/payment/small-arrow.svg" class="absolute top-36 md:hidden" alt="" />
		<p
			class="md:w-3/4 mx-auto w-full md:mb-8 mb-4 text-barlow text-secondary md:text-[40px] text-[20px] font-semibold md:px-2 text-center"
		>
			One Integration, Limitless Possibilites
		</p>
	</div>
	<div class="font-barlow md: w-full px-1">
		<div class="font-barlow md:w-full md:px-[80px] px-4 mb-10">
			<div
				class="table-wrapper grid-container md:text-[16px] text-[14px] text-center overflow-x-scroll"
			>
				<div
					class="font-semibold font-barlow items-center justify-center text-center flex bg-secondary text-[#FFFFFF] sticky top- z-10"
				>
					<h1 class="my-4">Mode / Types</h1>
				</div>
				<div
					class=" font-semibold font-barlow items-center justify-center text-center flex bg-secondary text-[#FFFFFF] sticky top-0 z-10"
				>
					<h1 class="my-4">Instant</h1>
				</div>
				<div
					class="font-semibold font-barlow items-center justify-center text-center flex bg-secondary text-[#FFFFFF] sticky top- z-10"
				>
					<h1 class="my-4">Stream</h1>
				</div>
				<div
					class=" font-semibold font-barlow items-center justify-center text-center flex bg-secondary text-[#FFFFFF] sticky top-0 z-10"
				>
					<h1 class="my-4">Programmable</h1>
				</div>
				<div
					class="font-semibold font-barlow items-center justify-center text-center flex bg-secondary text-[#FFFFFF] sticky top- z-10"
				>
					<h1 class="my-4">Micro</h1>
				</div>
				<div
					class=" font-semibold font-barlow items-center justify-center text-center flex bg-secondary text-[#FFFFFF] sticky top-0 z-10"
				>
					<h1 class="my-4">Conditional</h1>
				</div>
				<div
					class="font-semibold font-barlow items-center justify-center text-center flex bg-secondary text-[#FFFFFF] sticky top- z-10"
				>
					<h1 class="my-4">Automated</h1>
				</div>
				<div
					class=" font-semibold font-barlow items-center justify-center text-center flex bg-secondary text-[#FFFFFF] sticky top-0 z-10"
				>
					<h1 class="my-6">Advanced</h1>
				</div>

				<!-- Data rows -->
				{#each plan.features as feature, i}
					<div
						class="font-semibold grid-cell md:text-[16px] text-[14px] text-secondary {i % 2 === 0
							? 'even-row'
							: 'odd-row'}"
					>
						<h1 class=" md:my-2">{feature.mode}</h1>
					</div>
					<div
						class="md:text-[16px] text-[14px] text-secondary grid-cell {i % 2 === 0
							? 'even-row'
							: 'odd-row'}"
					>
						<h1 class=" md:my-2">{feature.Instant}</h1>
					</div>
					<div
						class="md:text-[16px] text-[14px] text-secondary grid-cell {i % 2 === 0
							? 'even-row'
							: 'odd-row'}"
					>
						<h1 class=" md:my-2">{feature.Stream}</h1>
					</div>
					<div
						class="md:text-[16px] text-[14px] text-secondary grid-cell {i % 2 === 0
							? 'even-row'
							: 'odd-row'}"
					>
						<h1 class="md:my-2">{feature.Programmable}</h1>
					</div>
					<div
						class="md:text-[16px] text-[14px] text-secondary grid-cell {i % 2 === 0
							? 'even-row'
							: 'odd-row'}"
					>
						<h1 class=" md:my-2">{feature.Micro}</h1>
					</div>
					<div
						class="md:text-[16px] text-[14px] text-secondary grid-cell {i % 2 === 0
							? 'even-row'
							: 'odd-row'}"
					>
						<h1 class=" md:my-2">{feature.Conditional}</h1>
					</div>
					<div
						class="md:text-[16px] text-[14px] text-secondary grid-cell {i % 2 === 0
							? 'even-row'
							: 'odd-row'}"
					>
						<h1 class=" md:my-2">{feature.Automated}</h1>
					</div>
					<div
						class="md:text-[16px] text-[14px] text-secondary grid-cell {i % 2 === 0
							? 'even-row'
							: 'odd-row'}"
					>
						<h1 class=" md:my-2">{feature.Advanced}</h1>
					</div>
				{/each}
			</div>
		</div>

		<slot />
	</div>
</main>
<Footer />

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	.grid-container {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
	}

	.grid-cell {
		display: flex;
		justify-content: center;
		align-items: center;
		/* border-right: 1px solid #979797; */
		/* padding: 16px; */
	}
	.table-wrapper {
	}
	.odd-row {
		background-color: #dfe6ed;
	}

	.even-row {
		background-color: #ffffff;
	}

	.table-wrapper {
		border: 1px solid #979797;
		width: 100%;
		overflow-x: auto;
	}

	.grid-container {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: repeat(6, auto);
		/* background-color: [#FFFFFF]; */
		/* border-collapse: collapse; */
	}

	.grid-cell {
		padding: 12px 4px;
		border-left: 0.2px solid #112d44;
	}

	/* Sticky heading row */
	.grid-container > :first-child {
		position: sticky;
		top: 0;
		z-index: 1;
	}

	/* Sticky heading column */
	.grid-container > div:nth-child(8n + 1) {
		position: sticky;
		left: 0;
		z-index: 1;
	}
</style>
