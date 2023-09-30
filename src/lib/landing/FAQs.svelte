<script>
	import AccordionMenu from '$lib/components/Accordion.svelte';
	import SectionHeader from './sectionHeader.svelte';
	let activeitem = 1;

	let faqs = [
		{
			question: 'What is Fiat Tokens?',
			answer: `Visit your Home Branch or the Branch where you wish to transfer the account and submit the duly filled Account Transfer Form along with the KYC Documents and Board Resolution.
            Your Account Transfer application will be verified by branch officials and further processing shall be done.`
		},
		{
			question: 'Where can I learn more about how to get started?',
			answer: `Visit your Home Branch or the Branch where you wish to transfer the account and submit the duly filled Account Transfer Form along with the KYC Documents and Board Resolution.
            Your Account Transfer application will be verified by branch officials and further processing shall be done.`
		},
		{
			question: 'What is the pricing?',
			answer: `Visit your Home Branch or the Branch where you wish to transfer the account and submit the duly filled Account Transfer Form along with the KYC Documents and Board Resolution.
            Your Account Transfer application will be verified by branch officials and further processing shall be done.`
		},
		{
			question: 'What are the benefits of a health card?',
			answer: `Visit your Home Branch or the Branch where you wish to transfer the account and submit the duly filled Account Transfer Form along with the KYC Documents and Board Resolution.
            Your Account Transfer application will be verified by branch officials and further processing shall be done.`
		},
		{
			question: 'How is my data protected?',
			answer: `Visit your Home Branch or the Branch where you wish to transfer the account and submit the duly filled Account Transfer Form along with the KYC Documents and Board Resolution.
            Your Account Transfer application will be verified by branch officials and further processing shall be done.`
		}
	];
</script>

<div class="px-4 md:px-20 pt-20 pb-[90px] bg-[#F0F1F5] relative">
	<div class="absolute -top-40 right-0 hidden md:block">
		<img src="/landing/cross-right.svg" alt="cross-right" />
	</div>
	<div class="mb-16">
		<SectionHeader
			title="frequent Asked questions"
			subTitle="Built for Global Scale"
			description="Everything you need to harness blockchain's power without the crypto complexities. We empower businesses across the spectrum, providing tools to manage digital assets seamlessly."
		/>
	</div>

	<div class="flex gap-4 flex-col">
		{#each faqs as faq, i}
			<!-- <div class="collapse collapse-plus bg-base-100">
				<input
					type="radio"
					name="my-accordion"
					checked={activeitem == faqIndex + 1}
					on:change={() => (activeitem = faqIndex + 1)}
				/>
				<div class="collapse-title font-medium text-accent text-lg">
					{faq.question}
				</div>
				<div class="collapse-content">
					<p class="text-accent text-base">{faq.answer}</p>
				</div>
			</div> -->
			<AccordionMenu
				props={{
					contentLabel: faq.question,
					id: i
				}}
				className="border-none"
			>
				<div class="pb-4 body-manual">
					{faq.answer}
				</div>
			</AccordionMenu>
		{/each}
	</div>
</div>
<!-- <h1>Faqs</h1> -->
