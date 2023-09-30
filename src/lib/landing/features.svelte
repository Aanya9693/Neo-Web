<script>
	export let plan = {
		features: [
			{
				text: 'User-Friendliness',
				status1: true,
				status2: true,
				status3: true
			},
			{
				text: 'Security Features',
				status1: true,
				status2: true,
				status3: true
			},
			{
				text: 'Regulatory Compliance',
				status1: true,
				status2: true,
				status3: false
			},
			{
				text: 'Disruptive Potential',
				status1: true,
				status2: false,
				status3: true
			},
			{
				text: 'Scalabilty',
				status1: true,
				status2: false,
				status3: true
			},
			{
				text: 'Decentralization',
				status1: true,
				status2: false,
				status3: true
			},
			{
				text: 'Fiat payments',
				status1: true,
				status2: true,
				status3: false
			},
			{
				text: 'Different modes of transfers',
				status1: true,
				status2: false,
				status3: false
			},
			{
				text: 'Public ledger',
				status1: true,
				status2: false,
				status3: true
			},
			{
				text: 'Smart contractual capabilities',
				status1: true,
				status2: false,
				status3: true
			},
			{
				text: 'Complex usecases',
				status1: true,
				status2: false,
				status3: false
			},
			{
				text: 'Developer Friendliness',
				status1: true,
				status2: true,
				status3: false
			},
			{
				text: 'Plugin Ecosystem',
				status1: true,
				status2: true,
				status3: false
			}
		]
	};

	let i = 0;

	let getFeatureIcon = (status) => {
		return status ? '/landing/tick.svg' : '/landing/subtract.svg';
	};
</script>

<div
	id="featureTable"
	class="scale-90 rounded-t-3xl overflow-hidden md:scale-100 font-barlow text-[12px] md:text-lg text-center font-normal md:min-h-[700px] mt-12 shrink-0 overflow-y-visible overflow-x-scroll max-w-[1280px] w-full mx-2"
>
	<div class="flex font-bold py-1 min-w-[600px]">
		<div class="text-left pl-4 md:pl-8 w-1/4 py-2 md:py-4 bg-[rgb(233,238,242)] sticky left-0">Features</div>
		<div class="w-1/4 py-2 md:py-4 bg-[rgb(233,238,242)]">Neucron Wallet</div>
		<div class="w-1/4 py-2 md:py-4 bg-[rgb(233,238,242)]">Payment Companies</div>
		<div class="w-1/4 py-2 md:py-4 bg-[rgb(233,238,242)]">Digital Asset Wallet Providers</div>
	</div>

	<div class="min-w-[600px] py-1">
		{#each plan.features as feature, i}
			<div class="flex">
				<div
					class="w-1/4 py-2 md:py-4 text-left pl-4 md:pl-8 {i % 2 === 0
						? 'bg-base-100'
						: 'bg-[rgb(233,238,242)]'} sticky left-0"
				>
					{feature.text}
				</div>
				<div
					class="w-1/4 py-2 md:py-4 {i % 2 === 0 ? 'bg-base-100' : 'bg-[rgb(233,238,242)]'}"
				>
					<img
						src={getFeatureIcon(feature.status1)}
						alt="Feature Icon"
						class="w-4 h-4 md:w-5 md:h-5 inline-block mx-auto"
					/>
				</div>
				<div
					class="w-1/4 py-2 md:py-4 {i % 2 === 0 ? 'bg-base-100' : 'bg-[rgb(233,238,242)]'}"
				>
					<img
						src={getFeatureIcon(feature.status2)}
						alt="Feature Icon"
						class="w-4 h-4 md:w-5 md:h-5 inline-block mx-auto"
					/>
				</div>
				<div
					class="w-1/4 py-2 md:py-4 {i % 2 === 0 ? 'bg-base-100' : 'bg-[rgb(233,238,242)]'}"
				>
					<img
						src={getFeatureIcon(feature.status3)}
						alt="Feature Icon"
						class="w-4 h-4 md:w-5 md:h-5 inline-block mx-auto"
					/>
				</div>
			</div>
		{/each}
	</div>
</div>
