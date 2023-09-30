<script>
	export let card,index;
</script>

<div
	data-aos="fade-up"
	data-aos-delay={index*100}
	class="col-span-1 m-auto flex flex-col px-10 pt-5 pb-10 border transition-all duration-100 h-[305px] w-[316px] rounded-xl relative bg-[#112d44] md:bg-[#f0f1f5] group hover:bg-[#112d44]"
>
<div class="absolute right-0 top-0 md:opacity-0 group-hover:opacity-50">
	<img src="/landing/Pattern.svg" alt="Dot" />
</div>
	<div class="">
		<h1 class="my-6 p-4 pp w-fit bg-[#f0f1f5] md:bg-secondary rounded-lg group-hover:bg-[#f0f1f5]">
			<svelte:component this={card.img} className="group-hover:text-secondary md:text-base-100" />
		</h1>
	</div>
	<div
		class="text-base md:text-xl text-left font-semibold !leading-6 md:!leadin-8 text-primary md:text-[#2D2D2D] group-hover:text-primary my-2"
	>
		<p>
			{card.title}
		</p>
	</div>
	<div
		class="text-sm md:text-base text-left font-normal !leading-5 md:!leading-6 text-base-100 md:text-secondary group-hover:text-base-100"
	>
		{card.desc}
	</div>
</div>
