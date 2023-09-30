<script>
	import Plan from './plan.svelte';
	import Toggle from 'svelte-toggle';
	export let plans;
	let isyearly = true;
</script>

<div class="flex justify-center relative flex-col items-center my-9 px-4 md:px-0">
	<h3 class="text-base md:text-xl font-medium text-accent">Choose Plan</h3>
	<div
		class="flex flex-row items-center text-base md:text-xl my-3 font-semibold leading-6 md:!leading-[150%] md:tracking-[-0.4px] text-accent select-none"
	>
		Monthly
		<!-- <input type="checkbox" class="toggle toggle-lg toggle-primary mx-2" bind:checked={isyearly} /> -->
		<div class="px-4">
			<Toggle
				label=""
				switchColor="#07E1E8"
				toggledColor="#112D44"
				untoggledColor="#92B0C9"
				bind:toggled={isyearly}
			/>
		</div>
		Yearly
	</div>
	<div class="absolute right-0 -top-44 hidden md:block">
		<img src="/landing/cross-right.svg" alt="arrow" />
	</div>
	<div class="absolute left-0 -top-44 hidden md:block">
		<img src="/landing/cross-left.svg" alt="arrow" />
	</div>
	<div class="my-3">
		<span
			class="!leading-[150%] tracking-[-0.28px] rounded-full px-3 py-1 text-sm font-medium text-secondary inline-flex items-center justify-center bg-[#92B0C9]"
		>
			Save 63%
		</span>
	</div>
	<div class="absolute -bottom-3 md:bottom-0 right-20 md:right-[42%]">
		<img src="/landing/tiny-Arrow.svg" alt="tiny-arrow" class="w-[70px]" />
	</div>
</div>
<div class="flex flex-col px-6 md:px-20 gap-6 mb-8 md:flex-row md:justify-between">
	{#each plans as plan}
		{#if isyearly && plan.tenure == 'year'}
			<Plan {plan} />
		{:else if !isyearly && plan.tenure == 'month'}
			<Plan {plan} />
		{/if}
	{/each}
</div>
