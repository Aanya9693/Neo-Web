<script>
	export let plan = {
		title: 'Free',
		subtitle: 'Perfect plan to get started',
		iconURL: '/landing/lovely.svg',
		tenure: 'month',
		type: 'free',
		price: '$0',
		description: 'A free plan grants you access to some cool features of Spend.In.',
		features: [
			{
				text: 'Sync accross device',
				status: true
			},
			{
				text: '5 workspace',
				status: true
			},
			{
				text: 'Collaborate with 5 user',
				status: true
			},
			{
				text: 'Sharing permission',
				status: false
			},
			{
				text: 'Admin tools',
				status: false
			},
			{
				text: '100+ integrations',
				status: false
			}
		]
	};

	let icons = {
		free: '/landing/lovely.svg',
		pro: '/landing/crown.svg',
		ultimate: '/landing/share.svg'
	};

	let getFeatureIcon = (status) => {
		return status ? '/landing/tick-circle.svg' : '/landing/close-circle.svg';
	};
	// export let header = {
	// 	title: 'Free',
	// 	subtitle: 'Perfect plan to get started',
	// 	iconURL: '/landing/lovely.svg'
	// };
</script>

<div class="bg-[#F0F1F5] rounded-xl md:w-[375px] md:min-h-[700px] px-4 md:px-8 pt-9 pb-11 shrink-0">
	<div class="mb-6">
		<div class="flex justify-between">
			<div class="flex gap-2">
				<img src={icons[plan.type]} alt={plan.title} />
				<h2
					class="text-[26px] md:text-[40px] font-semibold leading-8 md:!leading-[40px] tracking-[-0.96px] text-accent"
				>
					{plan.title}
				</h2>
			</div>
			{#if plan.type == 'pro'}
				<p>
					<span
						class="rounded-3xl px-4 py-1.5 text-sm md:text-sm font-medium inline-flex items-center justify-center bg-[#33444F] text-white"
					>
						Popular
					</span>
				</p>
			{/if}
		</div>
		<h5 class="mt-4 text-[#596780] text-sm md:text-base !leading-4">
			{plan.subtitle}
		</h5>
	</div>

	<div class="flex gap-2 items-end mb-5">
		<div
			class="text-accent font-semibold text-[32px] md:text-[40px] !leading-[56px] tracking-[-0.4px]"
		>
			{plan.price}
		</div>
		<div class="mb-2 text-[#33444F] !leading-6">
			/{plan.tenure}
		</div>
	</div>
	<div class="mb-8 text-xs md:text-base !leading-4 md:!leading-6 text-neutral">
		{plan.description}
	</div>

	<div class="gap-6 flex flex-col mb-10">
		{#each plan.features as feature}
			<div
				class="flex gap-2 text-[13.5px] md:text-lg text-neutral !leading-4 md:!leading-6 items-center"
			>
				<img src={getFeatureIcon(feature.status)} alt="Feature Icon" class="w-5 h-5" />
				{feature.text}
			</div>
		{/each}
	</div>
	<div>
		<button
			class="btn text-base font-semibold !leading-6 text-center w-full capitalize {plan.type ==
			'pro'
				? 'bg-accent text-primary hover:bg-accent-focus'
				: 'btn-primary'}"
		>
			{plan.type == 'free' ? 'Get Your Free Plan' : 'Get Started'}
		</button>
	</div>
</div>
