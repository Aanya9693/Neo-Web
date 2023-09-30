<script>
	import SectionHeader from '$lib/landing/sectionHeader.svelte';
	import Productcard from '$lib/landing/productcard.svelte';
	let APIDOCS = 'https://api.neucron.io/docs/';
	const cards = [
		{
			id: 'integrated-payment',
			title: 'INTEGRATED PAYMENTS',
			subtitle: 'Simplify one to one payment with our integrated Payment Module',
			desc: 'Our Integrated Payment Module empowers businesses to effortlessly handle one-to-one payments...',
			img: '/onboarding/img1.svg',
			pattern: '/onboarding/pattern0.svg',
			newimg: '/onboarding/integrateimg.svg',
			newpattern: '/onboarding/newpattern0.svg'
		},
		{
			id: 'route',
			title: 'ROUTE',
			subtitle: 'Efficient one to many payment solution with Route',
			desc: 'Route enables businesses to streamline one-to-many payments with ease...',
			img: '/onboarding/img2.svg',
			pattern: '/onboarding/pattern1.svg',
			newimg: '/onboarding/routeimg.svg',
			newpattern: '/onboarding/routepattern.svg'
		},
		{
			id: 'fusion',
			title: 'FUSION',
			subtitle: 'Efficient many to one payment solution with Fusion',
			desc: 'Fusion revolutionizes many-to-one payments, providing businesses with a centralized solution... ',
			img: '/onboarding/img3.svg',
			pattern: '/onboarding/pattern2.svg',
			newimg: '/onboarding/fusionimg.svg',
			newpattern: '/onboarding/fusionpattern.svg'
		},
		{
			id: 'matrix',
			title: 'MATRIX',
			subtitle: 'Seamlessly manage many to many payment with Matrix',
			desc: 'Matrix is the ultimate solution for businesses dealing with many-to-many payment scenarios...',
			img: '/onboarding/img4.svg',
			pattern: '/onboarding/pattern3.svg',
			newimg: '/onboarding/matriximg.svg',
			newpattern: '/onboarding/matrixpattern.svg'
		}
	];
	const cards1 = [
		{
			id: 'streaming',
			title: 'STREAMING PAYMENT',
			subtitle: 'Seamless and secure streaming payments for modern business',
			desc: 'Neucrons streaming payment solution offers real-time, seamless, and secure transactions...',
			img: '/onboarding/image0.svg',
			pattern: '/onboarding/newpattern1.svg',
			newimg: '/onboarding/streamimg.svg',
			newpattern: '/onboarding/streamingpattern.svg'
		},
		{
			id: 'conditional',
			title: 'CONDITIONAL PAYMENT',
			subtitle: 'Flexible Payments for Specific Conditions',
			desc: 'Harness the power of programmability with Neucrons programmable payments...',
			img: '/onboarding/image1.svg',
			pattern: '/onboarding/newpattern2.svg',
			newimg: '/onboarding/conditionimg.svg',
			newpattern: '/onboarding/conditionalpattern.svg'
		},
		{
			id: 'automated',
			title: 'AUTOMATED PAYMENT',
			subtitle: 'Streamline Many-to-One Payments with Fusion',
			desc: 'Streamline transactions with Neucrons automated payment solution...',
			img: '/onboarding/image2.svg',
			pattern: '/onboarding/newpattern3.svg',
			newimg: '/onboarding/automatedimg.svg',
			newpattern: '/onboarding/newpattern9.svg'
		},
		{
			id: 'micro',
			title: 'MICRO-PAYMENT',
			subtitle: 'Seamless Transactions for Low-Value Goods and Services',
			desc: 'Neucron enables seamless micro payments, transforming small-scale transactions...',
			img: '/onboarding/image3.svg',
			pattern: '/onboarding/newpattern4.svg',
			newimg: '/onboarding/microimg.svg',
			newpattern: '/onboarding/micropattern.svg'
		},
		{
			id: 'programmable',
			title: 'PROGRAMMABLE PAYMENT',
			subtitle: 'Innovate with Programmable Payment Capabilities',
			desc: 'Harness the power of programmability with Neucrons programmable payments...',
			img: '/onboarding/image4.svg',
			pattern: '/onboarding/newpattern5.svg',
			newimg: '/onboarding/programimg.svg',
			newpattern: '/onboarding/programpattern.svg'
		},
		{
			id: 'advanced',
			title: 'ADVANCED PAYMENT SOLUTIONS',
			subtitle: 'Crafting Customized Payment Solutions for Your Unique Needs',
			desc: 'At Neucron, we understand that every business is unique, with its own distinct payment...',
			img: '/onboarding/image5.svg',
			pattern: '/onboarding/newpattern6.svg',
			newimg: '/onboarding/advanceimg.svg',
			newpattern: '/onboarding/advancepattern.svg'
		},
		{
			id: 'instant',
			title: 'INSTANT PAYMENT',
			subtitle: 'Real-Time Payments Made Effortless',
			desc: 'Instant payments, redefined. Effortlessly make real-time transactions with Neucron...',
			img: '/onboarding/image6.svg',
			pattern: '/onboarding/newpattern7.svg',
			newimg: '/onboarding/instantimg.svg',
			newpattern: '/onboarding/instantpattern.svg'
		},
		{
			id: 'split-payment',
			title: 'SPLIT-PAYMENT',
			subtitle: 'Seamless Transactions for Low-Value Goods and Services',
			desc: 'Neucron enables seamless micro payments, transforming small-scale transactions...',
			img: '/onboarding/image7.svg',
			pattern: '/onboarding/newpattern8.svg',
			newimg: '/onboarding/splitimg.svg',
			newpattern: '/onboarding/splitpattern.svg'
		}
	];
</script>

<section class="relative md:px-0">
	<div class="text-barlow mt-10 md:py-16 text-center justify-center items-center">
		<SectionHeader subTitle="PAYMENT MODES" title="One Integration, Limitless Possibilites" />
		<div class="md:mx-10 grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-4 md:px-8 px-2 mt-10">
			{#each cards as card}
				<Productcard {card} href="/payments/modes" />
			{/each}
		</div>

		<div class="relative md:px-0 py-6 overflow-hidden">
			<!-- <div class="absolute -right-96 -top-80 hidden md:block"> -->
				<img src="/onboarding/right-arrow.svg" alt="arrow" class="absolute -right-96 -top-80" />
			<!-- </div> -->

			<SectionHeader subTitle="PAYMENT METHODS" title="One Integration, Limitless Possibilites" />
		</div>

		<div class="md:mx-10 grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-4 md:px-8 px-2 mt-7">
			{#each cards1 as card}
				<Productcard {card} href="/payments/methods" />
			{/each}
		</div>
	</div>
</section>
