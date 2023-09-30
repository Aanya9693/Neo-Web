<script>
	export let title = '';
	export let subTitle = '';
	export let description = '';
</script>

<div class="font-barlow flex text-center justify-center relative flex-col items-center px-4">
	{#if subTitle}
		<h3 class="font-medium text-primary text-xs md:text-xl uppercase">{subTitle}</h3>
	{/if}
	<h1 class="md:mx-[20px] text-[24px] md:text-[42px] font-semibold text-base-100 capitalize">
		{@html title}
	</h1>
	<p class="text-xs md:text-lg md:max-w-[710px] font-normal text-base-100 text-center">
		{@html description}
	</p>
</div>
