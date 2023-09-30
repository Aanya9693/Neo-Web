<script>
	import Modecard from '$lib/landing/modecard.svelte';
	import PageHeader from '$lib/landing/PageHeader.svelte';
	import SectionHeader from '$lib/landing/sectionHeader.svelte';
	// import Security from '$lib/landing/svg/security.svelte';
	// import Asset from '$lib/landing/svg/asset.svelte';
	// import Scalability from '$lib/landing/svg/scalability.svelte';
	// import Operational from '$lib/landing/svg/operational.svelte';
	const cards = [
		{
			title: 'INTEGRATED PAYMENTS',
			desc: 'Route enables businesses to streamline one-to-many payments with ease. With our intuitive platform, you can efficiently distribute funds to multiple recipients, whether its commissions, royalties, '
			// img: Security
		},
		{
			title: 'INTEGRATED PAYMENTS',
			desc: 'Route enables businesses to streamline one-to-many payments with ease. With our intuitive platform, you can efficiently distribute funds to multiple recipients, whether its commissions, royalties, '
			// img: Security
		},
		{
			title: 'INTEGRATED PAYMENTS',
			desc: 'Route enables businesses to streamline one-to-many payments with ease. With our intuitive platform, you can efficiently distribute funds to multiple recipients, whether its commissions, royalties, '
			// img: Security
		},
		{
			title: 'INTEGRATED PAYMENTS',
			desc: 'Route enables businesses to streamline one-to-many payments with ease. With our intuitive platform, you can efficiently distribute funds to multiple recipients, whether its commissions, royalties, '
			// img: Security
		}
	];
	const cards1 = [
		{
			title: 'INTEGRATED PAYMENTS',
			desc: 'Route enables businesses to streamline one-to-many payments with ease. With our intuitive platform, you can efficiently distribute funds to multiple recipients, whether its commissions, royalties, '
			// img: Security
		}
	];
	const cards2 = [
		{
			title: 'INTEGRATED PAYMENTS',
			desc: 'Route enables businesses to streamline one-to-many payments with ease. With our intuitive platform, you can efficiently distribute funds to multiple recipients, whether its commissions, royalties, '
			// img: Security
		},
		{
			title: 'INTEGRATED PAYMENTS',
			desc: 'Route enables businesses to streamline one-to-many payments with ease. With our intuitive platform, you can efficiently distribute funds to multiple recipients, whether its commissions, royalties, '
			// img: Security
		},
		{
			title: 'INTEGRATED PAYMENTS',
			desc: 'Route enables businesses to streamline one-to-many payments with ease. With our intuitive platform, you can efficiently distribute funds to multiple recipients, whether its commissions, royalties, '
			// img: Security
		},
		{
			title: 'INTEGRATED PAYMENTS',
			desc: 'Route enables businesses to streamline one-to-many payments with ease. With our intuitive platform, you can efficiently distribute funds to multiple recipients, whether its commissions, royalties, '
			// img: Security
		},
		{
			title: 'INTEGRATED PAYMENTS',
			desc: 'Route enables businesses to streamline one-to-many payments with ease. With our intuitive platform, you can efficiently distribute funds to multiple recipients, whether its commissions, royalties, '
			// img: Security
		},
		{
			title: 'INTEGRATED PAYMENTS',
			desc: 'Route enables businesses to streamline one-to-many payments with ease. With our intuitive platform, you can efficiently distribute funds to multiple recipients, whether its commissions, royalties, '
			// img: Security
		}
	];
</script>

<div class="items-center justify-center mt-24">
	<PageHeader
		title="Effortless payments for your business, <br> at scale"
		description="Neucron empowers businesses to Thrive, Grow, and Succeed with Seamless  Payments <br> and Scalable Financial Infrastructure."
	/>
	<div class="absolute right-0 -top-24 hidden md:block">
		<img src="/landing/arrow-r.svg" alt="arrow" />
	</div>
	<div class="absolute left-0 -top-24 hidden md:block">
		<img src="/landing/arrow-l.svg" alt="arrow" />
	</div>

	<div
		class="md:flex justify-center relative items-center my-10 px-4 md:px-0 md:flex w-full md:w-auto text-center md:text-left"
	>
		<button
			type="button"
			class="bg-secondary text-[#06E7ED] md:mr-12 font-semibold py-3 px-6 md:my-0 my-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
			>Talk to an Expert</button
		>
		<p class="font-semibold">REQUEST A SANDBOX ACCOUNT</p>
	</div>

	<div class="">
		<img src="/landing/modebg.svg" alt="" />
	</div>
</div>

<section class="relative px-4 md:px-0">
	<div class="py-2 md:py-16 md:px-20 text-center justify-center items-center">
		<div class="my-8 md:my-12 md:mb-[80px] flex justify-center">
			<div class="md:w-3/4">
				<p class="text-xs md:text-xl md:mb-5 font-medium text-grey !leading-3">Unified Platform</p>
				<p class="text-secondary md:text-[40px] font-bold px-2 text-center">
					Seamless Integration for develop Unparalleled Experience for their customers
				</p>
			</div>
		</div>
		<div class="absolute right-0 top-12 hidden md:block">
			<img src="/landing/tiltedarrow-r.svg" alt="arrow" />
		</div>
		<div class="absolute left-0 top-12 hidden md:block">
			<img src="/landing/tiltedarrow-l.svg" alt="arrow" />
		</div>
		<div class="grid md:grid-cols-2 gap-6 px-8 md:px-0">
			{#each cards as card}
				<Modecard {card} />
			{/each}
		</div>
	</div>
</section>

<section class="relative px-4 md:px-0 bg-[#F0F1F5]">
	<div
		class="ml-40 absolute inset-0 z-0 bg-no-repeat bg-center bg-contain"
		style="background-image: url('/landing/modelogo.svg'); background-size: auto;"
	/>
	<div class="py-2 md:py-16 md:px-20 text-center justify-center items-center">
		<div class="my-8 md:my-12 text-center md:mb-[10px]">
			<p class="text-xs md:text-xl font-medium text-grey !leading-3">Unified Platform</p>
			<div class="my-5 flex justify-center">
				<div class="md:mx-[20px]">
					<p
						class="md:px-[20px] text-center w-full text-secondary md:text-[40px] text-center font-bold px-2"
					>
						Seamless Integration for developers,Unparalleled Experience for their customers
					</p>
				</div>
			</div>
		</div>
		<div class="absolute right-0 top-14 hidden md:block">
			<img src="/landing/tiltedarrow-r.svg" alt="arrow" />
		</div>
		<div class="absolute left-0 top-14 hidden md:block">
			<img src="/landing/tiltedarrow-l.svg" alt="arrow" />
		</div>

		<div class="w-full md:flex py-2 md:py-5">
			<div
				class="w-full md:w-3/5 my-5 justify-between items-center text-center md:text-start md:w-2/3 my-8 md:my-12 md:mb-[50px] md:mr-20"
			>
				<p class="text-secondary md:text-[35px] font-semibold md:mb-5">
					Methods of payments Seamless Integration for developers,Unparalleled Experience for their
					customers
				</p>
				<p class="text-xs md:text-lg md:max-w-[910px]">
					Unlock the benefits of blockchain technology - transparency, security, and immutability,
					without the need for technical expertise or understanding or holding of cryptocurrencies.
				</p>
			</div>
			<div class="md:w-2/5 md:px-0 px-8">
				{#each cards1 as card}
					<Modecard {card} />
				{/each}
			</div>
		</div>

		<!-- --cards-- -->
		<div class="grid md:grid-cols-3 gap-6 px-8 md:px-0">
			{#each cards2 as card}
				<Modecard {card} />
			{/each}
		</div>
	</div>
</section>