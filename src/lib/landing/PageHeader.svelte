<script>
	export let title = '';
	export let subTitle = '';
	export let description = '';
</script>

<div
	data-aos="zoom-in"
	class="font-barlow flex text-center justify-center relative flex-col items-center px-4"
>
	{#if subTitle}
		<h3 class="font-medium text-secondary text-xs md:text-xl uppercase">{subTitle}</h3>
	{/if}
	<h1
		class="md:mx-[20px] text-[20px] leading-8 md:text-[42px] md:leading-[50px] xl:text-[64px] xl:leading-tight font-semibold text-secondary capitalize"
	>
		{@html title}
	</h1>
	<p class="text-xs md:text-lg md:max-w-[710px] font-normal text-[#33444F] text-center">
		{@html description}
	</p>
</div>
