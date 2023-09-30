<script>
	import PageHeader from '$lib/landing/PageHeader.svelte';
	import AssetSection from '$lib/assets/textSection.svelte';
	import Lottie from '../../../lib/assets/lottie.svelte';
	import { browser } from '$app/environment';
</script>

<div class="mt-40">
	<PageHeader
		title="Issue, manage, and transfer<br/> digital assets"
		description="A unique solution catering to organizations, governmental sectors, businesses, and individual users."
	/>
	<div class="absolute -left-10 -top-0 hidden md:block">
		<img src="/landing/arrow-l.svg" alt="arrow" />
	</div>
	<div
		class="font-barlow md:flex justify-center relative items-center my-10 px-4 md:px-0 w-full md:w-auto text-center md:text-left md:pb-10"
	>
		<a
			href="/#contactForm"
			class="text-barlow text-[16px] cursor-pointer bg-secondary text-primary hover:bg-primary hover:text-secondary md:mr-6 font-bold py-3 md:px-8 px-4 md:my-0 my-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-[4px]"
			>Talk to an Expert</a
		>
		<p class="text-secondary font-normal underline mt-10 md:mt-0" id="text">
			<a href="#">REQUEST A SANDBOX ACCOUNT</a>
		</p>
	</div>
	<div class="grid grid-cols-2 my-4 mx-auto max-w-[1400px] mx-1 mb-10">
		<div data-aos='zoom-in-right' class="col-span-2 lg:col-span-1 m-auto order-1">
			<AssetSection
				subTitle="create assets"
				title="Bringing Real and Digital Worlds with Custom Asset Creation"
				description="Embrace the power of Neucron to create digital representations of your tangible and intangible assets. Our platform facilitates the smooth transition from physical to digital, unlocking limitless opportunities. From creating custom tokens to digital art, real estate, or even unique identity assets, Neucron empowers you to bring any asset into the digital realm."
			/>
		</div>
		<div data-aos="zoom-in" class="col-span-2 lg:col-span-1 m-auto order-0 lg:order-2">
			{#if browser}
			<Lottie src="/assets/createAssets.json" />
			{/if}
		</div>
	</div>
	<div class="col-span-8 grid grid-cols-2 my-4 mx-auto max-w-[1400px] mx-1 mb-10">
		<div data-aos="zoom-in" class="col-span-2 lg:col-span-1 m-auto">
			{#if browser}
			<Lottie src="/assets/transferAssets.json" />
			{/if}
		</div>
		<div data-aos="zoom-in-left" class="col-span-2 lg:col-span-1 m-auto">
			<AssetSection
				subTitle="Transfer Assets"
				title="Effortless Asset Movement: Experience the Future of Asset Transfers with Neucron"
				description="Neucron revolutionizes the way digital assets are transferred, providing a seamless and secure experience for individuals and businesses. With Neucron's advanced technology and intuitive interface, asset transfers become effortless and efficient."
			/>
		</div>
	</div>

	<div class="col-span-8 grid grid-cols-2 my-4 mx-auto max-w-[1400px] mx-1 mb-10">
		<div data-aos='zoom-in-right' class="col-span-2 lg:col-span-1 m-auto order-1">
			<AssetSection
				subTitle="DIGITAL ASSET MANAGEMENT"
				title="Simplify Asset Management with Neucron Suite"
				description="Navigate the digital realm with Neucron's robust asset management. Our user-friendly interface provides instant access and comprehensive control over your assets. From tracking transactions to monitoring asset performance, optimize your digital wealth management."
			/>
		</div>
		<div data-aos='zoom-in' class="col-span-2 lg:col-span-1 m-auto order-0 lg:order-2">
			{#if browser}
			<Lottie src="/assets/digitalAssets.json" />
			{/if}
		</div>
	</div>
	<div class="col-span-8 grid grid-cols-2 my-4 mx-auto max-w-[1400px] mx-1 mb-10">
		<div data-aos='zoom-in' class="col-span-2 lg:col-span-1 m-auto">
			{#if browser}
			<Lottie src="/assets/smartContracts.json" />
			{/if}
		</div>
		<div data-aos='zoom-in-left' class="col-span-2 lg:col-span-1 m-auto">
			<AssetSection
				subTitle="SMART CONTRACT CAPABILITIES"
				title="Automating Processes with Precision using Neucron's Smart Contracts"
				description="Experience automated contracts, programmable logic, enhanced efficiency, trustless execution, streamlined processes, and secure asset management through our advanced platform."
			/>
		</div>
	</div>
</div>
