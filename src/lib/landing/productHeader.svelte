<script>
	export let title = '';
	export let subTitle = '';
	export let description = '';
</script>

<div class="md:w-full font-barlow flex text-center justify-center flex-col items-center px-4">
	{#if subTitle}
		<h3 class="font-medium text-secondary text-sm md:text-xl capitalize">{subTitle}</h3>
	{/if}
	<h1 class="text-[20px] md:text-[64px] font-semibold text-[#33444F] capitalize mb-4">
		{@html title}
	</h1>
	<p class="md:mt-1 text-[14px] md:text-lg md:max-w-[600px] font-normal text-[#768289] text-center">
		{@html description}
	</p>
</div>