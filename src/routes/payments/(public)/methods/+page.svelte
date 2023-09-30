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
				id="streaming"
				subTitle="STREAMING PAYMENT"
				title="Simplify one to one payment with our integrated Payment Module"
				description="Our Integrated Payment Module empowers businesses to effortlessly handle one-to-one payments. With our user-friendly interface and secure infrastructure, you can streamline transactions between two parties, ensuring efficient fund transfers and a seamless payment experience."
			/>
		</div>
		<div class="col-span-2 lg:col-span-1 m-auto order-0 lg:order-2">
			{#if browser}
				<Lottie src="/payment/Streaming.json" />
			{/if}
		</div>
	</div>
	<div class="col-span-8 grid grid-cols-2 my-4 mx-auto max-w-[1440px] mb-10">
		<div class="col-span-2 lg:col-span-1 m-auto">
			{#if browser}
				<Lottie src="/payment/Micro.json" />
			{/if}
		</div>
		<div class="col-span-2 lg:col-span-1 m-auto">
			<AssetSection
				id="micro"
				subTitle="MICRO PAYMENT"
				title="Efficient one to many payment solution with Route"
				description="Route enables businesses to streamline one-to-many payments with ease. With our intuitive platform, you can efficiently distribute funds to multiple recipients, whether it's commissions, royalties, or other forms of revenue sharing. Simplify your payment workflows and enhance your financial operations with Route."
			/>
		</div>
	</div>
	<div class="col-span-8 grid grid-cols-2 my-4 mx-auto max-w-[1440px] mb-10">
		<div class="col-span-2 lg:col-span-1 m-auto order-1">
			<AssetSection
				id="automated"
				subTitle="AUTOMATED PAYMENTS"
				title="Streamline Many-to-One Payments with Fusion"
				description="Fusion revolutionizes many-to-one payments, providing businesses with a centralized solution to handle multiple payers sending funds to a single receiver. Our secure platform ensures accurate fund consolidation, reducing administrative overhead and optimizing financial processes."
			/>
		</div>
		<div class="col-span-2 lg:col-span-1 m-auto order-0 lg:order-2">
			{#if browser}
				<Lottie src="/payment/Automated.json" />
			{/if}
		</div>
	</div>
	<div class="col-span-8 grid grid-cols-2 my-4 mx-auto max-w-[1440px] mb-10">
		<div class="col-span-2 lg:col-span-1 m-auto">
			{#if browser}
				<Lottie src="/payment/Conditional.json" />
			{/if}
		</div>
		<div class="col-span-2 lg:col-span-1 m-auto">
			<AssetSection
				id="conditional"
				subTitle="CONDITIONAL PAYMENT"
				title="Seamlessly manage many to many payments with Matrix"
				description="Matrix is the ultimate solution for businesses dealing with many-to-many payment scenarios. Our advanced platform enables you to manage complex fund transfers among multiple payers and receivers effortlessly. Simplify your financial operations and streamline intricate transactions with Matrix."
			/>
		</div>
	</div>
	<div class="col-span-8 grid grid-cols-2 my-4 mx-auto max-w-[1440px] mb-10">
		<div class="col-span-2 lg:col-span-1 m-auto order-1">
			<AssetSection
				id="programmable"
				subTitle="PROGRAMMABLE PAYMENT"
				title="Efficient one to many payment solution with Route"
				description="Route enables businesses to streamline one-to-many payments with ease. With our intuitive platform, you can efficiently distribute funds to multiple recipients, whether it's commissions, royalties, or other forms of revenue sharing. Simplify your payment workflows and enhance your financial operations with Route."
			/>
		</div>
		<div class="col-span-2 lg:col-span-1 m-auto order-0 lg:order-2">
			{#if browser}
				<Lottie src="/payment/Programmable.json" />
			{/if}
		</div>
	</div>
	<div class="col-span-8 grid grid-cols-2 my-4 mx-auto max-w-[1440px] mb-10">
		<div class="col-span-2 lg:col-span-1 m-auto">
			{#if browser}
				<Lottie src="/payment/Instant.json" />
			{/if}
		</div>
		<div class="col-span-2 lg:col-span-1 m-auto">
			<AssetSection
				id="instant"
				subTitle="INSTANT PAYMENT"
				title="Streamline Many-to-One Payments with Fusion"
				description="Fusion revolutionizes many-to-one payments, providing businesses with a centralized solution to handle multiple payers sending funds to a single receiver. Our secure platform ensures accurate fund consolidation, reducing administrative overhead and optimizing financial processes."
			/>
		</div>
	</div>
	<div class="col-span-8 grid grid-cols-2 my-4 mx-auto max-w-[1440px] mb-10">
		<div class="col-span-2 lg:col-span-1 m-auto order-1">
			<AssetSection
			id="advanced"
			subTitle="ADVANCED PAYMENT SOLUTIONS"
				title="Seamlessly manage many to many payments with Matrix"
				description="Matrix is the ultimate solution for businesses dealing with many-to-many payment scenarios. Our advanced platform enables you to manage complex fund transfers among multiple payers and receivers effortlessly. Simplify your financial operations and streamline intricate transactions with Matrix."
				/>
			</div>
			<div class="col-span-2 lg:col-span-1 m-auto order-0 lg:order-2">
				{#if browser}
					<Lottie src="/payment/Advanced.json" />
				{/if}
			</div>
	</div>
	<div class="col-span-8 grid grid-cols-2 my-4 mx-auto max-w-[1440px] mb-10">
		<div class="col-span-2 lg:col-span-1 m-auto md:-ml-2">
			{#if browser}
				<Lottie src="/payment/Split4.json" />
			{/if}
		</div>
		<div class="col-span-2 lg:col-span-1 m-auto">
			<AssetSection
				id="automated"
				subTitle="SPLIT PAYMENT SOLUTIONS"
				title="Crafting Customized Payment Solutions for Your Unique Needs"
				description="At Neucron, we understand that every business is unique, with its own distinct payment requirements. That's why we offer Advanced Payment Solutions tailored to your specific needs. If our existing solutions don't quite match your requirements, our dedicated team of experts is ready to collaborate with you. Let us create a customized payment solution that perfectly aligns with your business goals. Reach out to our team today and embark on a journey to develop a cutting-edge payment solution that caters to your business's unique needs. Together, we'll build something extraordinary."
			/>
		</div>
	</div>
</div>
