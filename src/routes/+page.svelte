<script>
	//analytics
	import { analyticsStore } from '$lib/stores/analyticsStore';
	const new_event = {
		id: '#neucronAnalytics',
		data: { app: 'neucron-web' },
		event: 'landing-page',
		type: 'event'
	};
	analyticsStore.update((existing_events) => [...existing_events, new_event]);
	//end analytics
	// import { animate, inView } from 'motion';
	import Select from 'svelte-select';
	import SectionHeader from '$lib/landing/sectionHeader.svelte';
	import Testimonials from '$lib/landing/testimonials.svelte';
	import Card from '$lib/landing/card.svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import Features from '$lib/landing/features.svelte';
	import Footer from '../lib/footer.svelte';
	import Header from '../lib/header.svelte';
	import HeroIllustration from '../lib/landing/HeroIllustration.svelte';
	import CodeIllustration from '../lib/landing/Codeillustration.svelte';
	const APIURL = 'https://api.neucron.io/docs/';
	export let data;
	import ContactInput from '$lib/components/form/ContactInput.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	const { form, enhance, errors, message, delayed } = superForm(data.form);
	const cards = [
		{
			title: 'Exceptional User Experience',
			desc: 'Intuitive Wallet Creation: Easily create wallets for users who are new to digital assets. Enhanced User Engagement: Drive adoption and retention with a user-friendly and intuitive interface.',
			img: '/landing/security.svg',
			newimg: '/landing/newsecurity.svg',
			pattern: '/landing/landingpattern1.svg',
			newpattern: '/landing/newpattern1.svg'
		},
		{
			title: 'Rapid Launch in Mins',
			desc: 'With our Developer-First approach, simplified integration, and quick setup, Neucron enables  payment solutions in 10 minutes for faster time-to-market.',
			img: '/landing/Assest.svg',
			newimg: '/landing/newasset.svg',
			pattern: '/landing/landingpattern2.svg',
			newpattern: '/landing/newpattern2.svg'
		},
		{
			title: 'Enterprise Grade Infrastructure',
			desc: 'Experience Scalable, Audited, and Secure infrastructure: our robust infrastructure effortlessly handles high transaction volumes, while audited smart contracts provide reliability and security for your digital assets.',
			img: '/landing/opperational.svg',
			newimg: '/landing/newoper.svg',
			pattern: '/landing/landingpattern3.svg',
			newpattern: '/landing/newpattern3.svg'
		}
	];
	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}

	const reasons = [
		{
			value: 'Talk to expert - API',
			label: 'Talk to expert - API'
		},
		{
			value: 'Talk to expert - Neucron Pay',
			label: 'Talk to expert - Neucron Pay'
		},
		{
			value: 'Talk to expert - Assetyzer',
			label: 'Talk to expert - Assetyzer'
		},
		{
			value: 'Talk to expert - Neo',
			label: 'Talk to expert - Neo'
		},
		{
			value: 'Partnership',
			label: 'Partnership'
		},
		{
			value: 'Support Request',
			label: 'Support Request'
		},
		{
			value: 'Feature Request',
			label: 'Feature Request'
		},
		{
			value: 'Bug Report',
			label: 'Bug Report'
		},
		{
			value: 'Feedback',
			label: 'Feedback'
		}
	];

	const reasonsOnly = [
		'Talk to expert - API',
		'Talk to expert - Neucron Pay',
		'Talk to expert - Assetyzer',
		'Talk to expert - Neo',
		'Partnership',
		'Support Request',
		'Feature Request',
		'Bug Report',
		'Feedback'
	];

	let selectedReason;
	const onReasonChange = (e) => {
		$form.looking_for = e.detail.value;
	};
	const onReasonClear = (e) => {
		$form.looking_for = "";
	}
</script>

<div class="landing-page text-barlow flex flex-col justify-center items-center" id="fullpage">
	<header class="fixed top-0 w-full bg-transparent z-50">
		<Header />
	</header>
	<section
		data-aos="fade-in"
		class="font-barlow px-2 xl:px-0 flex flex-col xl:flex-row xl:justify-between items-center relative mt-24 max-w-[1280px] mx-auto w-full"
	>
		<div class="w-full m-auto mb-6 xl:mb-0 md:w-[560px] md:mt-4 float-left">
			<div
				class="w-full text-secondary text-[32px] lg:text-[64px] text-center xl:text-start mt-4 md:mt-12 font-semibold xl:leading-[4.8rem]"
			>
				Digital Assets, <br /> Re-imagined: Minus the Crypto, Plus the Ease
			</div>
			<div class="relative mx-2 mb-8">
				<img src="/landing/arrow-hero-bottom.svg" loading="lazy" alt="down-long" class="" />
			</div>
			<div class="relative w-full md:w-[600px]">
				<div class="text-[#33444F] text-base md:text-xl xl:text-start text-center !leading-7">
					<p>
						Seamless, Secure and developer friendly digital wallet <br /> management infrastructure for
						your business
					</p>
				</div>
				<div class="scale-90 xl:hidden mt-4 md:-mb-20">
					{#if browser}
						<HeroIllustration />
					{/if}
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 px-10 md:px-0 xl:my-11">
					<div class="md:mr-10">
						<button
							type="button"
							class="bg-secondary text-base md:text-lg font-semibold leading-6 md:!leading-7 text-primary rounded-md mb-6 md:mb-0 px-5 py-3 w-full whitespace-nowrap hover:text-secondary border-2 hover:bg-primary"
							on:click={() => {
								goto('/waitlist');
							}}
						>
							Start Building Today
						</button>
					</div>
					<div class="text-center">
						<p
							class="text-[#33444F] font-normal !leading-6 text-base text-center md:text-center md:pr-20"
						>
							Secure your spot in the future of digital asset revolution!
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="w-full hidden xl:block">
			{#if browser}
				<HeroIllustration />
			{/if}
		</div>
	</section>
	<section
		class=" px-2 xl:px-0 md:mb-0 my-16 flex flex-col items-center max-w-[1280px] mx-auto w-full"
	>
		<div class="text-center px-6 md:px-0 md:mx-[20px] m-auto col-span-8">
			<p class="my-2 text-2xl md:text-[40px] font-semibold text-secondary">
				One API suite for all your Business Needs
			</p>
			<p
				class="my-2 text-xs md:text-[18px] font-normal leading-4 md:!leading-6 text-[#33444F] md:mt-2"
			>
				All the infrastructure you need on a single platform
			</p>
		</div>
		<div class="flex flex-col w-full items-center max-w-[1280px] px-2">
			<div
				class="flex flex-col-reverse justify-center xl:justify-between items-center xl:flex-row w-full"
			>
				<div
					data-aos="fade-up-right"
					class="text-center xl:text-start max-w-[80vw] md:max-w-xl mt-6 xl:mt-32 md:mt-0 md:py-10 w-full"
				>
					<p class="text-2xl md:text-[40px] whitespace-nowrap font-semibold text-secondary mb-8">
						Digital Assets Management
					</p>
					<!-- <p
						class="text-2xs text-center xl:text-left md:whitespace-nowrap font-semibold text-secondary mt-6"
					>
						Wallet as a service
					</p> -->
					<p
						class="text-xs md:text-xl text-[#33444F] text-center xl:text-left font-normal my-2 leading-5 md:!leading-8"
					>
						Everything you need to harness blockchain's power without the crypto complexities. We
						empower businesses across the spectrum, providing wallets to manage digital assets
						seamlessly.
					</p>
					<div class="flex flex-wrap justify-center md:justify-start">
						<div class="flex flex-col md:flex-row whitespace-nowrap w-full text-left">
							<div class="flex-col mr-6">
								<div class="flex items-center my-5">
									<img src="/landing/wallet.svg" alt="Icon 1" loading="lazy" class="w-5 h-5 md:w-6 md:h-6 mr-2" />
									<p class="text-2xs md:text-lg text-secondary font-medium">Wallet Creation</p>
								</div>
								<div class="flex items-center my-5">
									<img src="/landing/asset3.svg" alt="Icon 1" loading="lazy" class="w-5 h-5 md:w-6 md:h-6 mr-2" />
									<p class="text-2xs md:text-lg text-secondary font-medium">Asset Management</p>
								</div>
								<div class="flex items-center my-5">
									<img src="/landing/asset2.svg" alt="Icon 1" loading="lazy" class="w-5 h-5 md:w-6 md:h-6 mr-2" />
									<p class="text-2xs md:text-lg text-secondary font-medium">
										Security & Encryption
									</p>
								</div>
							</div>
							<div class="flex-col -mt-5 md:mt-0">
								<div class="flex items-center my-5">
									<img src="/landing/asset2.svg" alt="Icon 1" loading="lazy" class="w-5 h-5 md:w-6 md:h-6 mr-2" />
									<p class="text-2xs md:text-lg text-secondary font-medium">
										Transaction Processing
									</p>
								</div>
								<div class="flex items-center my-5">
									<img src="/landing/asset4.svg" alt="Icon 1" loading="lazy" class="w-5 h-5 md:w-6 md:h-6 mr-2" />
									<p class="text-2xs md:text-lg text-secondary font-medium">
										Integration and Interoperability
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="flex items-center my-5">
						<!-- <p class="text-2xs md:text-lg text-secondary font-semibold hover:underline">Learn More</p> -->
						<a href="/assets" class="text-2xs md:text-lg text-secondary font-medium hover:underline"
							>Learn More</a
						>

						<img src="/landing/learnmore.svg" alt="Icon 1" loading="lazy" class="w-3 h-3 md:w-4 md:h-4 ml-2" />
					</div>
					<div class="flex items-center justify-center md:justify-normal">
						<button
							type="button"
							class="bg-secondary mr-1 text-[14px] md:text-[18px] font-semibold leading-6 md:!leading-7 text-primary rounded-md px-6 py-2 sm:px-10 sm:py-3 whitespace-nowrap hover:text-secondary hover:bg-primary border-2 border-secondary hover:border-primary"
							on:click={() => {
								goto("https://timechain.gitbook.io/neucron/");
							}}
						>
							Start Building
						</button>
						<a
							type="button"
							href="#contactForm"
							class="text-[14px] ml-1 md:text-[18px] font-semibold leading-6 md:!leading-7 text-secondary rounded-md px-6 py-2 sm:px-10 sm:py-3 whitespace-nowrap hover:text-secondary border-2 border-secondary hover:border-primary hover:bg-primary"
							on:click|preventDefault={scrollIntoView}
						>
							Talk to an Expert
						</a>
					</div>
				</div>
				<img
					data-aos="zoom-in"
					data-aos-delay="300"
					src="/landing/digital-illustraition.gif"
					loading="lazy"
					alt="Terminal"
					class="w-[70vw] max-w-xl m-auto xl:m-0 mt-20 xl:float-right"
				/>
			</div>
			<div class="flex flex-col justify-between items-center xl:flex-row w-full">
				<img
					data-aos="zoom-in-right"
					data-aos-delay="300"
					loading="lazy"
					src="/landing/payment-illustration.gif"
					alt="realTime"
					class="w-[70vw] max-w-xl m-auto xl:m-0 mt-10 xl:float-left"
				/>
				<div
					data-aos="fade-up"
					class="text-center xl:text-start max-w-[80vw] md:max-w-xl mt-6 xl:mt-32 md:mt-0 md:py-10 w-full"
				>
					<p class="text-2xl md:text-[40px] whitespace-nowrap font-semibold text-secondary mb-8">
						Swift Payment Solutions
					</p>

					<p
						class="text-xs md:text-xl text-[#33444F] text-center xl:text-left font-normal my-2 leading-5 md:!leading-8"
					>
						Everything you need to harness blockchain's power without the crypto complexities. We
						empower businesses across the spectrum, providing wallets to manage digital assets
						seamlessly.
					</p>
					<div class="flex flex-wrap justify-center md:justify-start">
						<div class="flex flex-col md:flex-row whitespace-nowrap w-full text-left">
							<div class="flex-col mr-6">
								<div class="flex items-center my-5">
									<img src="/landing/wallet2.svg" alt="Icon 1" loading="lazy" class="w-5 h-5 md:w-6 md:h-6 mr-2" />
									<p class="text-2xs md:text-lg text-secondary font-medium">Instant Payments</p>
								</div>
								<div class="flex items-center my-5">
									<img src="/landing/wallet3.svg" alt="Icon 1" loading="lazy" class="w-5 h-5 md:w-6 md:h-6 mr-2" />
									<p class="text-2xs md:text-lg text-secondary font-medium">Conditional Payments</p>
								</div>
								<div class="flex items-center my-5">
									<img src="/landing/music.svg" alt="Icon 1" loading="lazy" class="w-5 h-5 md:w-6 md:h-6 mr-2" />
									<p class="text-2xs md:text-lg text-secondary font-medium">Streaming Payments</p>
								</div>
								<div class="flex items-center my-5">
									<img src="/landing/wallet8.svg" alt="Icon 1" loading="lazy" class="w-5 h-5 md:w-6 md:h-6 mr-2" />
									<p class="text-2xs md:text-lg text-secondary font-medium">
										Programmable payments
									</p>
								</div>
							</div>
							<div class="flex-col -mt-5 md:-mt-0">
								<div class="flex items-center my-5">
									<img src="/landing/wallet1.svg" alt="Icon 1" loading="lazy" class="w-5 h-5 md:w-6 md:h-6 mr-2" />
									<p class="text-2xs md:text-lg text-secondary font-medium">Split Payments</p>
								</div>
								<div class="flex items-center my-5">
									<img src="/landing/dollar.svg" alt="Icon 1" loading="lazy" class="w-5 h-5 md:w-6 md:h-6 mr-2" />
									<p class="text-2xs md:text-lg text-secondary font-medium">Micro Payments</p>
								</div>
								<div class="flex items-center my-5">
									<img src="/landing/wallet7.svg" alt="Icon 1" loading="lazy" class="w-5 h-5 md:w-6 md:h-6 mr-2" />
									<p class="text-2xs md:text-lg text-secondary font-medium">Automated Payments</p>
								</div>
								<div class="flex items-center my-5">
									<img src="/landing/wallet9.svg" alt="Icon 1" loading="lazy" class="w-5 h-5 md:w-6 md:h-6 mr-2" />
									<p class="text-2xs md:text-lg text-secondary font-medium">
										Advanced Payment Solutions
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="flex items-center my-5">
						<!-- <p class="text-2xs md:text-lg text-secondary font-semibold hover:underline">Learn More</p> -->
						<a href="/assets" class="text-2xs md:text-lg text-secondary font-medium hover:underline"
							>Learn More</a
						>

						<img src="/landing/learnmore.svg" alt="Icon 1" loading="lazy" class="w-3 h-3 md:w-4 md:h-4 ml-2" />
					</div>
					<div class="flex items-center justify-center md:justify-normal">
						<button
							type="button"
							class=" bg-secondary mr-1 text-[14px] md:text-[18px] font-semibold leading-6 md:!leading-7 text-primary rounded-md px-6 py-2 sm:px-10 sm:py-3 whitespace-nowrap hover:text-secondary hover:bg-primary border-2 border-secondary hover:border-primary"
							on:click={() => {
								goto("https://timechain.gitbook.io/neucron/");
							}}
						>
							Start Building
						</button>
						<a
							type="button"
							href="#contactForm"
							class="text-[14px] ml-1 md:text-[18px] font-semibold leading-6 md:!leading-7 text-secondary rounded-md px-6 py-2 sm:px-10 sm:py-3 whitespace-nowrap hover:text-secondary border-2 border-secondary hover:border-primary hover:bg-primary"
							on:click|preventDefault={scrollIntoView}
						>
							Talk to an Expert
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="relative px-4 md:mt-12 md:px-0 max-w-[1280px] mx-auto w-full">
		<div class="py-2 md:py-16 px-4 xl:px-2 text-center justify-center items-center">
			<div class="mx-auto w-3/4 my-8 md:my-12 text-center mb-4">
				<p class="text-xs md:text-xl font-medium text-secondary leading-3 mb-2">Unified Platform</p>
				<p
					class="text-2xl leading-7 md:text-[40px] md:leading-[48px] font-semibold text-secondary text-center"
				>
					Seamless Integration for developers, Unparalleled Experience for their customers
				</p>
			</div>
			<div class="grid grid-cols-1 w-full xl:grid-cols-3">
				{#each cards as card, index}
					<Card {card} {index} />
				{/each}
			</div>
		</div>
	</section>
	<div class="-skew-y-[4deg] pt-20 pb-40 mb-10 relative bg-secondary w-full overflow-hidden">
		<div class="absolute -left-2 top-0 skew-y-[4deg] opacity-50">
			<img src="/landing/Pattern.svg" loading="lazy" alt="Dot" />
		</div>
		<div class="absolute -top-14 -right-20">
			<img src="/landing/arrow_group_right.svg" class="opacity-60" loading="lazy" alt="arrows" />
		</div>
		<div class="absolute -right-1 rotate-180 bottom-0 skew-y-[4deg] opacity-50">
			<img src="/landing/Pattern.svg" loading="lazy" alt="Dot" />
		</div>
		<section
			class="skew-y-[4deg] px-2 flex flex-col xl:flex-row xl:justify-between items-center relative mt-24 max-w-[1280px] mx-auto w-full"
		>
			<div data-aos="fade-up" class="md:w-1/2 max-w-lg text-center xl:text-left">
				<div class="text-primary text-sm md:text-xl font-medium md:mt-8">
					<p>Tailored for Innovative Enterprises</p>
				</div>
				<div class="text-[#FFF] text-2xl md:text-[40px] font-semibold my-4">
					<p class="text-2xl md:leading-10 text-center xl:text-left max-w-[90vw] m-auto">
						Seamless, Secure,<br /> Developer-First Digital Wallet API Infrastructure for your Business.
					</p>
				</div>
				<div
					class="text-[#92B0C9] text-sm md:text-lg font-normal md:mr-10 text-center xl:text-left leading-5 md:!leading-7 my-5"
				>
					Informed by years of platform development experience, we have honed our expertise in
					efficient blockchain-based systems. Our API encapsulates all the essential blockchain
					functionality, allowing seamless implementation into any system.
				</div>
				<div class="xl:hidden my-5">
					<div class="border-2 border-primary rounded-xl">
						{#if browser}
							<CodeIllustration />
						{/if}
						<!-- <img src="/landing/api.svg" alt="Api" /> -->
						<!-- <img src="/landing/landing-api.svg" alt="Api" /> -->
					</div>
				</div>
				<div
					class="flex flex-col items-center md:flex-row my-6 md:my-11 justify-center xl:justify-start"
				>
					<div class="md:mr-8 mb-4 md:mb-0">
						<button
							type="button"
							class="bg-primary text-secondary text-base md:text-lg whitespace-nowrap rounded-md font-bold px-10 py-3 hover:bg-secondary hover:text-primary hover:border hover:border-primary"
							on:click={() => {
								goto(APIURL);
							}}
						>
							See Our API
						</button>
					</div>
					<div class="">
						<button
							type="button"
							class="border border-primary text-primary text-base md:text-lg whitespace-nowrap rounded-md font-bold px-12 py-3 hover:bg-primary hover:text-secondary"
							on:click={() => {
								goto('https://timechain.gitbook.io/neucron');
							}}
						>
							Dev Docs
						</button>
					</div>
				</div>
				<img src="/landing/arrow-hero-bottom.svg" alt="Api" loading="lazy" class="absolute" />
			</div>
			<div class="hidden xl:block">
				<div class="border-2 border-primary rounded-xl">
					{#if browser}
						<CodeIllustration />
					{/if}
					<!-- <img src="/landing/api.svg" alt="Api" /> -->
					<!-- <img src="/landing/landing-api.svg" alt="Api" /> -->
				</div>
			</div>
		</section>
	</div>
	<SectionHeader
		title="Ready to Get Started?"
		description="Everything you need to harness blockchain's power without the crypto complexities. We empower
	businesses across the spectrum, providing tools to manage digital assets seamlessly."
	/>
	<Features />
	<!-- <SectionHeader
		title="Ready to Get Started?"
		description="Everything you need to harness blockchain's power without the crypto complexities. We empower
	businesses across the spectrum, providing tools to manage digital assets seamlessly."
	/> -->
	<!-- <Plans plans={data.plans} /> -->
	<Testimonials testimonials={data.testimonials} />
	<!-- <DemoSection /> -->
	<!-- <FAQs /> -->
	<!-- <Subscribe show={!data.formIsSubmitted} /> -->
	<!-- Subscribe Form section starts -->
	<div class="bg-secondary pt-0 lg:py-24 px-10 w-full relative" id="contactForm">
		<div class="absolute xl:block hidden xl:-right-0 xl:-top-0">
			<img src="/landing/side-arrow.svg" loading="lazy" alt="cross-right" />
		</div>
		<div class="hidden lg:block absolute z-0 top-0 left-0">
			<img src="/landing/Pattern.svg" loading="lazy" alt="pattern" />
		</div>
		<div
			class="z-10 bg-base-100 text-center flex flex-col items-center max-w-[510px] m-auto lg:hidden rounded-2xl shadow-xl p-5 my-5 mb-5"
		>
			<img src="/neucron-logo.svg" alt="Neucron Logo" loading="lazy" class="w-32 mx-28" />
			<h1 class="text-[#0A142F] font-semibold text-[22px] leading-8">
				Technology-First, Token-Last: Reinventing Digital Asset Management
			</h1>
			<p class="text-[#0A142F] text-xs">Register and enjoy all the advantages that we offer you</p>
		</div>
		<div class="max-w-[1280px] relative mx-auto my-5">
			<div class="hidden lg:block box_parent max-w-7xl mx-2 lg:mx-auto">
				<div class="box2 h-[605px] w-full bg-base-100 relative pt-40 pl-10">
					<img
						src="/landing/middle-arrow.svg"
						alt="cross-right"
						class="absolute scale-75 -top-40 right-80"
					/>
					<img
						src="/landing/cross-left.svg"
						alt="cross-left"
						class="absolute -top-40 scale-75 -left-12"
					/>

					<div class="w-full mt-20 xl:mt-0 max-w-[360px] xl:max-w-[533px]">
						<img src="/neucron-logo.svg" alt="Neucron Logo" loading="lazy" class="xl:mb-4 max-w-[200px]" />
						<h1
							class="text-[#0A142F] text-[35px] font-medium xl:text-[40px] xl:max-h-[180px] mb-5 box-border leading-8 xl:!leading-[48px]"
						>
							Technology-First, Token-Last: Reinventing Digital Asset Management
						</h1>
						<p
							class="text-[#0A142F] px- xl:px-0 text-sm leading-5 xl:leading-normal md:text-[16px] xl:text-[20px]"
						>
							Register and enjoy all the advantages that we offer you
						</p>
					</div>
				</div>

				<svg class="flt_svg" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<filter id="flt_tag">
							<feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
							<feColorMatrix
								in="blur"
								mode="matrix"
								values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -9"
								result="flt_tag"
							/>
							<feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
						</filter>
					</defs>
				</svg>
			</div>
			<form
				action="?/contact_us"
				method="POST"
				use:enhance
				novalidate
				class="lg:absolute h-[600px] -top-10 right-10 max-w-[510px] mx-auto lg:w-[510px] flex flex-col justify-evenly bg-white px-8 xl:px-10 mb-20 py-14 xl:bottom-16 rounded-2xl xl:shadow-xl"
			>
				{#if $message?.status == 'failed' && $message.content}
					<p class="bg-red-100 p-4 text-red-400 text-xs font-semibold rounded mb-2">
						{$message.content}
					</p>
				{/if}
				{#if $message?.status == 'success' && $message.content}
					<div
						class="w-full flex flex-col justify-evenly items-center text-center h-[300px] lg:h-[450px]"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="60"
							height="60"
							viewBox="0 0 60 60"
							fill="none"
							class="bg-secondary p-5 rounded-full h-20 w-20 mb-4"
						>
							<path
								d="M39.875 55L29.25 44.375L32.75 40.875L39.875 48L54 33.875L57.5 37.375L39.875 55ZM30 27.5L50 15H10L30 27.5ZM30 32.5L10 20V45H22.875L27.875 50H10C8.625 50 7.44833 49.5108 6.47 48.5325C5.49 47.5525 5 46.375 5 45V15C5 13.625 5.49 12.4483 6.47 11.47C7.44833 10.49 8.625 10 10 10H50C51.375 10 52.5525 10.49 53.5325 11.47C54.5108 12.4483 55 13.625 55 15V25.875L50 30.875V20L30 32.5Z"
								fill="#07E1E8"
							/>
						</svg>
						<h3 class="text-sm lg:text-2xl text-secondary font-medium">
							Congratulations! You're All Set!
						</h3>
						<p class="text-xs lg:text-lg">
							You're now part of our vibrant community after successfully registering. Get ready for
							an exciting journey ahead!
						</p>
						<button
							on:click={() => goto('https://timechain.gitbook.io/neucron')}
							type="submit"
							class="btn btn-secondary text-[#06E7ED] w-7/12 min-w-[150px] mt-10 capitalize"
						>
							Continue Building
						</button>
					</div>
				{:else}
					<div class="flex flex-col w-full justify-start items-center xl:items-start">
						<ContactInput
							type="text"
							name="name"
							bind:value={$form.name}
							aria-invalid={$errors.name ? 'true' : undefined}
							placeholder="Name"
							errors={$errors?.name}
						/>

						<ContactInput
							type="text"
							name="email"
							placeholder="Email"
							bind:value={$form.email}
							errors={$errors?.email}
							aria-invalid={$errors.email ? 'true' : undefined}
						/>
						<div class="relative w-full mb-2">
							<Select
								id="reason"
								placeholder={'What you are looking for'}
								class="selectContainer"
								containerStyles="height: 40px; border-color: #92B0C9; background-color: hsl(210 20% 96% / 1); height: 40px; border-radius: 3px; font-size: inherit; padding-right: 0.75rem; padding-left: 0.75rem;"
								items={reasonsOnly}
								bind:value={selectedReason}
								showChevron={true}
								on:clear={onReasonClear}
								on:change={onReasonChange}
							
								searchable={false}
							/>
							<input name="looking_for" bind:value={$form.looking_for} type="hidden" />
							{#if $errors?.looking_for?.length}
								<div class="text-red-400 text-xs font-medium" style="margin-top: 1px;">
									{$errors?.looking_for?.[0]}
								</div>
							{/if}
						</div>
						<ContactInput
							type="text"
							name="phone_number"
							bind:value={$form.phone_number}
							errors={$errors?.phone_number}
							aria-invalid={$errors.phone_number ? 'true' : undefined}
							placeholder="Phone Number"
						/>
						<ContactInput
							name="message"
							type="textarea"
							placeholder="Message"
							bind:value={$form.message}
							errors={$errors?.message}
							aria-invalid={$errors.message ? 'true' : undefined}
							rows="6"
						/>
						<div class="flex gap-3 mb-[20px] w-full items-center">
							<ContactInput
								type="checkbox"
								id="terms"
								bind:checked={$form.terms}
								aria-invalid={$errors.terms ? 'true' : undefined}
								name="terms"
								errors={$errors?.terms}
								class="form-checkbox accent-primary border border-[#92B0C9] rounded focus:border-primary"
								label={`I have read and accept the <a href="#" class="text-[#0081FE] underline"
						>privacy policy.</a>`}
							/>
						</div>
						<button
							type="submit"
							class="btn btn-secondary text-[#06E7ED] capitalize max-w-[160px] w-full"
						>
							Contact Us
						</button>
					</div>
				{/if}
			</form>
		</div>
	</div>
	<!-- subscribe form end -->
	<Footer />
</div>

<style>
	.box2 {
		clip-path: polygon(0 0, 70% 18%, 100% 100%, 0% 100%);
		margin: 0 auto;
	}

	.flt_svg {
		visibility: hidden;
		position: absolute;
		width: 0px;
		height: 0px;
	}

	.box_parent {
		filter: url('#flt_tag');
	}
	/* .fadeUp{
		opacity: 0.4;
		transform: translateY(200px) scale(0.9);
	} */
</style>
