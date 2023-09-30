<script>
	export let id = '';
	export let title = '';
	export let subTitle = '';
	export let description = '';
	import { goto } from '$app/navigation';
	const DOCS = 'https://api.neucron.io/docs/';
</script>

<div
	class="text-left xl:text-start max-w-[80vw] md:max-w-xl mt-6 lg:mt-4 md:py-10 mx-2"
	{id}
>
	<p class="text-md md:text-xl font-light uppercase mb-1 text-secondary whitespace-nowrap">
		{@html subTitle}
	</p>
	<p class="text-xl md:text-[30px] leading-snug font-semibold text-secondary md:mb-8">
		{@html title}
	</p>
	<p
		class="text-xs md:text-xl text-[#33444F] xl:text-left font-normal my-2 leading-5 md:!leading-8"
	>
		{@html description}
	</p>
	<div class="flex items-center justify-between mt-5">
		<button
			type="button"
			class=" bg-secondary mr-1 w-[48%] text-[14px] text-center md:text-[18px] font-semibold leading-6 md:!leading-7 text-primary rounded-md px-6 py-2 hover:text-secondary hover:bg-primary border-2 border-secondary hover:border-primary"
			on:click={() => {
				goto("https://timechain.gitbook.io/neucron/");
			}}
		>
			Dev Docs
		</button>
		<button
			type="button"
			on:click={() => {
				goto(DOCS);
			}}
			class="text-[14px] ml-1 md:text-[18px] w-[48%] text-center font-semibold leading-6 md:!leading-7 text-secondary rounded-md px-6 py-2 hover:text-secondary border-2 border-secondary hover:border-primary hover:bg-primary"
		>
			See our API
		</button>
	</div>
</div>
