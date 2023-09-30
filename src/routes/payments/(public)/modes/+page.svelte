<script>
	import AssetSection from '$lib/assets/textSection.svelte';
	import Lottie from '$lib/assets/lottie.svelte';
	import { browser } from '$app/environment';
	const lib = 'https://api.neucron.io/docs/';

</script>
<div class="md:mt-24 mt-10">
	<div class="col-span-8 grid grid-cols-2 my-4 mx-auto max-w-[1440px] mb-10">
		<div class="col-span-2 lg:col-span-1 m-auto order-1">
			<AssetSection
				id="integrated-payment"
				subTitle="INTEGRATED PAYMENT"
				title="Simplify one to one payment with our integrated Payment Module"
				description="Our Integrated Payment Module empowers businesses to effortlessly handle one-to-one payments. With our user-friendly interface and secure infrastructure, you can streamline transactions between two parties, ensuring efficient fund transfers and a seamless payment experience."
			/>
		</div>
		<div class="col-span-2 lg:col-span-1 m-auto order-0 lg:order-2">
			{#if browser}
			<Lottie src="/payment/Integrated.json" />
			{/if}
		</div>
	</div>
	<div class="col-span-8 grid grid-cols-2 my-4 mx-auto max-w-[1440px] mb-10">
		<div class="col-span-2 lg:col-span-1 m-auto mdd:-ml-1">
			{#if browser}
			<Lottie src="/payment/Split4.json" />
			{/if}
		</div>
		<div class="col-span-2 lg:col-span-1 m-auto">
			<AssetSection
				id="route"
				subTitle="ROUTE"
				title="Efficient one to many payment solution with Route"
				description="Route enables businesses to streamline one-to-many payments with ease. With our intuitive platform, you can efficiently distribute funds to multiple recipients, whether it's commissions, royalties, or other forms of revenue sharing. Simplify your payment workflows and enhance your financial operations with Route."
			/>
		</div>
	</div>

	<div class="col-span-8 grid grid-cols-2 my-4 mx-auto max-w-[1440px] mb-10">
		<div class="col-span-2 lg:col-span-1 m-auto order-1">
			<AssetSection
			id="fusion"
				subTitle="FUSION"
				title="Streamline Many-to-One Payments with Fusion"
				description="Fusion revolutionizes many-to-one payments, providing businesses with a centralized solution to handle multiple payers sending funds to a single receiver. Our secure platform ensures accurate fund consolidation, reducing administrative overhead and optimizing financial processes."
			/>
		</div>
		<div class="col-span-2 lg:col-span-1 m-auto order-0 lg:order-2">
			{#if browser}
			<Lottie src="/payment/Fusion.json" />
			{/if}
		</div>
	</div>
	<div class="col-span-8 grid grid-cols-2 my-4 mx-auto max-w-[1440px] mb-10">
		<div class="col-span-2 lg:col-span-1 m-auto">
			{#if browser}
			<Lottie src="/payment/Matrix.json" />
			{/if}
		</div>
		<div class="col-span-2 lg:col-span-1 m-auto">
			<AssetSection
				id="matrix"
				subTitle="MATRIX"
				title="Seamlessly manage many to many payments with Matrix"
				description="Matrix is the ultimate solution for businesses dealing with many-to-many payment scenarios. Our advanced platform enables you to manage complex fund transfers among multiple payers and receivers effortlessly. Simplify your financial operations and streamline intricate transactions with Matrix."
			/>
		</div>
	</div>
</div>